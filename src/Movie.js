import React from 'react';

class Movie extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div>
                <h1>{props.title}</h1>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
export default Movie;