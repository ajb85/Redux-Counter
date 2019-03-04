import { INCREMENT, DECREMENT, INC_IF_ODD } from "../actions";

const initialState = {
  displayCount: 0,
  trueCount: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        displayCount: state.displayCount + 1,
        trueCount: state.trueCount + 1
      };
    case DECREMENT:
      return {
        ...state,
        displayCount: state.displayCount - 1,
        trueCount: state.trueCount + 1
      };

    case INC_IF_ODD:
      const newValue = state.trueCount + 1;
      if (state.trueCount % 2 === 0) {
        return {
          ...state,
          displayCount: newValue,
          trueCount: newValue
        };
      } else {
        return {
          ...state,
          trueCount: state.trueCount + 1
        };
      }
    default:
      return state;
  }
};
