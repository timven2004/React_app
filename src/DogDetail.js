import React, {Component} from "react";
import "./DogDetail.css";


class DogDetail extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className="row">
			<div className="container box">
				<div>
					<img src={this.props.dog.src} className="photo"></img>
					<div className="nameAndAge">
						<h4 className="name">{this.props.dog.name}</h4>
						<h4 className="age">{this.props.dog.age} years old</h4>
					</div>
						{this.props.dog.facts.map(fact=>(
					<div>
							<p>{fact}</p>
						<hr/>
					</div>
					)	
					)}
					
				</div>
				<div className="btn btn-success button" onClick={this.props.history.goBack}>go back</div>
			</div>
		</div>
		)
		
	}
}

export default DogDetail;