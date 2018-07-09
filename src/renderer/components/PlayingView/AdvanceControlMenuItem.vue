<template>
<div class="items"
  :style="menuItemStyle"
  @mousedown.stop="onMenuItemClick"
  @mouseover.stop="onMenuItemMouseOver"
  @mouseout.stop="resetAppearence">
  <div
    :class="titleClassObject">{{ item.title }}</div>
  <PlusMinusComponent v-if="item.functionType === 'plusMinus'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>

  <SliderComponent v-else-if="item.functionType === 'slider'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>

  <SwitchComponent v-else-if="item.functionType === 'switch'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>

  <PickerComponent v-else-if="item.functionType === 'picker'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>

  <ListComponent v-else-if="item.functionType === 'list'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>

  <InfoComponent v-else-if="item.functionType === 'Info'"
    :value="item.value"/>

</div>
</template>;

<script>
import PlusMinusComponent from './AdvanceControlFunctionalities/PlusMinusComponent.vue';
import SwitchComponent from './AdvanceControlFunctionalities/SwitchComponent.vue';
import SliderComponent from './AdvanceControlFunctionalities/SliderComponent.vue';
import PickerComponent from './AdvanceControlFunctionalities/PickerComponent.vue';
import ListComponent from './AdvanceControlFunctionalities/ListComponent.vue';
import InfoComponent from './AdvanceControlFunctionalities/InfoComponent.vue';

export default {
  components: {
    PlusMinusComponent,
    SwitchComponent,
    SliderComponent,
    PickerComponent,
    ListComponent,
    InfoComponent,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      menuItemStyle: {
        flexDirection: 'row',
        backgroundColor: '',
      },
      titleClassObject: {
        title: true,
        mouseover: false,
      },
    };
  },
  methods: {
    resetAppearence() {
      if (this.item.functionType !== 'Info') {
        this.titleClassObject.title = true;
        this.titleClassObject.mouseover = false;
        this.menuItemStyle.flexDirection = 'row';
        this.menuItemStyle.backgroundColor = '';
      }
    },
    onMenuItemMouseOver() {
      if (this.item.functionType !== 'Info') {
        this.menuItemStyle.backgroundColor = 'rgba(0, 0, 0, 0.3)';
      }
      if (this.item.animation) {
        this.titleClassObject.title = false;
        this.titleClassObject.mouseover = true;
        this.menuItemStyle.flexDirection = 'column';
      }
    },
    onMenuItemClick() {
      if (this.item.redirection) {
        this.$bus.$emit('changeMenuList', this.item.redirectionDestination);
      }
    },
  },
  mounted() {
    if (this.item.functionType === 'Info') {
      this.menuItemStyle.flexDirection = 'column';
      this.menuItemStyle.backgroundColor = '';
      this.titleClassObject.title = false;
      this.titleClassObject.mouseover = true;
    }
  },
};
</script>

<style lang="scss">
.video-controller {
  .items {
    display: flex;
    width: 188px;
    min-height: 38px;
    font-size: 16px;
    justify-content: space-between;
    border-radius: 4px;

    .title {
      order: 1;
      font-size: 16px;
      color: rgba(0,0,0,1);
      height: 100%;
      cursor: default;
      transition: font-size 100ms;
    }
    .mouseover {
      height: 30%;
      font-size: 12px;
      color: rgba(0,0,0,1);
    }
  }
}
</style>
