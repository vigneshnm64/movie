import Link from "next/link";

export default function HeaderInfo() {
    return (
      <div className="info-head" >
       <Link href={"/"}>
      <img className="infologo" src="	https://mini-movie-app.netlify.app/static/media/reactMovie_logo.08494abf.png" alt="" className="logo1"/>
        </Link>
        <img className="infologo2" src="https://mini-movie-app.netlify.app/static/media/tmdb_logo.30cd724b.svg" alt="" className="logo2"/>
      </div>
      
       
     )
  }
  