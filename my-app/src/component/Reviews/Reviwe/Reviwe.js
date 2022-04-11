import React from 'react';
import style from './Reviwe.css'
const Reviwe = (props) => {
    const {id,name, img,comment,review}=props.reviwe
    return (
       
       
        <div className='reviwArea'>
            
            <div className='reviwArea'>
            <div className='img-box '><img src={img} alt="" /><h5>{name}</h5></div>
            <div className='content-box'> <h6> Review:{review}</h6> <p>{comment}</p></div>
            
            </div>
            
        </div>
    );
};

export default Reviwe;