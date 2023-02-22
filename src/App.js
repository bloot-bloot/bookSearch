import React, { useEffect, useState } from "react";
import BookSearch from "./components/BookSearch"
import ListItems from "./components/ListItems"


function App() {
  console.log("render App");

  const [input, setInput] = useState("")
  const apiKey = "AIzaSyCZAzhREoAhf3edseJ_hOaGGWf68sS5PqU"

  const [books, setBooks] = useState([])
  const [error, setError] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const maxResults= 3

  console.log(startIndex);
  console.log(error)

  const loadMoreHandler = () => {
    const newVal = startIndex + maxResults
    setStartIndex(newVal)
  }
  useEffect( ()=>{
    if(input !== ""){
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${apiKey}&maxResults=${maxResults}&startIndex=${startIndex}`)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
            console.log(response.status);
            setError( "некорректный код ответа ")

          throw Error(response.statusText);
        // console.log(response.status);
        }
      })
    .then(json => setBooks((prev)=>
    [...prev , ...json.items]
    ))
    .then(console.log(books))
    .catch(error  => setError("ошибка выполнения запроса к серверу") )
    }
   
  } , [startIndex])
  return (

    <div className="App container mt-5" >
    
      <header className="App-header"> </header>

      <BookSearch  setBooks={setBooks}
       setError={setError} 
       startIndex={startIndex} 
       maxResults={maxResults} 
       input={input}
       apiKey={apiKey}
       setInput={setInput}

       />

       {error ? ( 
         <div className="alert alert-danger" role="alert">
            {error}
         </div>
       ) : (
        <>
        <ListItems books={books} />

        { books.length > 0 && (
          <div class="d-flex justify-content-center m-5">
        <button className="btn btn-primary" onClick={loadMoreHandler}>
        Load more
        </button>
        </div>
      
        )}
        </>
       
       )

       }

      
    </div>
  );
}

export default App;
