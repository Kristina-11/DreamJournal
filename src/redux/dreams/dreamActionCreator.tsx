import axios from 'axios'
import { DreamAction } from '../../react-app-env';
import * as dreamActionTypes from './dreamActionTypes'
import { DispatchDreamType } from '../../react-app-env'

export const getDreamsRequest = ():DreamAction => {
  return {
    type: dreamActionTypes.GET_DREAMS_REQUEST
  }
}

export const requestSuccess = (data:any):DreamAction => {
  return {
    type: dreamActionTypes.REQUEST_SUCCESS,
    payload: data
  }
}

export const requestFailed = (error:any):DreamAction => {
  return {
    type: dreamActionTypes.REQUEST_FAILURE,
    payload: error
  }
}

export const getDreams = () => {
  return (dispatch: DispatchDreamType) => {
    dispatch(getDreamsRequest())
    axios.get('https://dreamsapi.herokuapp.com/dreams')
      .then((res) => {
        const dreamsData = res.data;
        dispatch(requestSuccess(dreamsData))
      })
      .catch((err) => {
        const error = err;
        dispatch(requestFailed(error))
      })
  }
}
