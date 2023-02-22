import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails" 

// function ItemPage(props){
//     const params = useParams();

//     const [book, setBook] = useState({})
//     // const [error, setError] = useState("")
//     const apiKey = "AIzaSyCZAzhREoAhf3edseJ_hOaGGWf68sS5PqU"
//     console.log(`https://www.googleapis.com/books/v1/volumes/${params.id}/?key=${apiKey}`);
//     useEffect(() => {
//         const fetchData = async () => {
            
//           const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}?key=${apiKey}`);
//           const newData = await response.json();
//           setBook(newData);
//         //   console.log(newData);
//         //   console.log(book);
//         //   console.log(`https://www.googleapis.com/books/v1/volumes/${params.id}/?key=${apiKey}`);
//         };
      
//         fetchData();
//       }, [params]);

// //     fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}/?key=${apiKey}`)
// //     // fetch("https://www.googleapis.com/books/v1/volumes/volumeId")
    
// //     .then((response) => {
// //         if (response.status >= 200 && response.status <= 299) {
// //             return response.json();
// //         } else {
// //             console.log(response.status);
// //         //    setError( "некорректный код ответа ")

// //             throw Error(response.statusText);
       
// //         }
// //         })

 
// //   .then(json => setBook(json))
// //   .then(console.log(book))
// //   .catch(error  => console.log("ошибка выполнения запроса к серверу") )

//     return (
//         <div className="card"  style={{width: '18rem'}}>
//             {/* <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <h5 className="card-title"> {book.volumeInfo.title }</h5>

              
//             </div> */}
//         </div>

        
//     )
// }

const ItemPage = () => {
    const apiKey = 'AIzaSyCZAzhREoAhf3edseJ_hOaGGWf68sS5PqU';
    const params = useParams();
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}?key=${apiKey}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          console.log(data);
          setBook(data);
        })
        .catch((error) => {
          // console.log(error);
          setError(error);
        })
        .finally(() => setLoading(false));
    }, []);

    console.log("render");
    if (loading) return 'Loading...';
    if (error) return 'Error...';
  
    return <div>
    <ItemDetails book={book}/>

    title: {book.volumeInfo.title}</div>;
  };
  
  export default ItemPage;

