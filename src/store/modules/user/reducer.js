import produce from 'immer';

const INITIAL_STATE = {
  profile: {
    id: null,
    name: '',
    email: '',
    avatar: null,
  },
};

export default function profile(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@user/UPDATE_AVATAR_SUCCESS': {
        draft.profile.avatar = {
          id: action.payload.id,
          url: action.payload.url,
        };
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = INITIAL_STATE;
        break;
      }
      default:
    }
  });
}
