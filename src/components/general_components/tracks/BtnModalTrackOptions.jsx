import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline, IoMdMore } from 'react-icons/io'
import { BtnSelectPlaylist, DivModalAddToPlaylist, DivOptionsIcon } from '../../style/generalStyle'
import { DivModalClose } from '../../style/profileStyle'
import BtnModalAddToPlaylist from './BtnModalAddToPlaylist'

const BtnModalTrackOptions = ({ trackId }) => {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })

    return (
        <>
            <DivOptionsIcon onClick={open}><IoMdMore size={20} /></DivOptionsIcon>

            <Modal>
                <DivModalAddToPlaylist>
                    <BtnModalAddToPlaylist trackId={trackId} />
                    <BtnSelectPlaylist>Add to liked songs</BtnSelectPlaylist>
                    <BtnSelectPlaylist>View artist</BtnSelectPlaylist>
                    <BtnSelectPlaylist>Go to song album</BtnSelectPlaylist>
                    <BtnSelectPlaylist>Remove from this playlist</BtnSelectPlaylist>

                    <DivModalClose>
                        <IoIosCloseCircleOutline onClick={close} />
                    </DivModalClose>
                </DivModalAddToPlaylist>
            </Modal>
        </>
    )
}

export default BtnModalTrackOptions