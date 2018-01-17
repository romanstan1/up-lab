
const initialState = {
  selectedNav: '',
  posts: [],
  burgerClicked: false
}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'SELECT_NAV': return {
      ...state,
      selectedNav: action.payload
    }
    case 'LOAD_BLOG_POSTS': return {
      ...state,
      posts: action.replace? action.payload.data : state.posts.concat(action.payload.data)
    }
    case 'CLICK_BURGER_MENU': return {
      ...state,
      burgerClicked: !state.burgerClicked
    }
    default: return state
  }
}
