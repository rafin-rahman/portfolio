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

const Portfolio = () => {
  return (
    <Box component={'div'}>
      <Navbar />
      <Grid container justify={'center'} alignItems={'center'}>
        <Card>
          <CardActionArea>
            <CardMedia component={'img'} alt={'Project1'}></CardMedia>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  )
}

export default Portfolio
