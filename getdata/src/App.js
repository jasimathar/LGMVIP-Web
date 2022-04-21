import Users from "./comp/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
            <h2><strong>LetsGrowMore</strong></h2>
            <button className="fetchbtn" onClick={this.updateState}>
              <h3>Get Users</h3>
            </button>
          </div>
        </nav>
        <hr></hr>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        
        <footer className="footer">
          This Project is done by <strong>JASIM ATHAR</strong>
        </footer>
      </>
    );
  }
}

export default App;