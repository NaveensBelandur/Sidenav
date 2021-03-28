import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {  MdSubscriptions,MdVideoLibrary,MdOndemandVideo,MdPersonalVideo} from "react-icons/md"
import { BsMusicNoteList } from "react-icons/bs"
import { IoMedal } from "react-icons/io5"
import { FaFire } from "react-icons/fa"
import { AiOutlinePlaySquare } from "react-icons/ai";
import './Css/VerticleLine.css'

class SideTest extends React.Component{
  constructor(){
    super()
    this.state={
      name:''
    }
  }
  handleClick=()=>{
     alert('hi naveen')
  }
  render(){
    return(
      <div>
        <SideNav  style={{backgroundColor:'black'}}
    onSelect={(selected) => {
      
    }}  
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
            < MdSubscriptions style={{ fontSize: '1.75em'}}/>  
            </NavIcon>
            <NavText>
                Subscribers
            </NavText>
        </NavItem>
        <NavItem eventKey='premium'>
            <NavIcon >
           < MdVideoLibrary style={{ fontSize: '1.75em'}}/>  
            </NavIcon>
            <NavText>
                Premium
            </NavText>
        </NavItem>
        <NavItem eventKey='Live Streaming'>
            <NavIcon>
              < MdOndemandVideo style={{ fontSize: '1.75em'}}/>
            </NavIcon>
            <NavText>
                Live Streaming
            </NavText>
        </NavItem>
        <NavItem eventKey='Channel'>
            <NavIcon>
            <MdPersonalVideo style={{ fontSize: '1.75em'}}/>
            </NavIcon>
            <NavText>
                Channel
            </NavText>
        </NavItem>
        <p className='borderLine'></p>
        <NavItem>
            <NavIcon>
            <BsMusicNoteList style={{ fontSize: '1.75em'}}/>
            </NavIcon>
            <NavText>
                Music
            </NavText>
        </NavItem>
        <NavItem>
            <NavIcon>
            <IoMedal style={{ fontSize: '1.75em'}} />
            </NavIcon>
            <NavText>
                Sports
            </NavText>
        </NavItem>
        <p className='borderLine'></p>
        <NavItem>
            <NavIcon>
            <FaFire style={{ fontSize: '1.75em'}}/>
            </NavIcon>
            <NavText>
            Trending
            </NavText>
        </NavItem>
        <NavItem>
            <NavIcon>
            <AiOutlinePlaySquare style={{ fontSize: '1.75em'}}/>
            </NavIcon>
            <NavText>
            Library
            </NavText>
        </NavItem>
       
    </SideNav.Nav>
</SideNav>

      </div>
    )
  }
}


export default SideTest