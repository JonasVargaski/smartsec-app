export function updateProfileRequest(data) {
  return {
    type: '@profile/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@profile/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@profile/UPDATE_PROFILE_FAILURE',
  };
}
