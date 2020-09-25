import { combineReducers } from 'redux'
import {
  FETCH_YEAR_REQUEST,
  FETCH_YEAR_SUCCESS,
  FETCH_YEAR_FAILURE
} from '../action-types'

const base = {
  list: [],
  fetching: false,
  error: null
}

const year = (state = base, action) => {
  const { type, list, error } = action

  switch (type) {
    case FETCH_YEAR_REQUEST:
      return { ...state, fetching: true, error: null }
    case FETCH_YEAR_SUCCESS:
      return { ...state, fetching: false, list }
    case FETCH_YEAR_FAILURE:
      return { ...state, fetching: false, error }
    default:
      return state
  }
}

const reducer = combineReducers({ year })

export default reducer
