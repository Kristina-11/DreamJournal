import axios from 'axios'
import { DreamAction } from '../../react-app-env';
import * as dreamActionTypes from './dreamActionTypes'
import { DispatchDreamType } from '../../react-app-env'

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
