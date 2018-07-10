
export default {
  data() {
    return {
      currentMenu: null,
      previousMenu: null,
      settingMenu: {
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
            redirectionDestination: 'subtitlesMenu',
            animation: true,
            functionType: 'switch',
          },
          {
            id: 2,
            title: 'Audio',
            redirection: true,
            redirectionDestination: 'audioMenu',
            animation: false,
            functionType: null,
          },
          {
            id: 3,
            title: 'Media Info',
            redirection: true,
            redirectionDestination: 'mediaMenu',
            animation: false,
            functionType: null,
          },
        ],
      },
      subtitlesMenu: {
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
      mediaMenu: {
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
      audioMenu: {
        MenuName: 'Audio',
        Menu: [
          {
            id: 0,
            title: 'Track',
            redirection: true,
            animation: false,
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
  },
  methods: {
    initialMenu() {
      this.previousMenu = null;
      this.currentMenu = this.settingMenu;
    },
    toPreviousMenu() {
      this.currentMenu = this.previousMenu;
    },
    toMediaMenu() {
      this.previousMenu = this.currentMenu;
      this.currentMenu = this.mediaMenu;
    },
    toAudioMenu() {
      this.previousMenu = this.currentMenu;
      this.currentMenu = this.audioMenu;
    },
    toSubtitlesMenu() {
      this.previousMenu = this.currentMenu;
      this.currentMenu = this.subtitlesMenu;
    },
    changeMenu(menu) {
      switch (menu) {
        case 'mediaMenu':
          this.toMediaMenu();
          break;
        case 'subtitlesMenu':
          this.toSubtitlesMenu();
          break;
        case 'audioMenu':
          this.toAudioMenu();
          break;
        default:
          break;
      }
    },
  },
};
