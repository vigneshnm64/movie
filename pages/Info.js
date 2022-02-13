import Head from 'next/head'
import getConfig from 'next/config'
import Information from '../src/Components/info/Information'
import { useState } from 'react'
import { useEffect } from 'react'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

    export default function Home(intialData) {
    const [searchResult, setSearchRsults] = useState([])

    useEffect(() => {
        setSearchRsults(intialData.trendingMovies.results)
    }, [intialData])

    useEffect(() => {
        console.log("my", intialData.results)
    }, [intialData])

    return (
        <div className='container'>
            <div className='main-image'>
                <img src="https://support.musicgateway.com/wp-content/uploads/2021/04/how-long-does-a-movie-take-to-make.png"></img>
            </div>

            <Head>
                <h1>INFO</h1>
                <link rel="stylesheet" href="/styles.css"></link>
            </Head>


            <div className='movie-search'>
                {searchResult && searchResult.map((each, index) => {
                    return (
                        <Information
                            overview={each.overview}
                            key={index}
                        />
                    )

                })}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    let trendingMovies = await fetch
        (`https://api.themoviedb.org/3/movie/popular?api_key=0122f66b835be1351367d17f60ca287b&language=en-US&page=1`)
    trendingMovies = await trendingMovies.json()
    console.log(trendingMovies)
    return {
        props: { trendingMovies: trendingMovies }, // will be passed to the page component as props
    }
}
