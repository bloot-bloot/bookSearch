import * as React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import ListItems from './components/ListItems';
import ItemPage from "./components/ItemPage"
import BookSearch from './components/BookSearch';
import { useState } from 'react';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element= {< />} /> */}
        <Route path="books/:id" element={<ItemPage />}/>
      
        <Route index element={ <div></div>} />
       
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

const Layout = () => {

    const [books, setBooks] = useState([])
    const [error, setError] = useState('')
    
    return (

    <div className="App container mt-5" >
    
      <header className="App-header"> </header>

      <BookSearch  setBooks={setBooks} setError={setError}/>
      <main style={{ padding: '1rem 0' }}>
            <Outlet books={books}/>
        </main>
       

       {error ? ( 
         <div className="alert alert-danger" role="alert">
            {error}
         </div>
       ) : ( "pass ")

       }
      
    </div> 
    );
};

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const About = () => {
  return (
    <>
      <h2>About</h2>
    </>
  );
};

export default App;