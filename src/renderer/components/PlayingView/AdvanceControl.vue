<template>
  <div :style="menuStyle">
    <div class="advanced"
      v-if="isAcitve">
      <div class="menu-name"
        v-if="currentMenu.MenuName != 'Setting'"
        @mousedown.self="backToPreviousMenu">
        {{ '<' + currentMenu.MenuName }}
      </div>
      <div class="flex-container">
        <AdvanceControlMenuItem
          v-for="item in currentMenu.Menu"
          :key="item.id"
          :item="item">
        </AdvanceControlMenuItem>
      </div>
    </div>
    <div class="button"
      @mousedown.stop="switchSettingMenuState">
      <img src="~@/assets/icon-advanced.svg" type="image/svg+xml">
    </div>
  </div>
</template>;

<script>
import AdvanceControlMenuItem from './AdvanceControlMenuItem.vue';

export default {
  components: {
    AdvanceControlMenuItem,
  },
  data() {
    return {
      menuStyle: {
        position: 'absolute',
        bottom: '17px',
        right: '27px',
        width: '45px',
        height: '40px',
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
        this.$store.commit('InitialMenu');
        console.log(this.currentMenu);
        this.openMenu();
      }
    },
    closeMenu() {
      this.menuStyle.width = `${45}px`;
      this.menuStyle.height = `${40}px`;
      this.isAcitve = false;
    },
    openMenu() {
      this.menuStyle.width = `${208}px`;
      this.$_fitMenuSize();
      this.isAcitve = true;
    },
    backToPreviousMenu() {
      this.$store.commit('PreviousMenu');
      this.$_fitMenuSize();
    },
    $_fitMenuSize() {
      this.menuStyle.height = (this.currentMenu.MenuName === 'Setting') ?
        `${(this.currentMenu.Menu.length * 22) + 120}px` : `${((this.currentMenu.Menu.length + 1) * 22) + 140}px`;
    },
  },
  computed: {
    currentMenu() {
      return this.$store.state.AdvanceControlState.CurrentMenu;
    },
  },
  created() {
    this.$bus.$on('changeMenuList', (changedLevel) => {
      this.$store.commit(changedLevel);
      this.$_fitMenuSize();
    });
  },
};
</script>

<style lang="scss">
.video-controller {
  .advanced {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    backdrop-filter: blur(20px);
    opacity: 0.3;
    color: black;
    border-radius: 4.8px;
    z-index: 750;
    -webkit-app-region: no-drag;
  }

  .flex-container {
    position: absolute;
    width: 100%;
    bottom: 45px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .menu-name {
    position: absolute;
    width: 100%;
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
