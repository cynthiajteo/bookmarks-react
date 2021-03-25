import './App.css';
import React, { Component } from 'react';
import BookMark from './components/Bookmark';
import CreateForm from './components/CreateForm';
const axios = require('axios');

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookmarks: [],
        };
    }

    fetchdata = async () => {
        try {
            const response = await axios.get('/bookmarks');
            // console.log(response.data);
            this.setState({
                bookmarks: response.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount = () => {
        this.fetchdata();
    };

    render() {
        return (
            <>
                <div className='header'>
                    <h1>Bookmarks</h1>
                    <h3>Add a new bookmark</h3>
                </div>

                <CreateForm fetchdata={this.fetchdata} />
                <br></br>
                <div className='main-bookmarks'>
                    {this.state.bookmarks.map((bookmark, index) => {
                        return (
                            <BookMark
                                bookmark={bookmark}
                                key={bookmark._id}
                                fetchdata={this.fetchdata}
                            />
                        );
                    })}
                </div>
            </>
        );
    }
}

export default App;
