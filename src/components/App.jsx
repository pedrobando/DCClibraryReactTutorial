import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import Footer from './Footer/Footer';
import CreateBook from './CreateBook/CreateBook';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "Ready Player One", author: "Earnest Cline"},
            {title: "All the Light", author: "Anthony Doerr"},
            {title: "The First", author: "Jiddu Yeah"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextbook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    createBook = (newBook) =>{
            this.books.push(newBook);
            this.setState({
                bookNumber: this.books.length - 1
            })
    }
    render(){
        return(
            <div className="container-fluid">
                <TitleBar/>
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToPreviousBook} previousBook={this.goToPreviousBook}/> 
                <CreateBook createNewBook={this.createBook}/>
                <Footer />
            </div>

        )
    }
}

export default App;