
import React from 'react';
import './MovieCard.css';
const MovieCard = ({Movie}) => {
	console.log(Movie)
    
    return (
        <div>
           <div className="wrapper">
	<div className="main_card">
		<div className="card_left">
			<div className="card_datails">
				<h1>{Movie.name}</h1>
				<div className="card_cat">
					<p className="PG">PG - 13</p>
					<p className="year">{Movie.date}</p>
					<p className="genre">{Movie.type} </p>
					<p className="time">2h 28m</p>
				</div>
				<p className="disc">{Movie.description}</p>
				<a href={Movie.deails} target="_blank">Read More</a>
			<div className="social-btn">
        
				<button>
					<i className="fas fa-play"></i> SEE TRAILER
				</button>
				
				<button>
					<i className="fas fa-download"></i> DOWNLOAD
				</button>
				
				<button>
					<i className="fas fa-thumbs-up"></i> 97%
				</button>
				
				<button>
					<i className="fas fa-star">{Movie.rating}</i>
				</button>
			</div>	
			</div>
		</div>
		<div className="card_right">
			<div className="img_container">
				<img src={Movie.image} alt=""/>
				</div>
				<div className="play_btn">
					<a href={Movie.deails} target="_blank">
						<i className="fas fa-play-circle"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
    </div>
        
    )
       
    
}

export default MovieCard
