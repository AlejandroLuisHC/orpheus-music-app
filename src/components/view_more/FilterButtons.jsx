import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ButtonPrimaryStyle } from "../style/generalStyle";
import { ButtonFilter } from "../style/viewMoreStyle";
import {fetchKey} from "../../api"


const FilterButtons = ({param,setFilter,filter}) => {
    const { data: genres, status: genresStatus } = useQuery(["genres", "genres"], () => fetchKey("genres"));
    const { data: moods, status: moodsStatus } = useQuery(["moods", "moods"], () => fetchKey("moods"));
    
    const [filterActive ,setFilterActive] = useState({})
    const addFilter = (id,type) => {
        
        if(!filter){
            const newFilter ={type:type,value:[]}
           
            newFilter.value.push(id)
            setFilter(prev=> prev = newFilter)
            setFilterActive(prev=> prev = {[id]:true})
        }else {
            if(!filter.value.includes(id)){
                const newValue = [...filter.value]
                newValue.push(id)
                setFilter(prev=> prev = {type:type,value:newValue})
                setFilterActive(prev=> prev = {...prev,[id]:true})
            }else{
                const newValue = [...filter.value]
                const pos = newValue.indexOf(id)
                newValue.splice(pos,1)
                if(newValue.length === 0){
                    setFilter(prev=> prev = false)
                }else {
                    setFilter(prev=> prev = {type:type,value:newValue})
                }
                setFilterActive(prev=> prev = {...prev,[id]:false})

            }
        }
    }
    return (
        param === "playlists" 
            ?
            moods?.map(mood =>
                <ButtonFilter 
                    active={filterActive[mood.name]}
                    key={mood.id}
                    onClick ={(e)=>addFilter(e.target.value,"moods")} 
                    value={mood.name} 
                >
                    {mood.name}
                </ButtonFilter>
            ) 
            : param === "users" 
                ? null
                :
                genres?.map(genre =>
                    <ButtonFilter 
                        active={filterActive[genre.id]} 
                        key={genre.id} 
                        onClick ={(e)=>addFilter(e.target.value,"genres")} 
                        value={genre.id} 
                    >
                        {genre.name}
                    </ButtonFilter>
                )
            
          
    )
}

export default FilterButtons