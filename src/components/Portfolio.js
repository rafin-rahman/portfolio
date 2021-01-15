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
import projectOne from '../assets/images/html-css-javascript-lg.jpg'
import projecttwo from '../assets/images/javascript-fullstack.jpg'

const useStyles = makeStyles({
  mainContainer: {
    background: '#233',
    height: '100%',
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
                  Project 1
                </Typography>
                <Typography
                  variant={'body2'}
                  color={'textSecondary'}
                  component={'p'}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci atque blanditiis cumque in maxime molestiae optio
                  possimus qui rem repellat sunt tenetur, voluptatibus!
                  Assumenda blanditiis debitis, dignissimos hic quas reiciendis.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size={'small'} color={'primary'}>
                  Share
                </Button>
                <Button size={'small'} color={'primary'}>
                  Live Demo
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
                  Project 2
                </Typography>
                <Typography
                  variant={'body2'}
                  color={'textSecondary'}
                  component={'p'}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci atque blanditiis cumque in maxime molestiae optio
                  possimus qui rem repellat sunt tenetur, voluptatibus!
                  Assumenda blanditiis debitis, dignissimos hic quas reiciendis.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size={'small'} color={'primary'}>
                  Share
                </Button>
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
