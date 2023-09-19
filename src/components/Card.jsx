import React from "react";
function Card(props){
    return(
        <>
            <div className="child-card">
            <div className="pimg-container">
             <img src={props.imgUrl} alt="project"/>
            </div>
            <div className="description">
              <h3>{props.title}</h3>
              <p>{props.content}</p>
               <div className="button-code">
                <a href={props.source}>source code</a>
                <a href={props.demo}>See to Demo</a>
               </div>
            </div>
          </div>
        </>
    )

}
export default Card;