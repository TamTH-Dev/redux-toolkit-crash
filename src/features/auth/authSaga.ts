import { PayloadAction } from '@reduxjs/toolkit'
import { push } from 'connected-react-router'
import { call, fork, put, take } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid'

import { authActions, LoginPayload } from './authSlice'

function* handleLogin(payload: LoginPayload) {
  try {
    localStorage.setItem('access_token', uuidv4())
    yield put(
      authActions.loginSuccess({
        id: uuidv4(),
        name: payload.username,
      })
    )

    // Redirect to admin page
    yield put(push('/admin/dashboard'))
  } catch (error) {
    yield put(authActions.loginFailed(error.message))
  }
}

function* handleLogout() {
  localStorage.removeItem('access_token')

  // Redirect to login page
  yield put(push('/login'))
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = !!localStorage.getItem('access_token')
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      )
      yield call(handleLogin, action.payload)
    }

    yield take(authActions.logout.type)
    yield call(handleLogout)
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow)
}
