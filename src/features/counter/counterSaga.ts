import { PayloadAction } from '@reduxjs/toolkit'
import { delay, put, takeEvery } from 'redux-saga/effects'

import { incrementSaga, incrementSagaSuccess } from './counterSlice'

export function* handleIncrementSaga(action: PayloadAction<number>) {
  // Wait 2s
  yield delay(1000)

  // Dispatch action success
  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga)
}
