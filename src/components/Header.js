import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Avatar, Grid, Box } from '@material-ui/core'
import Typed from 'react-typed'
import avatar from '../assets/avatar.png'

// CSS STYLES
const useStyle = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: { color: '#222' },
  subtitle: { color: '#ffffff', marginBottom: '3rem' },
  textContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}))
const Header = () => {
  const classes = useStyle()
  return (
    <Box className={classes.textContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt={'Rafin Rahman'} />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={['Rafin Rahman']} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            'Web Developer',
            'JavaScript',
            'React',
            'Git',
            'Deployment',
            'Nginx',
            'HTML',
            'CSS',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  )
}

export default Header
