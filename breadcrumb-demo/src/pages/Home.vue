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
            <li :class="{'home-list-item':true}" v-for="(item,i) in $store.state.app.groups" :key="item.id" @click="toGroupDetail(item)">
              <span class="list-text">{{item.name}}</span>
            </li>
          </ul>
        </el-col>
        <el-col :span='5'>
          <h3>MEMBER LIST</h3>
          <ul>
            <li :class="{'home-list-item':true}" v-for="(item,i) in $store.state.app.members" :key="item.id" @click="toMemberDetail(item)">
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
      data: {}
    };
  },
  watch: {
    $route: "routeChanged"
  },
  methods: {
    changeBreadcrumbItem(item, i) {
      this.$router.push(item.path);
      let breadcrumbList = this.$store.state.app.breadcrumbs;
      let newList = breadcrumbList.slice(0, i + 1);
      this.$store.commit("setValue", { breadcrumbs: newList });
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
      if (this.$route.name != "HomePage") {
        let itemInfo = this.$utils.getItemByRoute.bind(this)(this.$route);
        let item = itemInfo.item;
        let path = "/home/" + itemInfo.type + "/" + item.id;
        this.$store.commit("setNextBreadcrumb", {
          text: item.name,
          tabName: item.name,
          path
        });
      } else {
        if (this.$store.state.app.breadcrumbsSnapshot.length == 0) {
          this.$store.commit("setValue", {
            breadcrumbsSnapshot: [[
              {
                text: "主页",
                tabName: "home",
                path: "/home"
              }
            ]]
          });
        }
      }
    },
    routeChanged() {}
  },
  async mounted() {
    let vm = this;
    window.onpopstate = function(event) {
      let matched = vm.$route.matched;
      console.info(
        "breadcrumbsSnapshot",
        vm.$store.state.app.breadcrumbsSnapshot
      );
      console.info(matched);
      if (vm.$route.fullPath == "/home") {
        vm.$store.commit("setValue", {
          breadcrumbs: [
            {
              text: "主页",
              tabName: "home",
              path: "/home"
            }
          ]
        });
      }
    };
    const loading = this.$loading({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.3)"
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
</style>
