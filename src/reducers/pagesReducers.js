import { FETCH_PAGES } from "../actions/types"

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAGES:
      console.log(action)
      return {
        ...state,
        items: action.payload
      }

    default:
      return state
  }
}
