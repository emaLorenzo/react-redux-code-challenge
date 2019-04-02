import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = {
  list: []
};

const addCompanyHandler = (state, payload) => {
  return { list:  [...state.list, payload ] }
};

const actionMap = {
  [types.ADD_COMPANY]: addCompanyHandler,
};

export default createDefaultReducer(actionMap, initialState)