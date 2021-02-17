import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting(){
  
  return(
    <div className='booklist' >
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      
    </div>
  );
}
const Book=()=>{
  return(
  <div className='book'>
    <BookList/>
    <Author/>
    <Price/>

  </div>
  );
}

const BookList = () =><img src='https://images-na.ssl-images-amazon.com/images/I/41EzNnr4YUL._AC_SX184_.jpg'/>
const Author=()=><h1>Author has a Name</h1>
const Price=()=><h4>$20</h4>

ReactDOM.render(<Greeting/>,document.getElementById('root'));