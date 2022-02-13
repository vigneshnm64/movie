const Information=({name,character,profile_path,budget,revenue,runtime,poster_path}) => {
const Image_API ='https://image.tmdb.org/t/p/w500/' ;


return(
    <div className="movie">
     <h3>{name}</h3>
     <h3>{budget}</h3>
     <h3>{revenue}</h3>
     <h3>{runtime}</h3>
    <div className="movie-charcter">{character}
    <img src={Image_API + profile_path} alt={name}/>
    </div>
    <div> <img src={Image_API + poster_path} alt={name}/></div>
    </div>
)



}

export default Information