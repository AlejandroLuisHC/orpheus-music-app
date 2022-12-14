import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ButtonPrimaryStyle } from "../style/generalStyle";
import {fetchKey} from "./../../api/"


const FilterButtons = ({param,setFilter}) => {
    const { data:genres, status:genresStatus } = useQuery(["genres", "genres"], () => fetchKey("genres"));
    
    // const [element , setElement] =useState("")
    // switch(type) {
    //     case "tracks":
    //         setElement(prev=>prev ="tracks")
    //     //    genres?.map(genre =>{
    //     //        <ButtonPrimaryStyle>{genre.name}</ButtonPrimaryStyle>
    //     //    })
    //     default :
    //     setElement(prev=>prev ="")
    // } 
    console.log(genres)
    console.log(param)
  return (
    
    
         param === "tracks"&& genres ? genres?.map(genre =>{
             <ButtonPrimaryStyle key={genre.id} onClick ={()=>setFilter({type:"genre",value:[...value,genre.id]})} >{genre.name}</ButtonPrimaryStyle>
         })
        :<p>patata</p>
         

   
  )
}

export default FilterButtons