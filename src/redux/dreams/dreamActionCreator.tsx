import { DreamAction } from '../../react-app-env';
import * as dreamActionTypes from './dreamActionTypes'
import { DispatchDreamType } from '../../react-app-env'
import { API } from '../../axios';

export const dreamsRequest = ():DreamAction => {
  return {
    type: dreamActionTypes.DREAMS_REQUEST
  }
}

export const requestSuccess = (data:any):DreamAction => {
  return {
    type: dreamActionTypes.REQUEST_SUCCESS,
    payload: data
  }
}

export const requestFailed = (error:object | string):DreamAction => {
  return {
    type: dreamActionTypes.REQUEST_FAILURE,
    payload: error
  }
}

// TODO: Rename this
export const postRequestSuccess = (data:string):DreamAction => {
  return {
    type: dreamActionTypes.POST_REQUEST_SUCCESS,
    payload: data
  }
}

// NOTE: Async action creators
export const getDreams = () => {
  return (dispatch: DispatchDreamType) => {
    dispatch(dreamsRequest())
    API.get('dreams')
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