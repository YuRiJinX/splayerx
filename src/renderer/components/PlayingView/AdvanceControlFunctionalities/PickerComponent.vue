<template>
  <div class="picker">
    <div class="functionality"
      v-if="direction === 'column'">
      <div class="selections"
        v-for="(item, index) in selections"
        @mousedown="pick(index)"
        :key="item.title">
      </div>
    </div>
    <div class="brief-info"
      v-else-if="direction === 'row'">
      {{ breifInfo }}
    </div>
  </div>
</template>;

<script>
export default {
  props: {
    direction: String,
    functionality: null,
    selections: [],
  },
  data() {
    return {
      currentState: this.selections[0],
    };
  },
  methods: {
    pick(index) {
      this.functionality(index);
      this.currentState = this.selections[index];
    },
  },
  computed: {
    breifInfo() {
      return this.currentState;
    },
  },
};
</script>

<style lang="scss">
.switch {
  order: 2;
  .functionality {
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .selections:hover {
    cursor: pointer;
  }
}
</style>
