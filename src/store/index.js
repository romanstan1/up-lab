import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
import {selectNav} from './modules/actions'


export const history = createHistory()

const enhancers = []


function smoothscroll(){
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
       window.requestAnimationFrame(smoothscroll);
       window.scrollTo (0,currentScroll - (currentScroll/4));
    }
}

const logger = store => next => action => {
  let result = next(action)
  console.log('STORE STATE:', store.getState(), action)
  if(action.type === '@@router/LOCATION_CHANGE') {
    smoothscroll()
    store.dispatch(selectNav(action.payload.pathname.substring(1)))
  }
  return result
}

const middleware = [
  thunk,
  routerMiddleware(history),
  logger
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  composedEnhancers
)

export default store
