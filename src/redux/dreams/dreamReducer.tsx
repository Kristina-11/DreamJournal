import { DreamAction, DreamState } from '../../react-app-env';
import * as dreamActionTypes from './dreamActionTypes'

const initialState: DreamState = {
  loading: true,
  data: [],
  message: '', 
  filteredData: []
} 

const dreamReducer = 
(state = initialState, action: DreamAction): DreamState => {
  switch(action.type) {
    case dreamActionTypes.GET_STATE:
      return {
        ...state,
        filteredData: action.payload
      }
    case dreamActionTypes.GET_ALL_DREAMS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case dreamActionTypes.GET_ALL_DREAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }

    case dreamActionTypes.GET_ALL_DREAMS_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload
      }

    case dreamActionTypes.ANY_DREAM_REQUEST:
      return {
        ...state,
        loading: true
      }

    case dreamActionTypes.ANY_DREAM_REQUEST_RESULT:
      return {
        ...state,
        loading: false,
        message: action.payload
      }

    default:
      return state
  }
}

export default dreamReducer
