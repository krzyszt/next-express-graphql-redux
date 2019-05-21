import configureStore from './store/configureStore';

const setupStore = () => {
  const store = configureStore({});

  return store;
};

export default setupStore;