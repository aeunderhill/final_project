import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import {stateContext} from '../helpers/stateProvider.jsx';

import DashboardShowArtist from "./DashboardShowArtist.jsx"
import FilterBar from "./FilterBar.jsx";
import useData from "../hooks/useData.js";
import Cookies from 'universal-cookie';

import "./ArtistRequests.css"

const {requests_for_test, artists_for_test, users_for_test, categories_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus, findRequestIndex} = require("../helpers/selectors")

export default function Dashboard(props) {
  const {data} = useData()

  // const {data , setData} = useContext(stateContext);
  const requests = getUnFinishedRequests(data.requestsApi)
  const [requestState, setrequestState] = useState(requests)
  
  useEffect(() => {
    setrequestState(requests)
  }, [data])


  function acceptRequest(index, id) {
    alert("this is working")    
    console.log(id)
    const requestCopy = [...requestState]
    requestCopy[index]["artist_id"] = Number(user_id);
    setrequestState(requestCopy)

    // put request to backend 
    const updateRequest = [...data.requestsApi]
    const updateRequest_id = findRequestIndex(updateRequest, id)
    // console.log(updateRequest_id)
    // console.log(requestCopy[index])

    axios.put(`/api/requests/${requestCopy[index].id}`, requestCopy[index])
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {console.log(error)})
  }

  const {data , setData} = useContext(stateContext);

  console.log('DATA ---' , data)

  const requests = getUnFinishedRequests(requests_for_test)
  // const [requestState, setrequestState] = useState(requests)

  function acceptRequest(request) {

  const acceptedRequest = {...request[1], artist_id : 41}
   
    axios.put(`/api/requests/${request.id}`, acceptedRequest).then((response) => {
      let id = acceptedRequest.id
      console.log('This is accepted id',id)
     const requests = {...data.requests,  id : acceptedRequest}

      
      setData((prev)=> ({...prev, requests : requests }))
    }).catch((error) => {console.log(error)})
  }

  // function filterbyCategory(requests, e) {
  //   alert("this is Filtering Category")
  //   const categories = ['ALL Categories', 'Guitar', 'Art', 'Handycraft']
  //   const category_id = categories.indexOf(e.label)

  //   const requestsofCategory = getRequestsbyCategory(requests, category_id)
  //   setrequestState(requestsofCategory)
  // }

  function filterbyStatus(requests, e) {
    alert("this is Filtering Status")

    const requestsofCategory = getRequestsbyStatus(requests, e.label)
    // console.log(e.label)
    // setrequestState(requestsofCategory)
  }

<<<<<<< HEAD
=======
  
  
>>>>>>> master
  let tag = null;
  let hidden = "";
  let client;
  const cookies = new Cookies();
  const user_id = cookies.get('user_id')
  const user_identity = cookies.get('identity')


  const dashboard_unaccepted = Object.entries(data.requests).map((request) => {
    if (!request.artist_id && !request.start_date) {
<<<<<<< HEAD
      client = findUserbyUserId(data.clientsApi, request.client_id)[0]
=======
      // client = findUserbyUserId(users_for_test, request.client_id)[0]
      // console.log(client)
>>>>>>> master
  
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
<<<<<<< HEAD
  
  const dashboard_accepted = requestState.map((request, index) => {
    if (request.artist_id && !request.start_date) {
      tag = "accepted"
      hidden = "true"
      client = findUserbyUserId(data.clientsApi, request.client_id)[0]
=======

  const dashboard_accepted = Object.entries(data.requests).map((request) => {
    if (request.artist_id && !request.start_date) {
      tag = "accepted"
      hidden = "true"
      client = findUserbyUserId(users_for_test, request.client_id)[0]
      // console.log(client)
>>>>>>> master
  
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
  
  const dashboard_inprocess = Object.entries(data.requests).map((request) => {
    
    if (request.artist_id && request.start_date) {
      tag = "in process"
      hidden = "true"
<<<<<<< HEAD
      client = findUserbyUserId(data.clientsApi, request.client_id)[0]
=======
      client = findUserbyUserId(users_for_test, request.client_id)[0]
      // console.log(client)
>>>>>>> master
  
      return (
        request && <DashboardShowArtist 
        key={request[0]}
        request = {request[1]}
        acceptRequest = {acceptRequest}
          tag = {tag}
          hidden = {hidden}
          // client = {client}
        />
      )
    } else {
      return null
    }
  })

  const categotyOptions = ['ALL Categories', 'Guitar', 'Art', 'Handycraft'];
  const statusOptions = ['All', 'Unaccepted', 'Accepted', 'In Process'];

  return (
    <main>
      <nav className="ArtistRequests_nav">
        <FilterBar 
          // onSelect = {(e) => filterbyCategory(requests, e)}
          options = {categotyOptions}
        />
        <FilterBar 
          onSelect = {(e) => filterbyStatus(requests, e)}
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