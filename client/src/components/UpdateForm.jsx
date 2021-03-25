import React, { Component } from 'react';
const axios = require('axios');

export class UpdateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.bookmark.title,
            url: this.props.bookmark.url,
        };
    }
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    updateData = async () => {
        try {
            const response = await axios.put(
                `/bookmarks/${this.props.bookmark._id}`,
                {
                    title: this.state.title,
                    url: this.state.url,
                },
            );
            this.props.fetchdata();
        } catch (err) {
            console.log(err);
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.updateData();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    value={this.state.title}
                    onChange={this.handleChange}
                    id='title'
                />
                <input
                    type='text'
                    value={this.state.url}
                    onChange={this.handleChange}
                    id='url'
                />
                <button type='submit'>Update</button>
            </form>
        );
    }
}

export default UpdateForm;
