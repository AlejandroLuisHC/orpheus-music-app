import { useQuery } from "@tanstack/react-query"
import react, { useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import { fetchKey } from "../api"
import FilterButtons from "../components/filter_buttons/FilterButtons"
import { H2StyleWhite } from "../components/style/generalStyle"
import { DivCard, DivInfoLists, DivPicLists, H6StyleHero, ImgCards, PStyleHero } from "../components/style/homeStyle"

const ViewMore = () => {
     const { viewMore } = useParams()
     const [filter,setFilter] = useState({type: "genre", value: [6, 2]})
     const { data, status } = useQuery([viewMore, viewMore], () => fetchKey(viewMore))
     
     return (
          <div>
               <Map
                    filter = {filter}
                    data = {data}
               />
          </div>               
          // <>
          //      <H2StyleWhite>All {viewMore}</H2StyleWhite>
          //      <FilterButtons param={viewMore} setFilter={setFilter}/>
          // </> 
     
     )
}

export default ViewMore



const Map = ({ filter, data }) => {
     const {value} = filter;
     const [setPlayer] = useOutletContext()
     const findByGenre = () => {
          let tracksFound = [] 
          return data?.map(track => { 
               return value.map(v => {
                    if (track.genres.includes(v)) {
                         if (!tracksFound.includes(track.id)) {
                              console.log(tracksFound);
                              tracksFound.push(track.id)
                              return <DivCard key={track.id}>
                                   <DivPicLists 
                                        onClick={() => setPlayer(prev => prev = {
                                             playerOn: true ,
                                             audio: track.file,
                                             name:track.name,
                                             user:track.description
                                        })}
                                   >
                                        <ImgCards src={track.img} />
                                   </DivPicLists>
                                   <DivInfoLists>
                                        <H6StyleHero>{track.name}</H6StyleHero>
                                        <PStyleHero>{track.description}</PStyleHero>
                                   </DivInfoLists>
                              </DivCard> 
                         }
                    }
               })
          }) 
     }
     const findAll = () => {
          return data?.map(d => 
               <DivCard key={d.id}>
                    <DivPicLists 
                         onClick={() => setPlayer(prev => prev = {
                              playerOn: true ,
                              audio: d.file,
                              name:d.name,
                              user:d.description
                         })}
                    >
                         <ImgCards src={d.img} />
                    </DivPicLists>
                    <DivInfoLists>
                         <H6StyleHero>{d.name}</H6StyleHero>
                         <PStyleHero>{d.description}</PStyleHero>
                    </DivInfoLists>
               </DivCard> 
          )
     }

     return (
          !filter 
               ? findAll()
               : findByGenre()
     )
}