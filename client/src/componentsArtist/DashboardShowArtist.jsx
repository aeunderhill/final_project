import React from "react";

import Button from "./Button.jsx"
import Tag from "./Tag.jsx"
import "./DashboardShowArtist.css"

export default function Dashboard(props) {

  const {request, acceptRequest, hidden, client, tag} = props
  
return (
  <article className="request_show_dashboard" key={request.id}>
    
    <header className="request_show_dashboard_header">
      <div className="request_show_Tag">
        <Tag tag={tag}></Tag>
        <h2 className="request_show_dashboard_h2">{request.name}</h2>
      </div>

      <img 
        className="request_show_dashboard_img"
        src={request.image}
      />
    </header>
    
    <div className="request_show_infor">
      <div className="request_show_details">
        <label>Description: </label>
        <span>{request.description}</span>
      </div>
    

      {/* <div className="request_show_details">
        <label>Client Name: </label>
        <span>{client.first_name}</span>
      </div>

      <div className="request_show_details">
        <label>Client email: </label>
        <span>{client.email}</span>
      </div> */}

      {request.actual_finish_date ? (
      <div className="request_show_details">
        <label>Finsihed on: </label>
        <span>{request.actual_finish_date}</span>
      </div>) : (
      <div className="request_show_details">
        <label>Expect to finish on: </label>
        <span>{request.expected_finish_date}</span>
      </div>
      )}

      <div className="request_show_details">
        <label>Price: </label>
        <span>{request.price}</span>
      </div>
    </div>

    <footer className="request_show_footer">
      <Button onClick={() => acceptRequest(request)} name="Accept" hidden={hidden}/>
    </footer>
  </article>
)
  
}

// return (
//   <article>
//     <ul>
//       <li> {request.id}</li>
//       <li> {request.name}</li>
//       <li> {request.description}</li>
//       <li> {request.image}</li>
//       <li> {request.price}</li>
//     </ul>
//   </article>
// )










// return (
//   <article className="request_show_dashboard" key={id}>
    
//     <header className="request_show_dashboard_header">
//       <div className="request_show_Tag">
//         <Tag tag={tag}></Tag>
//         <h2 className="request_show_dashboard_h2">{name}</h2>
//       </div>

//       <img 
//         className="request_show_dashboard_img"
//         src={image}
//       />
//     </header>
    
//     <div className="request_show_infor">
//       <div className="request_show_details">
//         <label>Description: </label>
//         <span>{description}</span>
//       </div>

//       {/* <div className="request_show_details">
//         <label>Client Name: </label>
//         <span>{client.name}</span>
//       </div>

//       <div className="request_show_details">
//         <label>Client Contact: </label>
//         <span>{client.contact}</span>
//       </div> */}

//       {actual_finish_date ? (
//       <div className="request_show_details">
//         <label>Finsihed on: </label>
//         <span>{actual_finish_date}</span>
//       </div>) : (
//       <div className="request_show_details">
//         <label>Expect to finish on: </label>
//         <span>{expected_finish_date}</span>
//       </div>
//       )}

//       <div className="request_show_details">
//         <label>Price: </label>
//         <span>{price}</span>
//       </div>
//     </div>

//     <footer className="request_show_footer">
//       <Button onClick={() => acceptRequest(index)} name="Accept" hidden={hidden}/>
//     </footer>
//   </article>
// )