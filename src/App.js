/* eslint-disable jsx-a11y/alt-text */
import Users from "./Component/userCard";
import "./App.css";
import BGI from "./BGi.jpeg";
import LGMLOGO from "./lgmlogo.png";
import React, { Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { users_data: [], loading: true };

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        document.getElementById("main").style.display = "inline-block";
        const link = "https://reqres.in/api/users?page=1";
        fetch(link)
            .then((response) => response.json())
            .then((users) => {
                this.setState({ users_data: users.data, loading: false });
                console.log(users.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        
        return(<>
            <nav>
            <div className = "box" >
            <div className = "row" >
            <div className = "column1" >  
            < h1 > <img src={LGMLOGO}height={76} width={250}/>  </h1>  </div>
                     
            <div className = "column2" >


            <button onClick = { this.updateState } > Get Users </button> </div> </div> </div> </nav> <div className = "box2" >
            < h2> Tap on Get Users to Continue....</h2>
            <img src={BGI} height={300} width={1200} />
            
            <
            
            Users loading = { this.state.loading }
            users = { this.state.users_data }
            
            /> </div></>
        );
    }
}



export default App;