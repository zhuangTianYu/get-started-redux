import { fetchYear as fetchYearService } from '../../service'
import {
  FETCH_YEAR_REQUEST,
  FETCH_YEAR_SUCCESS,
  FETCH_YEAR_FAILURE
} from '../action-types'

const fetchYearRequest = () => ({
  type: FETCH_YEAR_REQUEST
})

const fetchYearSuccess = list => ({
  type: FETCH_YEAR_SUCCESS,
  list
})

const fetchYearFailure = error => ({
  type: FETCH_YEAR_FAILURE,
  error
})

export const fetchYear = () => dispatch => {
  dispatch(fetchYearRequest())

  return fetchYearService()
    .then(list => dispatch(fetchYearSuccess(list)))
    .catch(error => dispatch(fetchYearFailure(error)))
}
