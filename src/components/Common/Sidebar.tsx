import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
} from '@mui/material'
import { Dashboard, People } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    bgcolor: theme.palette.background.paper,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',

    '&.active > li': {
      backgroundColor: theme.palette.action.selected,
    },
  },
}))

export function Sidebar() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <nav aria-label="main mailbox folders">
        <List>
          <NavLink to="/admin/dashboard" className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/admin/students" className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </nav>
    </Box>
  )
}
