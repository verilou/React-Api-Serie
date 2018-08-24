import React from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
 
class connection extends React.Component {

  componentDidMount(){
    var urlParam = new URL(window.location);
    var getValue = new URLSearchParams(urlParam.search);
    axios.post('https://api.betaseries.com/oauth/access_token', {
        'client_id' : "3355c0d4d0cd",
        'client_secret' : "bba891b0b7b8af28607115ac83a6eee4",
        'redirect_uri' : "http://localhost:3000/connection",
        'code' : getValue.get("code"),
    })
    .then(function (response) {
      Cookies.set("token_user", response.data.access_token);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  render() {
    return (
      <p>
        vous vous etes connecter 
      </p>
    );
  }
}
export default connection;