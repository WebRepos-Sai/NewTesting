import { SAVE_COMMENT } from '../actions/types';

export const reducerOne = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
