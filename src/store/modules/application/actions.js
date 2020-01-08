export function changeAppState(status) {
  return {
    type: '@application/CHANGE_APP_STATE',
    payload: { status },
  };
}
