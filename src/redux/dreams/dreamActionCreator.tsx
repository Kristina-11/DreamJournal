import axios from 'axios'
import { DreamAction } from '../../react-app-env';
import * as dreamActionTypes from './dreamActionTypes'
import { DispatchDreamType } from '../../react-app-env'
import { title } from 'node:process';

export const dreamsRequest = ():DreamAction => {
  return {
    type: dreamActionTypes.DREAMS_REQUEST
  }
}

export const requestSuccess = (data:any):DreamAction => {
  console.log(data)
  return {
    type: dreamActionTypes.REQUEST_SUCCESS,
    payload: data
  }
}

export const requestFailed = (error:object | string):DreamAction => {
  console.log(error)
  return {
    type: dreamActionTypes.REQUEST_FAILURE,
    payload: error
  }
}

// NOTE: Async action creators
export const getDreams = () => {
  return (dispatch: DispatchDreamType) => {
    dispatch(dreamsRequest())
    axios.get('https://dreamsapi.herokuapp.com/dreams')
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

export const postADream = (dream: object) => {
  //console.log('Successfuly posting a dream', dream)
  let axiosConfig = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Access-Control-Allow-Origin": "*",
        "Host": "dreamsapi.herokuapp.com"
    }
  };
  
  // TODO: axios post method not working
  return (dispatch: DispatchDreamType) => {
    dispatch(dreamsRequest())
    axios.post('https://dreamsapi.herokuapp.com/dreams', dream, axiosConfig)
      .then((res) => {
        console.log(res)
        dispatch(requestSuccess(res))
      })
      .catch((err) => {
        console.log(err)
        dispatch(requestFailed(err))
      })
  }
}
