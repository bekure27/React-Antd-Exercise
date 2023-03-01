import react from 'react';
import {Image} from 'antd';

const MoviesList = (props) => {

    return (
        <>
        {
        props.movies.map (
            (movie,index) => {
                return(
                    <div>
                        <Image src={movie.Poster} alt="Viking"/>
                    </div>
                )
            }
        )

        }
        </>
    )
}

export default MoviesList;