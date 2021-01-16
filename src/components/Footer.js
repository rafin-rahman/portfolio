import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: 250,
    },
    '& .MuiSvgIcon-root': {
      fill: '#f1c40f',
      '&:hover': {
        fill: '#f6e58d',
        fontSize: '2rem',
      },
    },
  },
})

const Footer = () => {
  const classes = useStyles()
  return (
    <BottomNavigation
      component={'div'}
      width={'auto'}
      style={{ background: '#333' }}
    >
      <BottomNavigationAction
        component={'div'}
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedIn />}
      />{' '}
      <BottomNavigationAction
        component={'div'}
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
      />{' '}
    </BottomNavigation>
  )
}

export default Footer
