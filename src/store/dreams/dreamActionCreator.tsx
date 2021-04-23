import * as dreamActionTypes from './dreamActionTypes'

const getDreams = () => {
  const action: DreamAction = {
    type: dreamActionTypes.GET_ALL_DREAMS
  }

  return action
}
