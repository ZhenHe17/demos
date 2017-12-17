<template>
  <div class="home-page">
    <div class="header">
      <ul class="breadcrumb">
        <li :class="{'bread-item':true, 'active-item':i==$store.state.app.breadcrumbs.length-1}" v-for="(item,i) in $store.state.app.breadcrumbs" :key="i" @click="changeBreadcrumbItem(item,i)">
          {{item.text}}
          <i v-if="i!==$store.state.app.breadcrumbs.length-1" class="el-icon-arrow-right"></i>
        </li>
      </ul>
    </div>
    <div v-show="$route.name == 'HomePage'" class="home-container">
      <el-row>
        <el-col :span='5'>
          <h3>GROUP LIST</h3>
          <ul>
            <li :class="{'home-list-item':true}" v-for="(item) in $store.state.app.groups" :key="item.id" @click="toGroupDetail(item)">
              <span class="list-text">{{item.name}}</span>
            </li>
          </ul>
        </el-col>
        <el-col :span='5'>
          <h3 @click="consoleList">MEMBER LIST</h3>
          <ul>
            <li :class="{'home-list-item':true}" v-for="(item) in $store.state.app.members" :key="item.id" @click="toMemberDetail(item)">
              <span class="list-text">{{item.name}}</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div v-if="done">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      contentType: "",
      done: false,
      pastStateDate: 0,
      isFirstLoad: true,
      popStateType: "back",
      data: {}
    };
  },
  watch: {
    $route: "routeChanged"
  },
  methods: {
    consoleList() {
      console.info(
        "currentBreadcrumbsIndex",
        this.$store.state.app.currentBreadcrumbsIndex
      );
      console.info(
        "breadcrumbsSnapshot",
        this.$store.state.app.breadcrumbsSnapshot
      );
    },
    changeBreadcrumbItem(item, i) {
      let newPath = item.path.replace(/\/home\/[0-9]+/,'/home/'+Date.now())
      this.$router.push(newPath);
      let breadcrumbList = this.$store.state.app.breadcrumbs;
      let newList = breadcrumbList.slice(0, i + 1);
      console.info('newList',newList)
      this.$store.commit("setValue", { breadcrumbs: newList });
      this.$store.commit("nextBreadcrumbsSnapshot");
      this.consoleList();
    },
    toGroupDetail(item) {
      this.$utils.pushState.bind(this)(item, {
        type: "group",
        option: "next",
        data: this.data,
        route: this.$route
      });
    },
    toMemberDetail(item) {
      this.$utils.pushState.bind(this)(item, {
        type: "member",
        option: "next",
        data: this.data,
        route: this.$route
      });
    },
    setCurrentBreadcrumb() {
      if (this.$route.name == "HomePage") {
        this.$store.commit("addHomeBreadcrumbs", 0);
      }
    },
    back() {},
    forword() {},
    routeChanged() {
      // this.setCurrentBreadcrumb()
    }
  },
  async mounted() {
    let vm = this;
    console.info(
      "currentBreadcrumbsIndex",
      vm.$store.state.app.currentBreadcrumbsIndex
    );
    this.pastStateDate =
      history.state && history.state.date ? history.state.date : 0;
    window.onpopstate = function(event) {
      let date =
        vm.$route.params && vm.$route.params.date ? vm.$route.params.date : 0;
      vm.consoleList();
      if (vm.isFirstLoad) {
        vm.isFirstLoad = false;
        console.info("popstateBack");
        vm.$store.commit("popstateBack");
      } else {
        console.info("date", date);
        console.info("vm.pastStateDate", vm.pastStateDate);
        console.info("date > vm.pastStateDate", date > vm.pastStateDate);
        if (date > vm.pastStateDate) {
          vm.$store.commit("popstateForword");
        } else {
          vm.$store.commit("popstateBack");
        }
      }
      vm.pastStateDate = date;
    };
    const loading = this.$loading({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.5)"
    });
    await this.$utils.refreshLists.bind(this)();
    this.setCurrentBreadcrumb();
    this.done = true;
    loading.close();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home-page {
  background: #f5f5f5;
  .header {
    position: fixed;
    z-index: 9;
    background: #f5f5f5;
    height: 50px;
    line-height: 50px;
    overflow-y: auto;
    width: 100%;
    border-bottom: 0.5px solid #95989a;
    box-shadow: 1px 0 6px rgba(0, 0, 0, 0.16);
    font-size: 16px;
    cursor: default;
    color: #999;
    padding: 0px 30px;
    font-size: 18px;
    box-sizing: border-box;
  }
  .bread-item {
    display: inline-block;
    padding: 0px 6px 0 0;
    cursor: pointer;
  }
  .bread-item:last-child {
    border-right: none;
  }
  .active-item {
    color: #000;
  }
  .content {
    padding-top: 80px;
    padding-left: 220px;
    box-sizing: border-box;
  }
  .home-container {
    padding: 80px 20px;
    font-size: 18px;
    color: #333;
  }
  .list-text,
  h3 {
    padding: 10px;
    display: inline-block;
  }
  .list-text {
    cursor: pointer;
  }
  .list-text:hover {
    background: #ddd;
  }
}
.el-loading-spinner .el-loading-text,
.el-loading-spinner i {
  color: #fff;
  font-size: 40px;
}
</style>
