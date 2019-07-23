import { FETCH_PAGES } from "./types"
import pages from "../mocks/pages"

export const fetchPages = () => dispatch => {
  console.log("fetch pages", pages.items)
  dispatch({
    type: FETCH_PAGES,
    payload: pages.items
  })
}
