import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Authcontext, FirebaseContext } from '../../store/Context';
import { FireBase } from '../../firebase/config';
import { useHistory } from 'react-router-dom';
function Header() {
  const history = useHistory()
  const {user} = useContext(Authcontext)
  const {fireBase} = useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? <span>{ user.displayName }</span> : <span onClick={()=>{
            history.push('/login')
          }}>Login</span>}
          <hr />
        </div>
        
       { user && <span onClick={()=>{
       FireBase.auth().signOut()
        history.push('/login')
        }}>Logout</span>}
        
        
{user &&     <div className="sellMenu">
          <SellButton></SellButton>
          <div onClick={()=>{
            history.push('/sell')
          }} className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
            
          </div>
        </div>
        }
        
      </div>
    </div>
  );
}

export default Header;