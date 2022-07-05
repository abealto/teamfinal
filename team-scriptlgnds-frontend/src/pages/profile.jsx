import React, { useEffect, useState } from 'react';
import NavBar from '../components/Profile-Nav';
import API from '../UTILS/API';




const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    let userToken = JSON.parse(localStorage.getItem('userToken'));

    function fetch() {
      console.log(userToken);
      API.getUserData(userToken).then((response) => {
        console.log(response);
        setUser(response.data);
      });
    }
    fetch();
  }, []);

  return (
    <div className='view-user'>
      <NavBar />
      <h1>Welcome {user.username} </h1>
      <hr
        style={{
          color: '#32FBE2',
          height: '4px',
        }}
      />
      <h3>Email: {user.email}</h3>
      <h6>
        User Id: {user.user_id} || Date Created: {user.createdAt}
      </h6>
    </div>
  );
};

export default Profile;
