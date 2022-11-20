import { configureStore } from "@reduxjs/toolkit";

import { rootReducer, actions } from "ems-databinder";

const store = configureStore({
  reducer: rootReducer,
});

export { actions, store };
