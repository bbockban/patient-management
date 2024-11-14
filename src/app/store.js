import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from '@features/sessionSlice';

const store = configureStore({
  reducer: {
    sessionReducer,
  },
});

export default store;
