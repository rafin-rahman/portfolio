import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  BottomNavigation,
  BottomNavigationAction,
  Link,
} from '@material-ui/core'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 20,
      maxWidth: 150,
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
      <Link
        href={'https://www.linkedin.com/in/moshfiqur-rahman-rafin-31b223161/'}
        target="_blank"
        className={classes.root}
        style={{ marginTop: '15px' }}
      >
        <BottomNavigationAction
          component={'div'}
          style={{ padding: 0 }}
          icon={<LinkedIn />}
        />
      </Link>
      <Link
        href={'https://www.github.com/rafin-rahman'}
        target="_blank"
        className={classes.root}
        style={{ margin: '15px' }}
      >
        <BottomNavigationAction
          component={'div'}
          style={{ padding: 0 }}
          icon={<GitHubIcon />}
        />{' '}
      </Link>
    </BottomNavigation>
  )
}

export default Footer
