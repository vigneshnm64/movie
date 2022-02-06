import {Search} from "@mui/icons-material"
import { useEffect } from "react"

export default function Input({searchParam,setSearchParam}) {
   
  useEffect(() => {
     console.log("li",searchParam)
   },[searchParam])
  
  return (
      <div className="search-container" >
        <Search className="btn" />
       <input onChange={(e)=> setSearchParam(e.target.value)} 
        className="search-button" placeholder='Search movies and Click enter' />
      </div>
    )
  }
