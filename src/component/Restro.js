import React ,{useState}from 'react'
import Menu from "./menuApi.js";
import MenuCard from './MenuCard.js';
import Navbar from './Navbar.jsx';
import './Style.css'

const uniqueList=[
   ...new Set (
       Menu.map((currElem)=>{
        return currElem.category;
       })
   ),
   "All",
];
const Restro = () => {
    const[menuData,setMenuData]=useState(Menu);
    const[menuList,setMenuList]=useState(uniqueList);

    const filterItem=(category)=>{

      if(category==="All"){
        setMenuData(Menu);
        return;
      }
      const updatedList=Menu.filter((curElem)=>{
        return curElem.category===category;
      });
      setMenuData(updatedList);
    };
    
  return (
    <div>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData}/>
    </div>
  )
}

export default Restro