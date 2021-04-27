import axios from 'axios';
import { useEffect, useState } from 'react';
import { DreamAction, DreamState } from '../../react-app-env';
import * as dreamActionTypes from './dreamActionTypes'

const initialState = {
  dreams: []
} 

const dreamReducer = 
(state = initialState, action: DreamAction): DreamState => {
  switch(action.type) {
    // case dreamActionTypes.GET_ALL_DREAMS:
    //   return {
    //     ...state,
    //     dreams: action.payload
    //   }
  }
  return state
}

export default dreamReducer
