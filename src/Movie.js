import React,{ Component} from 'react';

class Movie  extends Component{

	viewMovie(){

		const urlmovie = "https://www.themoviedb.org/movie/" + this.props.movieid
		window.location.href = urlmovie//navigates to specified page
	}

	render(){
		return (
			<div>
				<div className="container m-5" >
					<div className="row">
						<div className="col-lg-4">
							<img src={this.props.movieimage}alt="" className="imagemovie"/>
						</div>
						<div className="col-lg-8">
							<h3 className="text-primary display-3 p-5 m-5">
								{this.props.movietitle}
							</h3>
							<p className="text-secondary">
								{this.props.movieoverview}
							</p>
							<button onClick={this.viewMovie.bind(this)} className="btn btn-info">Search</button>
							<button className="btn btn-play" onClick={this.viewMovie.bind(this)}>Info</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}



export default Movie;

//movie component rendered