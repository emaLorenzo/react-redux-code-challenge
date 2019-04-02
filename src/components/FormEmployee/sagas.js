import { take, fork, call, put } from 'redux-saga/effects';
import {
  addEmployeeLoading, addEmployeeSuccess, addEmployeeError
} from 'store/features/employees/actions';
import types from 'store/features/employees/types';
import axios from 'axios';

/* --------------------- Watchers ------------------ */

export const watchAddEmployee = function * () {
  while (true) {
    const { payload } = yield take(types.ADD_EMPLOYEE)
    yield fork(addEmployee, payload)
  }
}

/* --------------------- Subroutines --------------- */

function * addEmployee ({ employeer }) {
  try {
    yield put(addEmployeeLoading())

    const url = 'https://randomuser.me/api/';
    const { status, data } = yield call(axios.get, url);

    if (status === 200) {
      const {
        name: { first, last },
        location: { street, city }
      } = data.results[0];

      const generatedPerson = {
        name: `${first} ${last}`,
        address: `${street}, ${city}`,
        employeer
      }
      yield put(addEmployeeSuccess(generatedPerson))
    } else {
      yield put(addEmployeeError('There was an error adding a new employee'));
    }
  } catch (err) {
    yield put(addEmployeeError('There was an error adding a new employee'));
  }
}
