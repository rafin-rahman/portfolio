import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core'
import projectOne from '../assets/images/mern-stack.jpg'
import projecttwo from '../assets/images/react-redux.jpg'

const useStyles = makeStyles({
  mainContainer: {
    background: '#333',
    height: '100vh',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
  },
})
const Portfolio = () => {
  const classes = useStyles()
  return (
    <Box component={'div'} className={classes.mainContainer}>
      <Navbar />
      <Grid container justify={'center'}>
        {/*Project 1*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component={'img'}
                alt={'Project1'}
                height={'140'}
                image={projectOne}
              />
              <CardContent>
                <Typography gutterBottom variant={'h5'}>
                  A website for UK college, Elizabeth School of London
                </Typography>
                <Typography
                  variant={'body2'}
                  color={'textSecondary'}
                  component={'p'}
                >
                  {/*text here*/}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size={'small'} color={'primary'}>
                  <a
                    href={'https://my-app-4n6rw.ondigitalocean.app/'}
                    target={'_blank'}
                  >
                    Live Demo
                  </a>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/*Project 2*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component={'img'}
                alt={'Project2'}
                height={'140'}
                image={projecttwo}
              />
              <CardContent>
                <Typography gutterBottom variant={'h5'}>
                  Coming soon
                </Typography>
                <Typography
                  variant={'body2'}
                  color={'textSecondary'}
                  component={'p'}
                >
                  {/*text here*/}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size={'small'} color={'primary'}>
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio
