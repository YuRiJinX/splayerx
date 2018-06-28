<template>
  <div class="slider">
    <div class="functionality"
      v-if="direction === 'column'">
      <div class="minus-button"
      @mousedown="minus">
        -
      </div>
      <input type="range" ref="slider" v-model="sliderState">
      <div class="plus-button"
       @mousedown="plus">
        +
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
  },
  data() {
    return {
      sliderState: 0,
    };
  },
  methods: {
    minus() {
      this.functionality('minus');
      this.$refs.slider.value -= 1;
    },
    plus() {
      this.functionality('plus');
      this.$refs.slider.value += 1;
    },
  },
  computed: {
    breifInfo() {
      return this.sliderState;
    },
  },
  watch: {
    sliderState(newValue) {
      this.functionality(newValue);
    },
  },
};
</script>

<style lang="scss">
.slider {
  order: 2;

  .functionality {
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .on-button:hover, .off-button:hover {
    cursor: pointer;
  }
}
</style>
