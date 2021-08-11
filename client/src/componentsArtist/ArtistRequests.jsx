import React, {useState, useContext} from "react";
import {stateContext} from '../helpers/stateProvider.jsx';
import axios from 'axios';
import DashboardShowArtist from "./DashboardShowArtist.jsx"
import FilterBar from "./FilterBar.jsx";
import "./ArtistRequests.css"
import { useEffect } from "react";

const {requests_for_test, artists_for_test, users_for_test, categories_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus} = require("../helpers/selectors")

export default function Dashboard(props) {

  const {data , setData} = useContext(stateContext);

  // console.log('DATA ---', data)
 
  const entries = Object.entries(data.requests)
  const initialDisplay = entries.map((item)=> item[1])
  // console.log('Initial' ,initialDisplay)
 
  const [display, setDisplay] = useState([])

  // useEffect(() => {
  //   setDisplay(initialDisplay)
  // }, [data])

  const requests = getUnFinishedRequests(requests_for_test)

  function acceptRequest(request) {
    const acceptedRequest = {...request[1], artist_id : 41}
    
      axios.put(`/api/requests/${request.id}`, acceptedRequest).then((response) => {
        let id = acceptedRequest.id 
        
      const requests = {...data.requests,  id : acceptedRequest}

        setData((prev)=> ({...prev, requests : requests }))
      }).catch((error) => {console.log(error)})
    }
    // console.log("Categories", data.categoriesApi)
    function filterbyCategory(display, e) {
      // alert("this is Filtering Category")
      console.log(data.categoriesApi)
      console.log('EEEE' ,e)
      
      const category = data.categoriesApi.find(category =>  category.name === e.value)
      console.log('Category selected', category)
      console.log('This is display',display)
      
      // const requestsofCategory = getRequestsbyCategory(data.categoriesApi, category.id)
      // setDisplay(requestsofCategory)
  }

  function filterbyStatus(requests, e) {
   
    const requestsofCategory = getRequestsbyStatus(requests, e.value)
    // console.log(e.label)
    setDisplay(requestsofCategory)  
  }

  let tag = null;
  let hidden = "";
  // let client;

  const dashboard_unaccepted = entries.map((request) => {
    if (!request[1].artist_id && !request[1].start_date) {
      const client = findUserbyUserId(data.clientsApi, request[1].client_id)
      console.log(client)
  
      return (
        request && <DashboardShowArtist 
        key={request[0]}
        request = {request[1]}
          acceptRequest = {acceptRequest}
          tag = {tag}
          hidden = {hidden}
          client = {client}
        />
      )
    } else {
      return null
    }

  })

  const dashboard_accepted = entries.map((request) => {
    if (request[1].artist_id && !request[1].start_date) {
      tag = "accepted"
      hidden = "true"
      const client = findUserbyUserId(data.clientsApi, request[1].client_id)
      console.log('This is client' ,client)
  
      return (
        request && <DashboardShowArtist 
        key={request[0]}
        request = {request[1]}
        acceptRequest = {acceptRequest}
          tag = {tag}
          hidden = {hidden}
          client = {client}
        />
      )
    } else {
      return null
    }
  })
  
  const dashboard_inprocess = entries.map((request) => {
    
    if (request[1].artist_id && request[1].start_date) {
      tag = "in process"
      hidden = "true"
      const client = findUserbyUserId(data.clientsApi, request[1].client_id)
  
      return (
        request && <DashboardShowArtist 
        key={request[0]}
        request = {request[1]}
        acceptRequest = {acceptRequest}
          tag = {tag}
          hidden = {hidden}
          client = {client}
        />
      )
    } else {
      return null
    }
  })

  const statusOptions = ['All', 'Unaccepted', 'Accepted', 'In Process'];
  let categoryOptions;
 if (data.categoriesApi)
  {categoryOptions =data.categoriesApi.map((category) => category.name)
    }

    console.log(categoryOptions)

  return (
    <main>
      <nav className="ArtistRequests_nav">
     { categoryOptions && <FilterBar 
          onSelect = {(e) => filterbyCategory(display, e)}
          options = {categoryOptions}
          
        />}
        <FilterBar 
          onSelect = {(e) => {filterbyStatus(display, e)
          console.log('this is event', e)}}
          options = {statusOptions}
        />
      </nav>
      <div className="ArtistRequests_div">
        {dashboard_unaccepted}
        <br/>
        {dashboard_accepted}
        <br/>
        {dashboard_inprocess}
      </div>
    </main>
  )
}