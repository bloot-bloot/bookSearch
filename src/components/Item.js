import React from "react";
import {Link} from "react-router-dom"

function Item(props){

    console.log(props.item);
    return (
            <div className="card"  style={{width: '18rem'}}>
                <img src={props.item.volumeInfo.imageLinks.smallThumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {props.item.volumeInfo.title }</h5>
    
                    { props.item.volumeInfo.categories ? 
                        <p className="card-text">{props.item.volumeInfo.categories.filter( (item, index) => index === 0) } </p>
                     :
                     <p className="card-text">нет категории</p>
                    }
                    {props.item.volumeInfo.authors ?
                        <p className="card-text">{props.item.volumeInfo.authors.map((item, index, {length})  => 

                        index +1  === length ?
                        item :
                        item + ", "
                
                        )} </p> 
                    :
                    <p className="card-text">нет автора</p> 
                    }

                    {/* <p className="card-text">{props.item.volumeInfo.description } </p> */}

                    <Link to={`/books/${props.item.id}`} className="btn btn-primary" item={props.item} >View</Link>

                    

                    {/* <a href="/books/2zhwEAAAQBAJ" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        
    )
}

export default Item


