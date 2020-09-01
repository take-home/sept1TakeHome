import React from 'react';
import SideContainer from './SideContainer';
import FeedContainer from './FeedContainer';
import NavBar from '../components/NavBar';

const MainContainer = () => {
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
