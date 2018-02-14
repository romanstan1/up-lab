
export const selectNav = (selected) => {
  return dispatch => dispatch({
    type: 'SELECT_NAV',
    payload: selected
  })
}

export const loadBlogPosts = (posts, replace) => {
  return dispatch => dispatch({
    type: 'LOAD_BLOG_POSTS',
    payload: posts,
    replace
  })
}
export const clickBurgerMenu = () => {
  return dispatch => dispatch({
    type: 'CLICK_BURGER_MENU'
  })
}
