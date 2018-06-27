
const state = {
  CurrentTime: 0, // current position (in seconds) of the audio/video playback
  AccurateTime: 0.0, // current position (in ms) of the audio/video playback
  Duration: NaN,
  Volume: 0.2,
  SrcOfVideo: '',
  PlaybackRate: 1.0,
};

const getters = {
};

const mutations = {
  IncreasePlaybackRate(state) {
    state.PlaybackRate += 0.1;
  },
  DecreasePlaybackRate(state) {
    state.PlaybackRate -= 0.1;
  },
  ResetPlaybackRate(state) {
    state.PlaybackRate = 1;
  },
  SrcOfVideo(state, t) {
    state.SrcOfVideo = t;
  },
  CurrentTime(state, t) {
    state.CurrentTime = t;
  },
  AccurateTime(state, t) {
    state.AccurateTime = t;
  },
  Duration(state, t) {
    state.Duration = t;
  },
  Volume(state, v) {
    state.Volume = v;
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
