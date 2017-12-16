<template>
  <div class="member-page content">
    <Sidebar @on-change='changeMember' type="member" />
    <el-tabs v-model="data.activeName" @tab-click="clickTab">
      <el-tab-pane v-for="(item,i) in data.currentGroupList" :key="item.id" :label="item.name" :name="item.id">
        <h3>MEMBER IN <a class="group-link" @click="toGroupDetail(item)">{{groupName}}</a></h3>
        <ol>
          <li class="home-list-item" v-for="(member,i) in data.currentMemberList" :key="member.id">
            <span class="list-text" @click="changeMember({item:member,config:{type:'member',option:'reset'}})">{{member.name}}&emsp;{{member.sex}}</span>
          </li>
        </ol>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Sidebar from "../components/groupSidebar.vue";
export default {
  name: "page-member",
  data() {
    return {
      data: {
        activeName: "",
        currentMember: {},
        currentGroup: {},
        currentGroupList: [],
        currentMemberList: []
      }
    };
  },
  computed: {
    groupName() {
      return this.data.currentGroup.name.toUpperCase();
    }
  },
  watch: {
    '$route.path': 'mountedFunc'
  },
  methods: {
    async changeMember(params) {
      if (this.$route.params.id != params.item.id) {
        params.config.data = this.data;
        params.config.route = this.$route;
        this.$utils.pushState.bind(this)(params.item, params.config);
      }
    },
    toGroupDetail(item) {
      this.$utils.pushState.bind(this)(item, {
        type: "group",
        option: "next",
        data: this.data,
        route: this.$route
      });
    },
    clickTab(tab, event) {
      this.data.currentGroup = this.data.currentGroupList[parseInt(tab.index)];
      this.getCurrentMemberList();
    },
    getCurrentMemberList() {
      this.data.currentMemberList = this.$utils.getMemberListByGroupId(
        this.data.currentGroup.id,
        this.$store.state.app.members
      );
    },
    async mountedFunc() {
      this.$utils.detailPageMountedFunc.bind(this)();
      // console.info("new members", this.$store.state.app.members);
      console.info("member page mounted");
    },
    render() {
      this.data.currentMember = this.$utils.getMemberByMemberId(
        this.$route.params.id,
        this.$store.state.app.members
      );
      this.data.currentGroupList = this.$utils.getGroupListByGroupIds(
        this.data.currentMember.groupInfo,
        this.$store.state.app.groups
      );
      if (this.$store.state.app.pageData[this.$route.path]) {
        this.data.activeName = this.$store.state.app.pageData[
          this.$route.path
        ].activeName;
      } else {
        this.data.activeName = this.data.currentGroupList[0].id;
      }
      this.data.currentGroup = this.$utils.getMemberByMemberId(
        parseInt(this.data.activeName),
        this.$store.state.app.groups
      );
      this.data.path = this.$route.path;
      this.getCurrentMemberList();
      // console.info(this.data.currentGroupList);
      // console.info(this.data.activeName);
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

<style lang="less" scoped>
.group-link {
  color: #3388ff;
  cursor: pointer;
  text-decoration: underline;
}
</style>
