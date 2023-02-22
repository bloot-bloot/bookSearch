import React from "react";
import Item from "./Item"

function ListItems(props){
    console.log(props.books);
    return (

    <div className="container">

    <div  className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 justify-content-between">
         {props.books.map((item, index) => 
         
         <div className="col " key={index} >
         <Item item={item} key={index} />

         </div>

        )}
        </div>
      
      </div>)
}

// className="list-group-item" key={index}> {item.volumeInfo.title}

export default ListItems