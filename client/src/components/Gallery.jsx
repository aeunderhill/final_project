import React, {useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import useData from "../hooks/useData.js";
import "./layout.css"
import "./Gallery.css"

// import Comment from './comment.js.jsx';


const {requests_for_test, artists_for_test, users_for_test, categories_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus, findArtistbyArtistId} = require("../helpers/selectors")

 
export default function Gallery() {
  // const classes = useStyles();
  const {data} = useData()
  const requests = getFinishedRequests(data.requestsApi)

  return (
    <>
    <h2 className="gallery_h2">Gallery</h2>
    <div className="gallery">
      <div >
        <GridList >
          {requests.map((item) => {
            // console.log(data.clientsApi)
            let artistName = findArtistbyArtistId(data.artistsApi, item.artist_id)[0]
            return(
              <GridListTile key={item.id} cols={0.65}>
                <img className="img-thumbnail rounded" src={item.image} alt={item.name} />
                <GridListTileBar
                  title={item.name}
                  subtitle={<span>by: {artistName.first_name} {artistName.last_name}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${item.artist_id}`}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            )
          })}
        </GridList>
      </div>
    </div>
    </>
  );
}


