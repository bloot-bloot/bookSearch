import React, { useState } from "react"


function BookSearch(props){
   
    function handleSubmit(e){
        e.preventDefault()
        console.log('OnSubmit');
      
        
        if(props.input !== ""){
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.input}&key=${props.apiKey}&maxResults=${props.maxResults}&startIndex=${props.startIndex}`)
            // fetch("https://jsonplaceholder.typicode.com/todos1/1")
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                  return response.json();
                } else {
                    console.log(response.status);
                    props.setError( "некорректный код ответа ")

                  throw Error(response.statusText);
                // console.log(response.status);
                }
              })
            .then(json => props.setBooks(json.items))
            .then(console.log(props.books))
            .catch(error  => props.setError("ошибка выполнения запроса к серверу") )

        }
    }
        
    function handleChange(e){
        props.setInput(e.target.value.trim().toLowerCase())
        console.log(e.target.value);
    }
   

    return (
        
        <div>
            <form onSubmit={handleSubmit}>

            <div className="input-group mb-3">

                <input type="text" className="form-control" onChange={handleChange} value={props.input}/>
                <button type="submit" className="btn btn-primary" >Search</button>
            </div>

            </form>

        </div>
    )   
}

export default BookSearch