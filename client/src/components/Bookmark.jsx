import React, { Component } from 'react';
import UpdateForm from './UpdateForm';
const axios = require('axios');

export class Bookmark extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editting: false,
        };
    }

    deleteBookmark = async (id) => {
        try {
            const response = await axios.delete(`/bookmarks/${id}`);
            // console.log(response);
            this.props.fetchdata();
        } catch (err) {
            console.log(err);
        }
    };

    toggleEditForm = () => {
        this.setState({ editting: !this.state.editting });
    };

    render() {
        return (
            <>
                <div className='bookmark-container'>
                    <a
                        className='title'
                        href={this.props.bookmark.url}
                        target='_blank'
                    >
                        {this.props.bookmark.title}
                    </a>{' '}
                    <div className='actions-container'>
                        <button
                            className='edit-btn'
                            onClick={() => this.toggleEditForm()}
                        >
                            Edit
                        </button>
                        <button
                            className='delete-btn'
                            onClick={() =>
                                this.deleteBookmark(this.props.bookmark._id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                    <br />
                </div>
                {this.state.editting && (
                    <UpdateForm
                        bookmark={this.props.bookmark}
                        fetchdata={this.props.fetchdata}
                    />
                )}{' '}
            </>
        );
    }
}

export default Bookmark;
