let state = {
  breadcrumbs: [
    {
      text: '主页',
      tabName: 'home',
      path: '/home'
    }
  ],
  breadcrumbsSnapshot: [],
  currentBreadcrumbsIndex: 0,
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
    state.breadcrumbsSnapshot = state.breadcrumbsSnapshot.slice(0, state.currentBreadcrumbsIndex + 1)
    state.currentBreadcrumbsIndex += 1
    // state.breadcrumbsSnapshot.push(state.breadcrumbs.slice())
    state.breadcrumbsSnapshot[state.currentBreadcrumbsIndex] = state.breadcrumbs.slice()
    // state.breadcrumbsSnapshot = state.breadcrumbsSnapshot.slice(0,state.currentBreadcrumbsIndex+1)
  },
  refreshCurrentBreadcrumb(state, breadcrumb) {
    state.breadcrumbs[state.breadcrumbs.length - 1] = breadcrumb
    state.breadcrumbs = state.breadcrumbs.slice()
    state.breadcrumbsSnapshot[state.currentBreadcrumbsIndex] = state.breadcrumbs.slice()
  },
  resetCurrentBreadcrumb(state, breadcrumb) {
    state.breadcrumbs[state.breadcrumbs.length - 1] = breadcrumb
    state.breadcrumbs = state.breadcrumbs.slice()
    state.currentBreadcrumbsIndex += 1
    state.breadcrumbsSnapshot[state.currentBreadcrumbsIndex] = state.breadcrumbs.slice()
    // state.breadcrumbsSnapshot = state.breadcrumbsSnapshot.slice(0,state.currentBreadcrumbsIndex+1)
  },
  setPageData(state, data) {
    Object.assign(state.pageData, data)
  },
  nextBreadcrumbsSnapshot(state) {
    state.currentBreadcrumbsIndex += 1
    state.breadcrumbsSnapshot[state.currentBreadcrumbsIndex] = state.breadcrumbs.slice()
    state.breadcrumbsSnapshot = state.breadcrumbsSnapshot.slice(0,state.currentBreadcrumbsIndex+1)
  },
  addHomeBreadcrumbs(state, length) {
    if (state.breadcrumbs.length == length) {
      state.breadcrumbs.unshift({
        text: '主页',
        tabName: 'home',
        path: '/home'
      })
      state.breadcrumbsSnapshot[state.currentBreadcrumbsIndex] = state.breadcrumbs.slice()
    }
    if (length === 0) {
      state.breadcrumbsSnapshot[state.currentBreadcrumbsIndex] = state.breadcrumbs.slice()
    }
  },
  setCurrentBreadcrumbByIndex(state) {
    state.breadcrumbs = state.breadcrumbsSnapshot[state.currentBreadcrumbsIndex].slice()
  },
  popstateBack(state) {
    state.currentBreadcrumbsIndex -= 1
    if (state.currentBreadcrumbsIndex < 0) {
      debugger
      location.reload()
    } else {
      state.breadcrumbs = state.breadcrumbsSnapshot[state.currentBreadcrumbsIndex].slice()
    }
  },
  popstateForword(state) {
    if (state.currentBreadcrumbsIndex > state.breadcrumbsSnapshot.length - 1) {
      debugger
      location.reload()
    } else {
      state.currentBreadcrumbsIndex += 1
      state.breadcrumbs = state.breadcrumbsSnapshot[state.currentBreadcrumbsIndex].slice()
    }
  },
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
