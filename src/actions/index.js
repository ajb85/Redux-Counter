export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INC_IF_ODD = "INC_IF_ODD";

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const inc_if_odd = () => {
  return { type: INC_IF_ODD };
};

//export const
