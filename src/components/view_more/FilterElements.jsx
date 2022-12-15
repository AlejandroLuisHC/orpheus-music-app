import { useOutletContext } from "react-router-dom";
import { DivCard, DivInfoLists, DivPicLists, H6StyleHero, ImgCards, PStyleHero } from "../style/homeStyle";


const FilterElements = ({ filter, data }) => {
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
                             return <DivCard key={d.id}>
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
                                   <PStyleHero>{playlist.description}</PStyleHero>
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
         !filter ? findAll() : filterByType(type)
    )
}

export default FilterElements