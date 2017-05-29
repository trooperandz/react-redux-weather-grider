import { FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // Don't manipulate state directly; we need to return a new array entirely
      //return state.push(actions.payload.data);

      // Take an existing array, and flatten it out to return a new one that will take the place of existing state
      return [ action.payload.data, ...state ];
  }
  return state;
}