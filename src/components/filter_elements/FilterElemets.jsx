import { useOutletContext } from "react-router-dom";
import { DivCard, DivInfoLists, DivPicLists, H6StyleHero, ImgCards, PStyleHero } from "../style/homeStyle";


const FilterElemets = ({ filter, data }) => {
    const {value,type} = filter;
    const [setPlayer] = useOutletContext()

    const filterByType = (type) => {
          switch(type){
               case "genres": 
               return findByGenre()
              
               case "moods" :
               return findByMood()   
               
               default :
               return findAll()
          }
    }

    const findByGenre = () => {
         let tracksFound = [] 
         return data?.map(track => { 
              return value.map(v => {
                   if (track.genres.includes(v)) {
                        if (!tracksFound.includes(track.id)) {
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
    const findByMood = () => {
          let playlistsFound = []
          return data?.map(playlist => {
               return value.map(moodValue => {
                    if (playlist.moods.includes(moodValue)){
                         if(!playlistsFound.includes(playlist.id)){
                              playlistsFound.push(playlist.id)
                              return <DivCard key={playlist.id}>
                              <DivPicLists>
                                  <ImgCards src={playlist.img} />
                              </DivPicLists>
                              <DivInfoLists>
                                  <H6StyleHero>{playlist.name}</H6StyleHero>
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
         !filter ? findAll() : filterByType("moods")
    )
}

export default FilterElemets