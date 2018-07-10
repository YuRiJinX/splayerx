<template>
  <div class="advanced">
    <div class="flex-container"
      v-if="isAcitve">
      <div class="menu-name"
        v-if="currentMenu.MenuName != 'Setting'"
        @mousedown.self="backToPreviousMenu">
        {{ '<' + currentMenu.MenuName }}
      </div>
      <AdvanceControlMenuItem
        v-for="item in currentMenu.Menu"
        :key="item.title"
        :item="item">
      </AdvanceControlMenuItem>
    </div>
    <div class="button"
      @mousedown.stop="switchSettingMenuState">
      <img src="~@/assets/icon-advanced.svg" type="image/svg+xml">
    </div>
  </div>
</template>;

<script>
import AdvanceControlMenuData from '@/mixins/Menu.js';
import AdvanceControlMenuItem from './AdvanceControlMenuItem.vue';

export default {
  components: {
    AdvanceControlMenuItem,
  },
  mixins: [AdvanceControlMenuData],
  data() {
    return {
      menuStyle: {
        position: 'absolute',

      },
      isAcitve: false,
    };
  },
  methods: {
    switchSettingMenuState() {
      console.log('switching');
      if (this.isAcitve) {
        this.closeMenu();
      } else {
        this.initialMenu();
        console.log(this.currentMenu);
        this.openMenu();
      }
    },
    closeMenu() {
      this.isAcitve = false;
    },
    openMenu() {
      this.isAcitve = true;
    },
    backToPreviousMenu() {
      this.toPreviousMenu();
    },
  },
  created() {
    this.$bus.$on('changeMenuList', this.changeMenu);
  },
};
</script>

<style lang="scss">
.video-controller {
  .advanced {
    position: absolute;
    bottom: 17px;
    right: 27px;
    z-index: 750;
  }
  .flex-container {
    backdrop-filter: blur(20px);
    background-color: white;
    opacity: 0.3;
    height: auto;
    bottom: 45px;
    padding: 10px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: black;
    border-radius: 4.8px;
    -webkit-app-region: no-drag;
  }

  .menu-name {
    width: 188px;
    background-color: white;
    color: black;
  }
  .menu-name:hover {
    cursor: pointer;
  }
  .button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 35px;
    height: 30px;
    z-index: 1000;
  }

  .button:hover {
    cursor: pointer;
  }

  .button img {
    width: 35px;
    height: 30px;
  }
}
</style>
