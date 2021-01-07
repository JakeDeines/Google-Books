import React, { Component } from "react";
import SearchArea from "./SearchArea";
import './App.css';
import axios from 'axios';
import BookList from "./BookList";

class Books extends Component {
constructor(props) {
    
    super(props);
    this.state = {
        books: [],
        searchField: ""
    }
}

searchBook = (e) => {
    e.preventDefault()
    const url = "https://www.googleapis.com/books/v1/volumes?q="
    axios.get(url + this.state.searchField)
      .then((data) =>{
     this.setState({ books: [...data.body.items]})
    })
    
}

handleSearch = (e) => {
    
    this.setState({ searchField: e.target.value })
}

    render() {
return (
  <div>
   <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
  <BookList books={this.state.books} />
  </div>
);
}
}








export default Books;
