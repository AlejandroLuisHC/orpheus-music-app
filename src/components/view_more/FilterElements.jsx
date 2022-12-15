import { useOutletContext } from "react-router-dom";
import { DivImgRectangleL } from "../style/generalStyle";
import {  
     DivEventCard,
     DivEventInfo,
     DivImageMusic,
     DivInfoMusic,
     DivMusicCard, 
     DivUserCard,
     ImgAvatarUser,
     ImgCardMusic,
     PDescription, 
     PEventPrice,
     PTitle
} from "../style/homeStyle";

const FilterElements = ({ filter, data, viewMore }) => {
    const {value,type} = filter;
    const [setPlayer] = useOutletContext()
    
    const filterByType = (type) => {
          switch(type){
               case "genres": 
               return findByGenre()
              
               case "moods" :
                    console.log("entrando")
               return findByMood()   
               
               default :
               return findAll()
          }
    }

     const findByGenre = () => {
          let dataFound = [] 
          return data?.map(d => { 
               return value.map(v => {
                    if (d.genres.includes(parseInt(v))) {
                         if (!dataFound.includes(d.id)) {
                              dataFound.push(d.id)
                              if (viewMore === "events") {
                                   return <DivEventCard key={d.id}>
                                        <DivImgRectangleL src={d.img} />
                                        <DivEventInfo>
                                             <div>
                                                  <PTitle>{d.name}</PTitle>
                                                  <PDescription>{d.location} - {d.date}</PDescription>
                                             </div>
                                             <PEventPrice>{d.price}€</PEventPrice>
                                        </DivEventInfo>
                                   </DivEventCard>
                              } else if (viewMore === "tracks"){
                                   return <DivMusicCard key={d.id}>
                                        <DivImageMusic onClick={() => setPlayer(
                                                  (prev) => (prev = {
                                                       playerOn: true,
                                                       audio: d.file,
                                                       name: d.name,
                                                       user: d.description,
                                                  })
                                             )}
                                        >
                                             <ImgCardMusic src={d.img} />
                                        </DivImageMusic>
                                        <DivInfoMusic>
                                             <PTitle>{d.name}</PTitle>
                                             <PDescription>{d.description}</PDescription>
                                        </DivInfoMusic>
                                   </DivMusicCard>
                              } else if (viewMore === "albums"){
                                   return <DivMusicCard key={d.id}>
                                        <DivImageMusic>
                                             <ImgCardMusic src={d.img} />
                                        </DivImageMusic>
                                        <DivInfoMusic>
                                             <PTitle>{d.name}</PTitle>
                                             <PDescription>{d.description}</PDescription>
                                        </DivInfoMusic>
                                   </DivMusicCard>
                              }
                         }
                    }
               })
          }) 
     }
    
    const findByMood = () => {
          let playlistsFound = []
          return data?.map(d => {
               return value.map(moodValue => {
                    if (d.moods.includes(moodValue)){
                         if(!playlistsFound.includes(d.id)){
                              playlistsFound.push(d.id)
                              if (viewMore === "playlists") {
                                   return  <DivMusicCard key={d.id}>
                                        <DivImageMusic>
                                             <ImgCardMusic src={d.img} />
                                        </DivImageMusic>
                                        <DivInfoMusic>
                                             <PTitle>{d.name}</PTitle>
                                             <PDescription>{d.description}</PDescription>
                                        </DivInfoMusic>
                                   </DivMusicCard>
                              }
                         }
                    }
               })
          })
    }
    
    const findAll = () => {
          return data?.map(d => {
               if (viewMore === "events") {
                    return <DivEventCard key={d.id}>
                         <DivImgRectangleL src={d.img} />
                         <DivEventInfo>
                              <div>
                                   <PTitle>{d.name}</PTitle>
                                   <PDescription>{d.location} - {d.date}</PDescription>
                              </div>
                              <PEventPrice>{d.price}€</PEventPrice>
                         </DivEventInfo>
                    </DivEventCard>
               } else if (viewMore === "users"){
                    return <DivUserCard key={d.id}>
                         <ImgAvatarUser src={d.img} />
                         <PNameUser>{d.name}</PNameUser>
                         <PFollowersUser>{d.followers} followers</PFollowersUser>
                    </DivUserCard>
               } else if (viewMore === "tracks"){
                    return <DivMusicCard key={d.id}>
                         <DivImageMusic onClick={() => setPlayer(
                                   (prev) => (prev = {
                                        playerOn: true,
                                        audio: d.file,
                                        name: d.name,
                                        user: d.description,
                                   })
                              )}
                         >
                              <ImgCardMusic src={d.img} />
                         </DivImageMusic>
                         <DivInfoMusic>
                              <PTitle>{d.name}</PTitle>
                              <PDescription>{d.description}</PDescription>
                         </DivInfoMusic>
                    </DivMusicCard>
               } else {
                    return <DivMusicCard key={d.id}>
                         <DivImageMusic>
                              <ImgCardMusic src={d.img} />
                         </DivImageMusic>
                         <DivInfoMusic>
                              <PTitle>{d.name}</PTitle>
                              <PDescription>{d.description}</PDescription>
                         </DivInfoMusic>
                    </DivMusicCard>
               }
          })
    }

    return (
         !filter ? findAll() : filterByType(type)
    )
}

export default FilterElements