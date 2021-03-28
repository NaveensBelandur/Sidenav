import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Navigation from './navigation';

class SideNavvv extends React.Component{
  constructor(){
    super()
    this.state={
      name:''
    }
  }
  handleClick=()=>{
    window.location.href='/Name'
  }
  render(){
    return(
      <div>
        <Navigation></Navigation>
        
        <SideNav  style={{backgroundColor:'black'}}
    onSelect={(selected) => {
      
    }}  
>
  
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
           
            <NavText>
                Subscribers
            </NavText>
        </NavItem>
        <NavItem eventKey='premium'>
           ]
            <NavText onClick={this.handleClick}>
                Premium
            </NavText>
        </NavItem>
        <NavItem eventKey='Live Streaming'>
          
            <NavText>
                Live Streaming
            </NavText>
        </NavItem>
        <NavItem eventKey='Channel'>
           
            <NavText>
                Channel
            </NavText>
        </NavItem>
        <p className='borderLine'></p>
        <NavItem>
          
            <NavText>
                Music
            </NavText>
        </NavItem>
        <NavItem>
           
            <NavText>
                Sports
            </NavText>
        </NavItem>
        <p className='borderLine'></p>
        <NavItem>
           
            <NavText>
            Trending
            </NavText>
        </NavItem>
        <NavItem>
            
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
export default SideNavvv