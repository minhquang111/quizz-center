import { configureStore } from '@reduxjs/toolkit';
import examReducer from './examGroup';
import multiLanguageReducer from './multiLanguage';

const rootReducer = { examReducer, multiLanguageReducer };

const store = configureStore({
  reducer: rootReducer,
});

export default store;
