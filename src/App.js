import React, {Component} from "react";
import './App.css';
import ShowDogs from "./ShowDogs.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
Redirect
} from "react-router-dom";
import DogDetail from "./DogDetail.js"


class App extends Component{

static defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: "hazel.jpg",
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby.jpg",
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
}
  render(){
	  return (
	    <Router>

		  <div>
			<nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <Link className ="navbar-brand" to="/">Pet Shelter</Link>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
  </button>
  <div className ="collapse navbar-collapse" id="navbarNav">
    <ul className ="navbar-nav">
      <li className ="nav-item active">
        <Link className ="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
	{this.props.dogs.map((dog)=>(
		<li className ="nav-item">
		<Link to={`/${dog.name}`} className ="nav-link">{dog.name}</Link>
      </li>
		))}
      

    </ul>
  </div>
</nav>


    		<div className="App">
			  
			<Switch>
				<Route exact path="/:dogID" render={(routerProps)=><DogDetail {...routerProps} dog={this.props.dogs.find((dogToBeFind)=>{return dogToBeFind.name==routerProps.match.params.dogID}) }/>}/>
				<Route exact path="/">
				  <ShowDogs dogs={this.props.dogs}/>
				</Route>
				<Redirect to = "/"/>
			</Switch>
    		</div>
  		</div>
		  </Router>
	  );
		}
}

export default App;
