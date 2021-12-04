import { fork } from 'redux-saga/effects'

export function* saga() {
  yield 'Hello world'
}

export default function* dashboardSaga() {
  yield fork(saga)
}
