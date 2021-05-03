import axios from 'axios';
import { useEffect, useState } from 'react';
import { DreamAction, DreamState } from '../../react-app-env';
import * as dreamActionTypes from './dreamActionTypes'

const initialState: DreamState = {
  loading: true,
  data: [],
  error: ''
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
        error: ''
      }

      case dreamActionTypes.REQUEST_FAILURE:
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        }

      default:
        return state
}
}

export default dreamReducer
