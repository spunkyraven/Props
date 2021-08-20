
import React from 'react'
import './Movielist.css';
import MovieCard from '../Movie/MovieCard';
const Movielist = ({Data}) => {
    console.log(Data)
    return (
        <div>
            
            {Data.map((el)=>(
            <MovieCard Movie={el} key={el.id}/>
            ))}
        </div>
    )


            
}

export default Movielist;