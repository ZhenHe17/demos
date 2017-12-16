<template>
  <div class="siderbar-container">
    <ul v-if="type === 'group'">
        <li
        :class="{'list-item':true, 'active-item':activeId == item.id}"
        v-for="(item,i) in $store.state.app.groups" :key="item.id" @click="changeListItem(item)">
          {{item.name}}
        </li>
    </ul>
    <ul v-else>
        <li
        :class="{'list-item':true, 'active-item':activeId == item.id}"
        v-for="(item,i) in $store.state.app.members" :key="item.id"
        @click="changeListItem(item)">
          {{item.name}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "siderbar",
  props: [
    // group or member
    "type"
  ],
  data() {
    return {};
  },
  computed: {
    activeId() {
      return this.$route.params.id;
    }
  },
  methods: {
    changeListItem(item) {
      if (item.id != this.activeId) {
        this.$emit("on-change", {
          item,
          config: {
            type: this.type,
            option: "reset"
          }
        });
      }
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.siderbar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 8;
  background: #fff;
  width: 200px;
  line-height: 30px;
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.16);
  font-size: 16px;
  cursor: default;
  color: #666;
  padding: 80px 0px;
  padding-left: 30px;
  box-sizing: border-box;
  .list-item {
    cursor: pointer;
  }
  .active-item {
    color: #000;
    border-right: 4px solid #ccc;
  }
}
</style>
