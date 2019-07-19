import { FETCH_PAGES } from "./types"

import pages from "../mocks/pages"

// console.log("actions", pages)

export const fetchPages = () => dispatch => {
  console.log("fetch pages", pages.items)
  dispatch({
    type: FETCH_PAGES,
    payload: pages.items
  })
}

// export const fetchPages = () => dispatch => {
//   fetch("https://jsonplaceholder.typicode.com/albums", {
//     method: "GET",
//     headers: {
//       "content-type": "applicaton/json"
//     }
//   })
//     .then(res => res.json())
//     .then(pages => {
//       dispatch({
//         type: FETCH_PAGES,
//         payload: pages
//       })
//     })
// }
