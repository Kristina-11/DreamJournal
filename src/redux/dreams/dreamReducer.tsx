import { DreamAction, DreamState } from '../../react-app-env';
import * as dreamActionTypes from './dreamActionTypes'

const initialState: DreamState = {
  loading: true,
  data: [],
  message: ''
} 

const dreamReducer = 
(state = initialState, action: DreamAction): DreamState => {
  switch(action.type) {
    case dreamActionTypes.DREAMS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case dreamActionTypes.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }

    case dreamActionTypes.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload
      }

    case dreamActionTypes.POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload
      }

    case dreamActionTypes.DELETE_A_DREAM_REQUEST:
      return {
        ...state,
        loading: true
      }

    case dreamActionTypes.DELETE_A_DREAM_REQUEST_SUCCESS:
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
