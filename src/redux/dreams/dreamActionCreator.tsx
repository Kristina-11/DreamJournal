import { DreamAction } from '../../react-app-env';
import * as dreamActionTypes from './dreamActionTypes'
import { DispatchDreamType } from '../../react-app-env'
import axios from 'axios';
import { API } from '../..';

export const dreamsRequest = ():DreamAction => {
  return {
    type: dreamActionTypes.GET_ALL_DREAMS_REQUEST
  }
}

export const requestSuccess = (data:any):DreamAction => {
  return {
    type: dreamActionTypes.GET_ALL_DREAMS_SUCCESS,
    payload: data
  }
}

export const requestFailed = (error:object | string):DreamAction => {
  return {
    type: dreamActionTypes.GET_ALL_DREAMS_FAILURE,
    payload: error
  }
}

export const anyDreamRequest = ():DreamAction => {
  return {
    type: dreamActionTypes.ANY_DREAM_REQUEST
  }
}

export const anyDreamRequestResult = (data: any):DreamAction => {
  return {
    type: dreamActionTypes.ANY_DREAM_REQUEST_RESULT,
    payload: data
  }
}

// NOTE: Async action creators
export const getDreams = () => {
  return (dispatch: DispatchDreamType) => {
    dispatch(dreamsRequest())
    axios.get(API)
      .then((res) => {
        const dreamsData: [] = res.data;
        dispatch(requestSuccess(dreamsData))
      })
      .catch((err) => {
        const error: string | object = err;
        dispatch(requestFailed(error))
      })
  }
}