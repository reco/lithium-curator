import { combineReducers } from "redux"
import postReducers from "./postReducers"
import pagesReducers from "./pagesReducers"

export default combineReducers({
  posts: postReducers,
  pages: pagesReducers
})
