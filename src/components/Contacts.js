import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar'

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#f6e58d',
    },
    '& label': { color: '#f1c40f' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f1c40f',
      },
      '&:hover fieldset': {
        borderColor: '#f1c40f',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f1c40f',
      },
    },
  },
})(TextField)

const useStyles = makeStyles((theme) => ({
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  button: {
    marginTop: '1rem',
    color: '#f6e58d',
    borderColor: '#f6e58d',
  },
}))

const Contacts = () => {
  const classes = useStyles()
  return (
    <Box component={'div'} style={{ background: '#333', height: '100vh' }}>
      <Navbar />
      <Grid container justify={'center'}>
        <Box component={'form'} className={classes.form}>
          <Typography
            variant={'h5'}
            style={{
              color: '#f6e58d',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Need a developer? here i am
          </Typography>

          <Typography
            variant={'h5'}
            style={{
              textAlign: 'center',
              textTransform: 'uppercase',
              fontWeight: 900,
            }}
          >
            <br />
            <a
              href="mailto:info@rafinc.o.uk"
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              info@rafin.co.uk
            </a>
          </Typography>
        </Box>
      </Grid>
    </Box>
  )
}

export default Contacts
