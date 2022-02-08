import Link from "next/link";

const Movies =({title,index,overview,poster_path}) => { 
const Image_API ='https://image.tmdb.org/t/p/w500/' ;

return(
    <div className="movie" key={index}>
     <h3>{title}</h3>
    <div className="hover">
     <Link href={`/${index}`}>
    <img src={Image_API + poster_path} alt={title}/>
     </Link>
     </div>
    </div>
)

}

export default Movies;