
const state = {
  CurrentMenu: null,
  PreviousMenu: null,
  InitialMenu: {
    MenuName: 'Setting',
    Menu: [
      {
        id: 0,
        title: 'PlaybackRate',
        redirection: false,
        animation: true,
        functionType: 'plusMinus',
        functionality(type) {
          switch (type) {
            case 'plus':
              this.$store.commit('IncreasePlaybackRate');
              break;
            case 'minus':
              this.$store.commit('DecreasePlaybackRate');
              break;
            case 'reset':
              this.$store.commit('ResetPlaybackRate');
              break;
            default:
              break;
          }
        },
      },
      {
        id: 1,
        title: 'Subtitle',
        redirection: false,
        animation: true,
        functionType: 'switch',
      },
      {
        id: 2,
        title: 'Audio',
        redirection: true,
        redirectionDestination: 'AudioMenu', // 所有此项的值都必须必须一一对应mutation中的方法名！！
        animation: false,
        functionType: null,
      },
      {
        id: 3,
        title: 'Media Info',
        redirection: true,
        redirectionDestination: 'MediaMenu',
        animation: false,
        functionType: null,
      },
    ],
  },
  MediaMenu: {
    MenuName: 'Media Info',
    Menu: [],
  },
  AudioMenu: {
    MenuName: 'Audio',
    Menu: [
      {
        id: 0,
        title: 'Language',
        redirection: false,
        animation: true,
        functionType: 'plusMinus',
      },
      {
        id: 1,
        title: 'Source',
        redirection: false,
        animation: true,
        functionType: 'switch',
      },
      {
        id: 2,
        title: 'Delay',
        redirection: false,
        animation: false,
      },
      {
        id: 3,
        title: 'Size',
        redirection: false,
        animation: false,
      },
      {
        id: 4,
        title: 'CustomStyle',
        redirection: false,
        animation: false,
      },
      {
        id: 5,
        title: '2nd Subtitle',
        redirection: false,
        animation: false,
      },
    ],
  },
};

const getters = {
};

const mutations = {
  InitialMenu(state) {
    state.CurrentMenu = state.InitialMenu;
  },
  PreviousMenu(state) {
    state.CurrentMenu = state.PreviousMenu;
  },
  MediaMenu(state) {
    state.PreviousMenu = state.CurrentMenu;
    state.CurrentMenu = state.MediaMenu;
  },
  AudioMenu(state) {
    state.PreviousMenu = state.CurrentMenu;
    state.CurrentMenu = state.AudioMenu;
  },
};

const actions = {
};

export default {
  state,
  mutations,
  actions,
  getters,
};
