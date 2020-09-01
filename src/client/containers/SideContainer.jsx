import React, { useState } from 'react';
import NavItem from '../components/NavItem';
import { useSelector } from 'react-redux';


function SideContainer() {
  const[ dataArray, setData ] = useState([{name: 'New Product'},{name: 'All Products'},{name: 'Sale Product'}]);
  const { local } = useSelector((state) => state);
  
  return (
    <div className='drawer'>
    <h3 className='sidetitle'> Our Products </h3>
      <div className='drawerContainer'>
          {dataArray.map((obj, index) => {
            if(!local.includes(obj.name))
            return (
              <NavItem key={`NavItem${index}`} topic={obj.name} />
            );
          })}
      </div>
    </div>
  );
};

export default SideContainer;
