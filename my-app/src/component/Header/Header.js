import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Header.css'
import CustomLink from './../CoustomLink/CoustomLink';
const Header = () => {
    return (
        <div className='header-Link'>
            
            <CustomLink to="/">HOME</CustomLink>
            <CustomLink  to ="Reviews">REVIEWS</CustomLink>
            <CustomLink to ="DASHBORD">DASHBORD</CustomLink>
            <CustomLink to ="Blog">BLOG</CustomLink>
            
            <div>
            
            </div>
        </div>
        
    );
};

export default Header;