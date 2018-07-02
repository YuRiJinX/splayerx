<template>
  <div class="switch">
    <div class="functionality"
      v-if="direction === 'column'">
      <div class="on-button"
      @mousedown.stop="switchOn">
        On
      </div>
      <div class="off-button"
       @mousedown.stop="switchOff">
        Off
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
      currentState: true,
    };
  },
  methods: {
    switchOn() {
      this.functionality('on');
      this.currentState = true;
    },
    switchOff() {
      this.functionality('off');
      this.currentState = false;
    },
  },
  computed: {
    breifInfo() {
      return this.currentState ? 'On' : 'Off';
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
  .on-button:hover, .off-button:hover {
    cursor: pointer;
  }
}
</style>
