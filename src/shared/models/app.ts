import { createStore } from 'effector';

export type AppStore = {
  ready: boolean;
};

export const $app = createStore<AppStore>({ ready: false });
