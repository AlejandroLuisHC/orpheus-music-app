import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { DivModalClose, DivModalOptions, DivModalWork } from '../style/profileStyle'

const BtnAddToPlaylist = ({ user }) => {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })

    // const selectPlaylist = () => {

    // }

    return (
        <>
            <button onClick={open}>Add to playlist</button>

            <Modal>
                <DivModalWork>
                    <DivModalOptions>
                        <button>Create playlist</button>

                        <select onChange={selectPlaylist}>
                            {user.playlists.map(playlist => (
                                <option value={playlist._id}>{playlist.name}</option>                              
                            ))}
                        </select>
                    </DivModalOptions>
                        
                    <DivModalClose>
                        <IoIosCloseCircleOutline onClick={close} />
                    </DivModalClose>
                </DivModalWork>
            </Modal>
        </>
    )
}

export default BtnAddToPlaylist