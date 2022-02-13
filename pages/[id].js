import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import Information from '../src/Components/info/Information';
import HeaderInfo from '../src/Components/info-header/HeaderInfo'
import Link from 'next/link';


const MovieDetails = () => {
    const [Movieimage, SetMovieimage] = useState("")
    const [Movietitle, SetTitle] = useState("")
    const [Moviecast, SetMoviecast] = useState([])
    const [Avragevote, SetAvragevote] = useState("")
    const [Owerview, Setowerview] = useState("")
    const [budget, Setbuget] = useState("")
    const [revenue, Setrevenue] = useState("")
    const [runtime, Setruntime] = useState("")
    const [poster, Setposter] = useState("")

    const router = useRouter()
    const { id } = router.query
    const Image_API = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        InfoDetails()
        CastDetails()
    }, [])

    console.log("raid", router)

    const InfoDetails = () => {
        const configObj = {
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=4eb0f63066123e2dc99ea2a934d543da`,
            headers: {
                "Content-Type": "application/json"
            }
        }
        axios(configObj)
            .then((responce) => {
                console.log("Rsponce", responce.data)
                SetMovieimage(responce.data.backdrop_path)
                SetTitle(responce.data.original_title)
                SetAvragevote(responce.data.vote_average)
                Setowerview(responce.data.overview)
                Setbuget(responce.data.budget)
                Setrevenue(responce.data.revenue)
                Setruntime(responce.data.runtime)
                Setposter(responce.data.poster_path)
            })
            .catch((error) => console.log("mill", error))
    }

    const CastDetails = () => {
        const configObj = {
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4eb0f63066123e2dc99ea2a934d543da`,
            headers: {
                "Content-Type": "application/json"
            }
        }
        axios(configObj)
            .then((responce) => {
                console.log("Rsponce-cast", responce.data.cast)
                SetMoviecast(responce.data.cast)


            })
            .catch((error) => console.log("mill-cast", error))
    }

    return (


        <div className='header'>
            <HeaderInfo />
            <div className='header_'>
                <Link href={"/"}>
                    <h1 className='line'>Home</h1>
                </Link>
                <p className='line'>|</p>
                <p className='line'>{Movietitle}</p>
            </div>

                <div className='background_div'> 
                <img className='banner_drop' src={Image_API + Movieimage}></img>
                   <div className='background_one'>
                   <div className='details_'>
                    <h1 className='title'>{Movietitle}</h1>
                    <h3 className='plot-one'>PLOT</h3>
                    <p className='plot'>{Owerview}</p>
                    <h3 className='my-rating'>IMDB RATING</h3>
                    <p className='rating'>{Avragevote}</p>
                    </div>
                 </div>
                 <img className='img_two' src={Image_API + poster}></img>
                </div>



                <div className='box'>
                     <div className='box_o'>
                       <p className='box_'>Running Time:</p>
                       <p className='box_'>{runtime} minutes</p>
                       </div>
                
                       <div className='box_o'>
                            <p className='box_'>Budget:</p>
                            <p className='box_'>${budget}</p>
                            </div>
                
                        <div className='box_o'>
                        <p className='box_'>Revenue:</p>
                        <p className='box_'>${revenue}</p>
                    </div>
                        </div>
            
            
             
            <h1>ACTORS</h1>
            <div className='movie-search'>

                {

                    Moviecast.map((data) => (
                        <Information
                            key={data.id}
                            name={data.name}
                            character={data.character}
                            profile_path={data.profile_path}
                        />

                    ))
                }
            </div>
        </div>


    )
}

export default MovieDetails;
