import React, { Component } from "react";
import User from '../components/User';
import WithdrawButton from '../components/WithdrawButton';
import ViewAccountBalance from '../components/ViewAccountBalance';
import Charity from '../components/Charity';

import './App.css';

class App extends Component{
    state = {
        showBalance: false
    }

    displayBalance = () =>{
        this.setState({showBalance: true})
    }
    render(){
        const { showBalance } = this.state
        return(
            <div className="App">
                <User profilePic="/userData/Profile1.jpg"/>
                <ViewAccountBalance
                    showBalance={showBalance}
                    displayBalance={this.displayBalance}
                />
                <section>
                    <WithdrawButton amount={10000} />
                    <WithdrawButton amount={5000} />
                </section>

                <Charity/>
            </div>
        )
    }
}
export default App