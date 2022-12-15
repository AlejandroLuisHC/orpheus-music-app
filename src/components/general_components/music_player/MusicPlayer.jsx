import { Player } from "react-simple-player"
import { ButtonClosePlayer, DivInfoTrack, DivMusicPlayer, DivMusicPlayerInfo, SpanPlayerName, SpanPlayerUser } from "../../style/generalStyle"
import { IoMdClose } from "react-icons/io"

const MusicPlayer = ({audio,name,user,setPlayer,hideVolume}) => {
  return (

    <DivMusicPlayer>
        <Player 
            src={audio} 
            height={40} 
            grey={[18, 18, 18]} 
            accent={[239, 184, 16]} 
            hideVolume={hideVolume}
        />
        <DivMusicPlayerInfo>
            <DivInfoTrack>
                <SpanPlayerName>{name}</SpanPlayerName>
                <SpanPlayerUser>{user}</SpanPlayerUser>
            </DivInfoTrack>
            <ButtonClosePlayer onClick={() => setPlayer(prev => prev = {
                ...prev,
                playerOn: false
            })}>
                <IoMdClose />
            </ButtonClosePlayer>
        </DivMusicPlayerInfo>
    </DivMusicPlayer>
  )
}

export default MusicPlayer

