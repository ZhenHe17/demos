let state = {
  breadcrumbs: [
    {
      text: '主页',
      tabName: 'home',
      path: '/home'
    }
  ],
  breadcrumbsSnapshot: [],
  currentBreadcrumbsIndex: -1,
  activeBreadcrumbItem: 'home',
  groups: [],
  pageData: {},
  members: []
};

let getters = {};

let mutations = {
  setValue(state, values) {
    Object.assign(state, values)
  },
  setNextBreadcrumb(state, breadcrumb) {
    state.breadcrumbs.push(breadcrumb)
    state.currentBreadcrumbsIndex += 1
    state.breadcrumbsSnapshot.push(state.breadcrumbs)
  },
  refreshCurrentBreadcrumb(state, breadcrumb) {
    state.breadcrumbs[state.breadcrumbs.length - 1] = breadcrumb
    state.breadcrumbs = state.breadcrumbs.slice()
    state.breadcrumbsSnapshot[state.breadcrumbsSnapshot.length - 1] = state.breadcrumbs.slice()
  },
  resetCurrentBreadcrumb(state, breadcrumb) {
    state.breadcrumbs[state.breadcrumbs.length - 1] = breadcrumb
    state.breadcrumbs = state.breadcrumbs.slice()
    state.currentBreadcrumbsIndex += 1
    state.breadcrumbsSnapshot.push(state.breadcrumbs.slice())
  },
  setPageData(state, data) {
    Object.assign(state.pageData, data)
  }
};

let actions = {};


/**
 *  在 *vue 中引入 ，操作变量  模块名为app.js
 */

//   this.$store.state.app.example   //获取变量

//   this.$store.commit('example')  //更新变量 不带参数

//   this.$store.commit('Change', total)  //更新变量 带参数

export default {
  state,
  getters,
  mutations,
  actions
}
