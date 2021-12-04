import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { useAppDispatch } from '../../app/hooks'
import { authActions } from '../../features/auth/authSlice'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
})

export function Header() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={classes.title}>
            Student Management
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
