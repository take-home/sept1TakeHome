import React from 'react';
import SideContainer from './SideContainer';
import FeedContainer from './FeedContainer';
import NavBar from '../components/NavBar';

// holds our top header bar, as well as our side bar (drawer), will also hold our feed container
const MainContainer = (props) => {
  return (
    <div className='maincontainer'>
      <div>
        <NavBar/>
      </div>  
      <div>
        <SideContainer/>
      </div>
      <div className='feedContainer'>
        <FeedContainer title='Gabriela - Take Home'/>
      </div>
    </div>
  );
};

export default MainContainer; 
