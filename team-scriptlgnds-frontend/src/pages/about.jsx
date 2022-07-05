import React from 'react';
import NavBar3 from '../components/Home-Nav';
import "../stylesheets/about.css"


const about = () => {
  return (

    <div>
      <NavBar3 />
  
      <div class='logostyle' >
        <img src='OverSight-Logo.png' alt='logo' id='logo' />
        <h2>About This Project</h2>
        
        <p>
          
        This application is a video game review platform. Users will be able to review their favorite video game(s) or 
critique a game by writing a post and engaging other users to discuss the video game.<br/><hr/>
<h4>Project Background</h4>
We are making this so game developers can hear from their player base about various issues and concerns. This 
can include bug reports, reviews of the game, what can be improved, ideas to add to the game, and things that 
players like. Players can also find forums to the games they are playing easily through this application and details 
about the game. Users can find groups and other players to interact with and play games.

        </p>
      </div>
    </div>
  )
}

export default about
