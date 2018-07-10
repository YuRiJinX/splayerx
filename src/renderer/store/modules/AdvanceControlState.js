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
        redirection: true,
        redirectionDestination: 'SubtitlesMenu',
        animation: true,
        functionType: 'switch',
      },
      {
        id: 2,
        title: 'Audio',
        redirection: true,
        redirectionDestination: 'AudioMenu', // 所有redirectionDestination的值都必须必须一一对应mutation中的方法名！！
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
  SubtitlesMenu: {
    MenuName: 'Subtitles',
    Menu: [
      {
        id: 0,
        title: 'Language',
        redirection: true,
        animation: true,
        functionType: 'list',
      },
      {
        id: 1,
        title: 'Source',
        redirection: true,
        animation: true,
        functionType: 'list',
      },
      {
        id: 2,
        title: 'Delay',
        redirection: false,
        animation: true,
        functionType: 'plusMinus',
      },
      {
        id: 3,
        title: 'Size',
        redirection: false,
        animation: true,
        functionType: 'slider',
      },
      {
        id: 4,
        title: 'Custom Style',
        redirection: true,
        animation: false,
        functionType: null,
      },
      {
        id: 5,
        title: '2nd Subtitle',
        redirection: true,
        animation: true,
        functionType: 'switch',
      },
    ],
  },
  MediaMenu: {
    MenuName: 'Media Info',
    Menu: [
      {
        id: 0,
        title: 'File Name',
        value: 'This file has a very very long name ...',
        animation: false,
        functionType: 'Info',
      },
      {
        id: 1,
        title: 'Duration',
        value: '1:24:53',
        animation: false,
        functionType: 'Info',
      },
      {
        id: 2,
        title: 'Resolution',
        value: '1920 x 1080',
        animation: false,
        functionType: 'Info',
      },
      {
        id: 3,
        title: 'Frame Rate',
        value: '60 fps',
        animation: false,
        functionType: 'Info',
      },
      {
        id: 4,
        title: 'Video Bit Rate',
        value: '200 mbps',
        animation: false,
        functionType: 'Info',
      },
      {
        id: 5,
        title: 'Container Format',
        value: 'a$%^&*()',
        animation: false,
        functionType: 'Info',
      },
    ],
  },
  AudioMenu: {
    MenuName: 'Audio',
    Menu: [
      {
        id: 0,
        title: 'Track',
        redirection: true,
<<<<<<< HEAD
        animation: false,
=======
        animation: true,
>>>>>>> dbc05e829820dfe14abcb3704fa896ba788f4593
        functionType: 'list',
      },
      {
        id: 1,
        title: 'Delay',
        redirection: false,
        animation: true,
        functionType: 'plusMinus',
      },
    ],
  },
};

const getters = {
};

const mutations = {
  InitialMenu(state) {
    state.PreviousMenu = null;
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
  SubtitlesMenu(state) {
    state.PreviousMenu = state.CurrentMenu;
    state.CurrentMenu = state.SubtitlesMenu;
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
