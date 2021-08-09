import { SAVE_COMMENT } from './types';

export const actionOne = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment
};
};
