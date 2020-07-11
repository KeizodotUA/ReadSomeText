export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('siteState');
    return (serializedState !== null) ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('siteState', serializedState);
  } catch (err) {
    // Some error handler
  }
};
