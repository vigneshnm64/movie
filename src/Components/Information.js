const Information=({overview,index}) => {
const Image_API ='https://image.tmdb.org/t/p/w500/' ;

return(
    <div className="movie" key={index}>
     <h3>{overview}</h3>
    <div className="movie-overview">{overview}
    </div>
    </div>
)



}

export default Information