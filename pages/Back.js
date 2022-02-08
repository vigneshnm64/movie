import Head from "next/head"
import getConfig from 'next/config'
import Movies from '../src/Components/Movies'
import { useState } from 'react'
import { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';


const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function Back(intialData) {
  const [searchResult, setSearchRsults] = useState([])

  useEffect(() => {
    setSearchRsults(intialData.trendingMovies.results)
  }, [intialData])

  useEffect(() => {
    console.log("sill", intialData)
  }, [intialData])

  return (
    <div className='container'>

      <div className='main-image'>
        <img src="https://s3.eu-west-2.amazonaws.com/media.chippingnortontheatre.com/images/events/March%2022/nightmare-alley-poster(1).jpg" />

        <div className="content">
          <div className="back-image">

            <div className="search">

            </div>
          </div>
        </div>
      </div>

      <Head>
        <h1>BACK PAGE</h1>
        <link rel="stylesheet" href="/styles.css"></link>
      </Head>


      <div className='movie-search'>
        {searchResult && searchResult.map((each, index) => {
          return (
            <Movies
              index={each.id}
              title={each.title}
              poster_path={each.poster_path}
              overview={each.overview}
            />
          )

        })}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  let trendingMovies = await fetch
    (`https://api.themoviedb.org/3/movie/upcoming?api_key=feacb0c6ebc8ec3f6a939dd1f099ac7f&language=en-US&page=1`)
  trendingMovies = await trendingMovies.json()
  console.log(trendingMovies)
  return {
    props: { trendingMovies: trendingMovies }, // will be passed to the page component as props
  }
}