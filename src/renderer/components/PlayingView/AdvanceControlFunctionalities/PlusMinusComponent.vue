<template>
  <div class="plus-minus">
    <div class="functionality"
      v-if="direction === 'column'">
      <div class="minus-button"
      @mousedown="onMinusButtonClick">
        -
      </div>
      <div class="current-speed">
        {{ number }}x
      </div>
      <div class="plus-button"
       @mousedown="onPlusButtonClick">
        +
      </div>
      <div class="reset-button"
      @mousedown="onResetButtonClick">
        @
      </div>
    </div>
    <div class="brief-info"
      v-else-if="direction === 'row'">
      {{ number + 'x' }}
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
      number: 1,
    };
  },
  methods: {
    onMinusButtonClick() {
      this.functionality('minus');
      this.number = Math.round((this.number - 0.1) * 10) / 10;
    },
    onPlusButtonClick() {
      this.functionality('plus');
      this.number = Math.round((this.number + 0.1) * 10) / 10;
    },
    onResetButtonClick() {
      this.functionality('reset');
      this.number = 1;
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
