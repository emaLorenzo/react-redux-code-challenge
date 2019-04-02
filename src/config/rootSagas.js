import { all, fork } from 'redux-saga/effects'

import { watchAddEmployee } from 'components/FormEmployee/sagas'

export default function * rootSaga () {
  yield all([
    fork(watchAddEmployee)
  ])
};
