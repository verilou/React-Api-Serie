import React from "react";
import Cookies from 'js-cookie';
import Axios from "axios";
import Discover from "./Discover";

class profile extends React.Component{
    constructor(props){
        super(props)
        this.token = Cookies.get('token_user');
        if (typeof this.token === "string") {
            this.token = true;
        }
    }
    render(){
        if (!this.token) {
            return (
                <li>
                    <a href="https://www.betaseries.com/authorize?client_id=3355c0d4d0cd&redirect_uri=http://localhost:3000/connection">Connexion a l'api</a>
                </li>
            )
        }
        return (
            <div>
                <p>Profil page</p>
                <div>
                    <Discover/>
                </div>
            </div>
        )
    }
}

export default profile;