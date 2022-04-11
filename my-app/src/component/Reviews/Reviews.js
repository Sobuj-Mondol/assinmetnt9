
import React,{ useEffect, useState } from 'react';
import Reviwe from './Reviwe/Reviwe';
import style from './Reviews.css'
const Reviews = () => {
    const [reviwes, setReviews]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[])
    return (<div> <h1>Customer Reviews (5)</h1>
        <div className='reviwArea'>
           
            <div className='reviwArea' >       {
              reviwes.map(reviwe=><Reviwe key={reviwe.id} reviwe={reviwe}> </Reviwe>)  
            }
            
           </div>
            <div>  
        
            </div>

        </div>
        </div>
    );
};

export default Reviews;