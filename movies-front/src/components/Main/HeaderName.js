import React from 'react';
import '../../styles/landing/HeaderName.css'

function HeaderName(props) {
    return (
           <div className="header-name">
               <h2 className="header-name__title">{props.title}</h2>
           </div>
    )
}
export default HeaderName;