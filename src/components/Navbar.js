import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from '@material-ui/core'
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons'
import avatar from '../assets/avatar.png'
import { makeStyles } from '@material-ui/core'
import MobileRightMenuSlider from '@material-ui/core/Drawer'

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#f1c40f',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}))

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
  },
]
const Navbar = () => {
  // state of the mobile menu list
  const [navSlider, setNavSlider] = useState({
    right: false,
  })

  // toggle mobile menu
  const toggleSlider = (slider, open) => () => {
    setNavSlider({ ...navSlider, [slider]: open })
  }
  const classes = useStyles()

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Rafin Rahman" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
            <ListItemText primary={lsItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('right', true)}>
              <ArrowBack style={{ color: 'f1c40f' }} />
            </IconButton>
            <Typography variant="h5">PORTFOLIO</Typography>
            <MobileRightMenuSlider
              anchor="right"
              open={navSlider.right}
              onClose={toggleSlider('right', false)}
            >
              {sideList('right')}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar