<template>
  <div class="plus-minus">
    <div class="functionality"
      v-if="direction === 'column'">
      <div class="minus-button"
      @mousedown="minus">
        -
      </div>
      <div class="current-speed">
        {{ currentState }}x
      </div>
      <div class="plus-button"
       @mousedown="plus">
        +
      </div>
      <div class="reset-button"
      @mousedown="reset">
        @
      </div>
    </div>
    <div class="brief-info"
      v-else-if="direction === 'row'">
      {{ currentState + 'x' }}
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
      currentState: 1,
    };
  },
  methods: {
    minus() {
      this.functionality('minus');
      this.currentState = Math.round((this.currentState - 0.1) * 10) / 10;
    },
    plus() {
      this.functionality('plus');
      this.currentState = Math.round((this.currentState + 0.1) * 10) / 10;
    },
    reset() {
      this.functionality('reset');
      this.currentState = 1;
    },
  },
};
</script>

<style lang="scss">
.plus-minus {
  order: 2;

  .functionality {
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .plus-button:hover, .minus-button:hover, .reset-button:hover {
    cursor: pointer;
  }

  .current-speed {
    cursor: default;
    width: 5px;
  }

  .brief-info {

  }
}
</style>
