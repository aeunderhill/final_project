import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import BrushIcon from '@material-ui/icons/Brush';
//import { Link } from '@material-ui/core';
//import itemData from './itemData';
//import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.black,
    marginTop: '50px',
    
    
  
  },
  imageList: {
    width: 700,
    height: 500,
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


// data is structured as follows...
 
  //import image from 'path/to/image.jpg';
  //[etc...]
 
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80',
      title: 'title 1',
      artist: 'artist 1',
      category: 'painting'
    },
    {
    img: 'https://images.unsplash.com/photo-1602526371152-621b3b4e4b4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'title 2',
    artist: 'artist 1',
    category: 'painting'
    },
  {
    img: 'https://images.unsplash.com/photo-1574184297860-1d1ba6ea9336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    title: 'title 3',
    artist: 'artist 3',
    category: 'painting'
  
    
    },
    {
      img: 'https://images.unsplash.com/photo-1544224690-d3d430bef970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1569&q=80',
      title: 'title 4',
      artist: 'artist 4',
      category: 'painting'
  },
  ];
 
export default function Gallery() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <ImageList rowHeight={250} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"><h3>Gallery of Completed Commissions:</h3>
          <h4>Click on the paint brush icon to submit a request:</h4></ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              category={item.category}
              subtitle={<span>by: {item.artist}</span>}
              actionIcon={
                <IconButton component={Link} to="/UserCommission"
                aria-label={`info about ${item.artist}`} className={classes.icon}>
                  <BrushIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    
  );
}




/*import React, { useContext } from 'react';
import {stateContext} from '../helpers/stateProvider.jsx';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Comment from './comment.js.jsx';
import BrushIcon from '@material-ui/icons/Brush';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper, 
  },
  imageList: {
    width: 605,
    height: 500,
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


 
 
export default function Gallery() {
  const classes = useStyles();


  const {data , setData} = useContext(stateContext);

  console.log('DATA', data)

  // console.log(Object.keys(data.comments))

  return (
    <div className={classes.root}>
      <ImageList rowHeight={250} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"><h3>Galler of Completed Commissions:
          </h3>
          <h2>Click the paint brush icon to make a request!</h2></ListSubheader>
        </ImageListItem>
        {data.requests.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.image} alt={item.name} />
            <ImageListItemBar
              title={item.name}
              subtitle={<span>by: {item.artist_id}</span>}
              actionIcon={
                <IconButton component={Link} to="/UserCommission"
                 aria-label={`info about ${item.artist_id}`} className={classes.icon}>
                  <BrushIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div>
        <Comment />
      </div>
     
    </div>
  );
}


// The example data is structured as follows:
 
  //import image from 'path/to/image.jpg';
  //[etc...]
 
  // const itemData = [
  //   {
  //     img: 'url(https://unsplash.com/photos/5rsNohd8bY8.jpg)',
  //     title: 'title 1',
  //     author: 'author 1',
  //   },
  //   {
  //   img: 'url(https://unsplash.com/photos/J1MznmEvxpk.jpg)',
  //   title: 'title 2',
  //   author: 'author 2',
  //   },
  // {
  //   img: 'url(https://unsplash.com/photos/TF3g66Jhs50.jpg)',
  //   title: 'title 3',
  //   author: 'author 3',
  //   },
  //   {
  //     img: 'url(https://unsplash.com/photos/8xUShy6U1I8.jpg)',
  //     title: 'title 4',
  //     author: 'author 4',
  // },
  // ]; */