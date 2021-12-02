import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { Status, RootState } from "../../types";

export const ADD = "ADD";
export const MINUS = "MINUS";

export function setValue<T extends keyof Status>(key: T, value: Status[T]) {
  return {
    type: ADD,
    key,
    value
  };
};

export function addNumber(value?: number) {
  return {
    type: ADD,
    value: value ?? 1
  }
}

export function minusNumber(value=1) {
  return {
    type: MINUS,
    value
  }
}

export const addNumberAsync = (value?: number): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addNumber(value));
    }, 1e3);
  };
};

export type SetStatusAction = ReturnType<typeof setValue>;