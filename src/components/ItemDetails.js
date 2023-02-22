import React from "react";
import {useState} from "react-router-dom"

function ItemDetails (props){

    return(
        <div className="card mb-3" style={{maxWidth: '740px'}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="Pass" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{props.book.volumeInfo.title}</h5> 
                <p className="card-text">{props.book.volumeInfo.description}</p>
                <p className="card-text"><small className="text-muted">{props.book.volumeInfo.publishedDate}</small></p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ItemDetails