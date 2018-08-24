import React from 'react'
import Axios from 'axios';

class Discover extends React.Component{
    componentDidMount(){
        Axios.get("https://api.betaseries.com/movies/discover?key=3355c0d4d0cd&type=popular&limit=10")
        .then(function(result){
            this.movie = result.data;
        })
        .catch(function(e){
            console.log(e);
        })
    }
    render(){
        return(
            <div>test</div>
        )
    }
}
export default Discover;