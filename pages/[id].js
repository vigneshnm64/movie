import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import Information from '../src/Components/info/Information';
import HeaderInfo from '../src/Components/info-header/HeaderInfo'


const MovieDetails = () => {
    const [Movieimage, SetMovieimage] = useState("")
    const [Movietitle, SetTitle] = useState("")
    const [Moviecast, SetMoviecast] = useState([])
    const [Avragevote, SetAvragevote] = useState("")
    const [Owerview, Setowerview] = useState("")
    const [budget, Setbuget] = useState("")
    const [revenue, Setrevenue] = useState("")
    const [runtime, Setruntime] = useState("")

    const router = useRouter()
    const { id } = router.query
    const Image_API = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        InfoDetails()
        CastDetails()
    }, [])

    console.log("raid",router)

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


        <div className='details'>
            <HeaderInfo />
            <img className='detail-image' src={Image_API + Movieimage}></img>
            <h1>{Movietitle}</h1>
            <h6>{Avragevote}</h6>
            <h1>{budget}</h1>
            <h1>{revenue}</h1>
            <h1>{runtime}</h1>
            <p>{Owerview}</p>

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
