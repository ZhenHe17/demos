import axios from "axios";
const utils = {
  refreshLists() {
    return new Promise(async (resolve, reject) => {
      let randomListNum = Math.floor(Math.random() * 3 + 1);
      let res = await axios.get("http://localhost:3000/fakelist" + randomListNum);
      setTimeout(() => {
        this.$store.commit("setValue", { groups: res.data.groups });
        this.$store.commit("setValue", { members: res.data.members });
        resolve(res)
      }, 600)
    })
  },
  pushState(item, config) {
    let path = '/home/' + Date.now() + '/' + config.type + '/' + item.id
    switch (config.option) {
      case 'next':
        this.$store.commit('setNextBreadcrumb', {
          text: item.name,
          tabName: item.name,
          path
        })
        break;
      case 'reset':
        this.$store.commit('resetCurrentBreadcrumb', {
          text: item.name,
          tabName: item.name,
          path
        })
        break;
      case 'refresh':
        this.$store.commit('refreshCurrentBreadcrumb', {
          text: item.name,
          tabName: item.name,
          path
        })
        break;
      default:
        break;
    }
    console.info('breadcrumbsSnapshot', this.$store.state.app.breadcrumbsSnapshot)
    console.info('breadcrumbsIndex', this.$store.state.app.currentBreadcrumbsIndex)
    console.info('history', history.state)
    let data = {}
    data[config.route.path] = JSON.parse(JSON.stringify(config.data))
    this.$store.commit('setPageData', data)
    // console.info('pushStateItem', item)
    // console.info('pushStateConfig', config)
    // console.info('pageData', this.$store.state.app.pageData)
    this.$router.push(path)
  },
  getPastData(path) {
    if (this.$store.state.app.pageData[path]) {
      this.data = JSON.parse(JSON.stringify(this.$store.state.app.pageData[path]))
    }
  },
  getItemByRoute(route) {
    let searchArr = []
    let searchId = route.params.id
    let type = ''
    function findItem(item) {
      return item.id == searchId;
    }
    switch (route.name) {
      case 'MemberPage':
        searchArr = this.$store.state.app.members
        type = 'member'
        break;
      case 'GroupPage':
        searchArr = this.$store.state.app.groups
        type = 'group'
        break;
      default:
        console.error('item not found')
        return false
        break;
    }
    // console.info('item',searchArr.find(findItem))
    return {
      item: searchArr.find(findItem),
      type
    }
  },
  getMemberListByGroupId(groupId, memberList) {
    return memberList.filter((member) => {
      return member.groupInfo.find((id) => {
        return id == groupId;
      })
    })
  },
  getGroupListByGroupIds(groupIds, groupList) {
    return groupList.filter((group) => {
      return groupIds.find((id) => {
        return group.id == id;
      })
    })
  },
  getMemberByMemberId(memberId, memberList) {
    for (let member of memberList) {
      if (member.id == memberId) {
        return member
      }
    }
  },
  filterData(source, filters) {
    let result = source.slice()
    filters.forEach(filter => {
      if (filter.value === 0 || filter.value) {
        result = source.filter((ele) => {
          return ele[filter.key] == filter.value
        })
      }
      // console.info(result)
    });
    return result
  },
  refreshBreadcrumb() {
    let itemInfo = this.$utils.getItemByRoute.bind(this)(this.$route);
    let item = itemInfo.item
    let path = '/home/' + Date.now() + '/'  + itemInfo.type + '/' + item.id
    this.$store.commit("refreshCurrentBreadcrumb", {
      text: item.name,
      tabName: item.name,
      path
    });
  },
  async detailPageMountedFunc() {
    this.$utils.getPastData.bind(this)(this.$route.path);
    this.render();
    // console.info("past members", this.$store.state.app.members);
    if (this.$store.state.app.breadcrumbs.length == 1) {
      this.$utils.refreshBreadcrumb.bind(this)();
      this.$store.commit("addHomeBreadcrumbs", 1);
    }
    await this.$utils.refreshLists.bind(this)();
    this.render();
    this.$utils.refreshBreadcrumb.bind(this)();
    // console.info("new members", this.$store.state.app.members);
  }
}

export default utils
