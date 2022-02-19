import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'


const Friend = (props) => {

const {id,name,email,address,phone}=props.friend;

const handleClick =()=>{
  window.history.pushState({}, undefined, `/friend/${id}`);
  window.location.reload();
}

  return (
    <div className='single'>
      <h1> Name: {name} {id}</h1>
      <h2>Email : {email}</h2>
      <p>Address : {address.city}</p>
      <p>Contact : {phone}</p>
      <Link to={`/friend/${id}`} >Visit me</Link>
      <br /><br />
      <Link to={`/friend/${id}`}  >
         <button >Visit me Button</button>
      </Link>
<br /> <br />
      <button
      onClick={handleClick}
      >
       Visit Button 2
      </button>
    </div>
  );
};

export default Friend;