import Head from 'next/head'
import getConfig from 'next/config'
import Link from 'next/link'
import Movies from '../src/Components/Movies'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../src/Header/Header'
import Poster from '../src/Poster/Poster'
import Input from '../src/Input/Input'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function Home(intialData) {
  const [searchResult, setSearchRsults] = useState([])
  const [searchParam, setSearchParam] = useState("")

  console.log("will", intialData)
  const [Visible, setVisible] = useState(4);
  const loadmore = () => {
    setVisible((Visible) => Visible + 4)
  }

  useEffect(() => {
    setSearchRsults(intialData.popularMovies.results)
  }, [intialData])

  useEffect(() => {
    console.log("still", searchParam)
  }, [searchParam])

  useEffect(() => {
    console.log("my", intialData.popularMovies.results)
  }, [intialData])

  useEffect(() => {
    console.log("po", intialData)
  }, [intialData])


  function mapping() {
    if (searchParam) {
      const myResult = searchResult.filter((data) => {
        return data.title.toLowerCase().includes
          (searchParam.toLowerCase())
      })

      return (
        myResult.length
          ? myResult.map((each) => (
            <Movies
              index={each.id}
              key={each.id}
              title={each.title}
              poster_path={each.poster_path}
              overview={each.overview}
            />
          ))
          : <h1>No data found</h1>
      )
    } else {
      return (
        searchResult.slice(0, Visible).map((each) => (
          <Movies
            index={each.id}
            key={each.id}
            title={each.title}
            poster_path={each.poster_path}
            overview={each.overview}
          />
        ))
      )
    }

  }

  return (
    <div className='container'>
      <Header />
      <Poster />
      <Input searchParam={searchParam} setSearchParam={setSearchParam} />


      <Head>
        <link rel="stylesheet" href="/styles.css"></link>
      </Head>

      <h1 className='movie-headder'>Popular movie</h1>
      <div className='movie-search'>
        {mapping()}
      </div>
      <div className="btn-container" >
        <button onClick={loadmore} className="btn1" >Load more</button>
      </div>
    </div>

  )
}

export async function getServerSideProps(context) {
  let popularMovies = await fetch
    (`https://api.themoviedb.org/3/movie/popular?api_key=0122f66b835be1351367d17f60ca287b&language=en-US&page=1`)
  popularMovies = await popularMovies.json()
  console.log(popularMovies)
  return {
    props: { popularMovies: popularMovies }, // will be passed to the page component as props
  }
}
