import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const Header_login = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
      }, []
  );

  const logout = async () => {
    await signOut(auth);
  };


  return (
    <div className='Header_login'>
      {user ? ( // 登入時顯示會員資料，登出時顯示登入/註冊 
          <>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {user.email}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/memberCentre">會員中心</Dropdown.Item>
                <Dropdown.Item href="/checkOrder">訂單查詢</Dropdown.Item>
                <Dropdown.Item onClick={logout}>登出</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>          
          </>
        ) : (
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "link")}>登入/註冊</NavLink>
          )}
    </div>
  )
}

export default Header_login;