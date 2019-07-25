import React, { useState } from 'react';

function Card({member}){
    return (<div>
          <div>{member.username}</div>  
          <div>{member.email}</div>
          <div>{member.role}</div>
    </div>
        
        
        )
    
    
}
export default Card;