import { atom } from 'recoil';

export const todoState = atom({
  key: 'todoState',
  default: {
    id: 1,
    title: '',
  },
});

export const todosState = atom({
  key: 'todosState',
  default: [],
});
