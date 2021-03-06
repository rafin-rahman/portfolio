import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#333',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid #f6e58d',
      right: '40px',
      top: '0',
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid #f1c40f',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: '#f6e58d #f6e58d transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: '#f1c40f',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent #f6e58d #f6e58d',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: '#f1c40f',
    color: 'white',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: '#ffffff',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: 'white',
    padding: '0',
    textTransform: 'uppercase',
  },
}))
const Resume = () => {
  const classes = useStyles()

  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant={'h4'} align={'center'} className={classes.heading}>
          work experience
        </Typography>

        <Box component="div" className={classes.timeLine}>
          <Typography
            variant={'h2'}
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            PRESENT
          </Typography>
          <Box component={'div'} className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              IT Manager
            </Typography>
            <Typography variant="body1" style={{ color: '#f1c40f' }}>
              Elizabeth School of London Ltd
            </Typography>
            <Typography variant="subtitle1" style={{ color: '#ecf0f1' }}>
              • Identify opportunities to improve business internal architecture{' '}
              <br />
              • Develop innovative solution to improve company workflow and
              communication <br />
              • Developing the infrastructure and systems to ensure company’s
              growth
              <br />
              • Conduct regular system audits
              <br />
              • Collaborate with Web Development team
              <br />
              • Keep records and company data
              <br />
              • Plan & produce digital material for company marketing campaigns
              <br />
            </Typography>
          </Box>
          <Typography
            variant={'h2'}
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component={'div'} className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              Senior Marketing Officer
            </Typography>
            <Typography variant="body1" style={{ color: '#f1c40f' }}>
              Elizabeth School of London Ltd
            </Typography>
            <Typography variant="subtitle1" style={{ color: '#ecf0f1' }}>
              • Actively promote company services
              <br />
              • Attract suitable candidates
              <br />
              • Conduct interviews and evaluation
              <br />
              • Provide recruitment reports to manager
              <br />
              • Mange social media content and clients
              <br />
              • Dealing with e-mail and applications.
              <br />• Handle phone conversation
            </Typography>
          </Box>{' '}
        </Box>
      </Box>
    </>
  )
}

export default Resume
