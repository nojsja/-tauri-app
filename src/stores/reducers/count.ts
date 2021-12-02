import defaultStore from "../defaultStore";
import { ADD, MINUS } from "../actions/count";
import { ReduxAction } from "../../types";

function countReducer(
  state: number = defaultStore.count,
  action: ReduxAction
): number {
  switch (action.type) {
    case ADD:
      return state + action.value;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
}

export default countReducer;
