import { useQuery } from "@tanstack/react-query"
import  { useState } from "react"
import {  useParams } from "react-router-dom"
import { fetchKey } from "../api"
import FilterButtons from "../components/filter_buttons/FilterButtons"
import FilterElemets from "../components/filter_elements/FilterElemets"
import { H2StyleWhite } from "../components/style/generalStyle"
//TODO Preguntar si se puede filtrar por genero y mood , si es si habrá que mapear(otra vez!!) el type y que haga un switch a cada elemento que se ha mapeado. 
//! Con este modo tambien llega al filtro 
const ViewMore = () => {
     const { viewMore } = useParams()
     const [filter,setFilter] = useState({type: "gender", value: ["relax"]})
     const { data, status } = useQuery([viewMore, viewMore], () => fetchKey(viewMore))
     
     return (
         
               <FilterElemets
                    filter = {filter}
                    data = {data}
               />
                     
          // <>
          //      <H2StyleWhite>All {viewMore}</H2StyleWhite>
          //      <FilterButtons param={viewMore} setFilter={setFilter}/>
          // </> 
     
     )
}

export default ViewMore



