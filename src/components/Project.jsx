import React from "react";
import  Card  from "./Card";
import detail from "./detail";
function Project(){
    return (
      <>
        <div className="title">
          
          <h2>My Projects</h2>
          <p>These are some of my capstone projects I have worked
             on throughout Web Deplopment bootcamp, up to backend,API,database.
            </p>
        </div>
        <div className="card-container">
        
          <Card imgUrl={detail[0].url}
           title={detail[0].title} 
          content={detail[0].content}
          source={detail[0].source}
          demo={detail[0].demo}
          />
           <Card imgUrl={detail[1].url}
           title={detail[1].title} 
          content={detail[1].content}
          source={detail[1].source}
          demo={detail[1].demo}
          />
          <Card imgUrl={detail[2].url}
           title={detail[2].title} 
          content={detail[2].content}
          source={detail[2].source}
          demo={detail[2].demo}
          />
          <Card imgUrl={detail[3].url}
           title={detail[3].title} 
          content={detail[3].content}
          source={detail[3].source}
          demo={detail[3].demo}
          />
          <Card imgUrl={detail[4].url}
           title={detail[4].title} 
          content={detail[4].content}
          source={detail[4].source}
          demo={detail[4].demo}
          />
          <Card imgUrl={detail[5].url}
           title={detail[5].title} 
          content={detail[5].content}
          source={detail[5].source}
          demo={detail[5].demo}
          />
          <Card imgUrl={detail[6].url}
           title={detail[6].title} 
          content={detail[6].content}
          source={detail[6].source}
          demo={detail[6].demo}
          />
          <Card imgUrl={detail[7].url}
           title={detail[7].title} 
          content={detail[7].content}
          source={detail[7].source}
          demo={detail[7].demo}
          />
          <Card imgUrl={detail[8].url}
           title={detail[8].title} 
          content={detail[8].content}
          source={detail[8].source}
          demo={detail[8].demo}
          />
          <Card imgUrl={detail[9].url}
           title={detail[9].title} 
          content={detail[9].content}
          source={detail[9].source}
          demo={detail[9].demo}
          />
          <Card imgUrl={detail[10].url}
           title={detail[10].title} 
          content={detail[10].content}
          source={detail[10].source}
          demo={detail[10].demo}
          />
          <Card imgUrl={detail[11].url}
           title={detail[11].title} 
          content={detail[11].content}
          source={detail[11].source}
          demo={detail[11].demo}
          />
        </div>
        </> 
    )
}
export default Project;