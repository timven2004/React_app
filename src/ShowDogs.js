import React, {Component} from "react";
import './ShowDogs.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class ShowDogs extends Component{
	constructor(props){
		super(props)
	}
	
	
	render(){
		return(
		<div className="container">
			<h1>Click a Dog!</h1>
			<div className="row d-flex justify-content-center">
				{this.props.dogs.map(dog=>(
				<div className="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-xs-12 text-center">
					<Link to ={`/${dog.name}`} className="linkArea">
					  <img src={dog.src} className="propic"></img>
						<div className="nameTag">
					  <h2 className="dogName">{dog.name}</h2>
						<div class="underScore"></div>
						</div>
					</Link>
				</div>
			  ))}
			
			</div>
		</div>
	
)}

}

export default ShowDogs;