<template>
<div class="items"
  :style="menuItemStyle"
  @mousedown.stop="onMenuItemClick"
  @mouseover.stop="onMenuItemMouseOver"
  @mouseout.stop="resetAppearence">
  <div
    :style="titleStyle"
    class="title">{{ item.title }}</div>
  <PlusMinusComponent v-if="item.functionType === 'plusMinus'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>
  <SwitchComponent v-else-if="item.functionType === 'switch'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>

  <SliderComponent v-else-if="item.functionType === 'slider'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>

  <PickerComponent v-else-if="item.functionType === 'picker'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>

  <ListComponent v-else-if="item.functionType === 'list'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>

  <InfoComponent v-else-if="item.functionType === 'info'"
    :direction="menuItemStyle.flexDirection"
    :functionality="item.functionality"/>

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
        backgroundColor: '',
        fontSize: '16px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: '4px',
      },
      titleStyle: {
        order: 1,
      },
    };
  },
  methods: {
    resetAppearence() {
      this.$_resetItemBackground();
      this.titleStyle.fontSize = '16px';
      this.titleStyle.color = 'rgba(0,0,0,1)';
      this.titleStyle.height = '100%';

      this.menuItemStyle.flexDirection = 'row';
    },
    onMenuItemMouseOver() {
      this.$_setItemBackground();
      if (this.item.animation) {
        this.titleStyle.height = '30%';
        this.titleStyle.fontSize = '12px';
        this.titleStyle.color = 'rgba(0, 0, 0, 1)';
        console.log('mouseover');
        this.menuItemStyle.flexDirection = 'column';
      }
    },
    $_setItemBackground() {
      this.menuItemStyle.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    },
    $_resetItemBackground() {
      this.menuItemStyle.backgroundColor = '';
    },
    onMenuItemClick() {
      if (this.item.redirection) {
        this.$bus.$emit('changeMenuList', this.item.redirectionDestination);
      }
    },
  },
};
</script>

<style lang="scss">
.video-controller {
  .items {
    display: flex;
    height: 35px;

    .title {
      padding: 0;
      cursor: default;
      transition: font-size 100ms;
    }
  }
}
</style>
