import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import "../styles/navcss.css"
import '../../node_modules/flowbite/dist/flowbite.css'
import Logo from "../imgs/borcelle.gif"

const Nav = () => {
  return (
    <Navbar fluid rounded dir="rtl">
    <Navbar.Brand href="localhost:3000/">
  <div style={{width:"160px"}}><img src={Logo} alt="Your Video" href=""></img> </div>
    </Navbar.Brand>
    <Navbar.Collapse  style={{justifyContent: "center", fontFamily:"SuezOne"}}>
      <Navbar.Link href="/" style={{marginLeft:"32px", fontSize:"20px"}}>דף הבית</Navbar.Link>
      <Navbar.Link href="/about" style={{fontSize:"20px"}}>אודות</Navbar.Link>
      <Navbar.Link href="/contactus" style={{fontSize:"20px"}}>צור קשר</Navbar.Link>
    </Navbar.Collapse>
    <div style={{marginRight:"80px"}}>
      <Navbar.Toggle />
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">name@flowbite.com</span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>

  </Navbar>
  );
};

export default Nav;
