import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
   let {friendId}= useParams();
   let url=`https://jsonplaceholder.typicode.com/users/${friendId}`
   const [friendDetail,setFriendDetail]=useState([]);
   useEffect(()=>{
     fetch(url)
     .then(res=>res.json())
     .then(data=>setFriendDetail(data))
   },[])
  return (
    <div>
      <h1>Friend Id : {friendId}</h1>
      <h1>Name: {friendDetail.name}</h1>
      <p>Contact: {friendDetail.phone}</p>
      <p>{friendDetail.email}</p>
      <h3>{friendDetail.company?.name}</h3>
    </div>
  );
};

export default FriendDetail;