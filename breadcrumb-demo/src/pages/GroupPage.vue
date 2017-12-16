<template>
  <div class="group-page content">
    <Sidebar @on-change='changeGroup' type="group" />
    <el-select clearable v-model="data['filterSex'+$route.params.id]" placeholder="筛选组员性别">
      <el-option
        v-for="item in data.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input
      placeholder="筛选组员姓名"
      v-model="data['filterName'+$route.params.id]">
    </el-input>
    <el-button type="primary" @click="queryName" icon="el-icon-search">查询</el-button>
    <br>
    <ol>
      <li class="home-list-item" v-for="(item,i) in data.filteredList" :key="item.id">
        <span @click="toMemberDetail(item)" class="list-text">{{item.name}}&emsp;{{item.sex}}</span>
      </li>
    </ol>
  </div>
</template>

<script>
import Sidebar from "../components/groupSidebar.vue";
export default {
  name: "page-group",
  data() {
    return {
      data: {
        memberList: [],
        filteredList: [],
        filterSex: "",
        filterName: "",
        query: false,
        options: [
          {
            value: "male",
            label: "男性"
          },
          {
            value: "female",
            label: "女性"
          }
        ]
      }
    };
  },
  watch: {
    '$route.path': "mountedFunc"
  },
  methods: {
    async changeGroup(params) {
      if (this.$route.params.id != params.item.id) {
        this.query = false;
        params.config.data = this.data;
        params.config.route = this.$route;
        this.$utils.pushState.bind(this)(params.item, params.config);
      }
    },
    render() {
      this.data.memberList = this.$utils.getMemberListByGroupId(
        this.$route.params.id,
        this.$store.state.app.members
      );
      if (this.data.query) {
        this.filterMember();
      } else {
        this.data.filteredList = this.data.memberList.slice();
      }
      this.data.path = this.$route.path;
    },
    filterMember() {
      let filters = [
        {
          key: "sex",
          value: this.data.filterSex
        },
        {
          key: "name",
          value: this.data.filterName
        }
      ];
      this.data.filteredList = this.$utils.filterData(
        this.data.memberList,
        filters
      );
    },
    toMemberDetail(item) {
      this.$utils.pushState.bind(this)(item, {
        type: "member",
        option: "next",
        data: this.data,
        route: this.$route
      });
    },
    queryName() {
      this.data.query = true;
      this.filterMember();
    },
    async mountedFunc() {
      this.$utils.detailPageMountedFunc.bind(this)();
      console.info("group page mounted");
    }
  },
  components: {
    Sidebar
  },
  mounted() {
    this.mountedFunc();
  },
  beforeDestroy() {
    let data = {};
    data[this.data.path] = JSON.parse(JSON.stringify(this.data));
    this.$store.commit("setPageData", data);
  }
};
</script>

<style lang="less">
.el-select,
.el-input {
  width: 200px;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
