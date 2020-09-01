import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider } from '@material-ui/core';
import NavItem from '../components/NavItem';
import { useSelector } from 'react-redux';
// define width of sidebar

// custom styles for the sidebar
const useStyles = makeStyles((theme) => ({
  // drawer stays at fixed width, no matter the size of the screen
  drawer: {
    width: '250px',
    flexShrink: 0,
    backgroundColor: '#F1F5F8',
    marginTop: theme.spacing(7),
  },
  sidetitle: {
    marginLeft: '18px',
    marginTop: '32px',
  },
  // width of background of drawer
  drawerPaper: {
    backgroundColor: '#F1F5F8',
    marginTop: theme.spacing(7),
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));


function SideContainer(props) {
  // gives us access to styles object generated by makeStyles
  const[ dataArray, setData ] = useState([{name: 'New Product'},{name: 'All Products'},{name: 'Sale Product'}]);
  const { local } = useSelector((state) => state);
  // const today = new Date().toISOString().slice(0, 10)
  
  /* Drawer is our sidebar navigation component, stays permanently fixed to side, as docs recommend on desktop usage */
  return (
    <div className='drawer'>
    <h3 className='sidetitle'> Our Products </h3>
      <div className='drawerContainer'>
          {dataArray.map((obj) => {
            if(!local.includes(obj.name))
            return (
              <NavItem topic={obj.name} fav={false}/>
            );
          })}
      </div>
    </div>
  );
}
export default SideContainer;
