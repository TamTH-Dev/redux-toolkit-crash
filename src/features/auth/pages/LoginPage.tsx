import React from 'react'
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Theme,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../../app/hooks'
import { authActions, selectIsLoggedIn, selectLogging } from '../authSlice'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(3),
  },
}))

export default function LoginPage() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const logging = useSelector(selectLogging)

  if (isLoggedIn) return <Redirect to="/admin/dashboard" />

  const handleLogin = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    )
  }

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            {logging && <CircularProgress size={20} color="inherit" />}
            &nbsp;
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  )
}
