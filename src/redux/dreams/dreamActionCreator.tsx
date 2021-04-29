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

// export const getDreams = () => {
//   axios.get('https://dreamsapi.herokuapp.com/dreams')
//     .then((res) => {
//       return {
//           type: dreamActionTypes.GET_ALL_DREAMS,
//           payload: res.data
//         }
//       })
//     .catch(err => {return console.log(err)});
// }
