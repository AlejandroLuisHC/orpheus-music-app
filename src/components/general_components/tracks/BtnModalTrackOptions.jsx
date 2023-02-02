import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline, IoMdMore } from 'react-icons/io'
import { BtnSelectOption, DivModalOptions, DivOptionsIcon } from '../../style/generalStyle'
import { DivModalClose, DivModalCloseTracks } from '../../style/profileStyle'
import BtnModalAddToPlaylist from './BtnModalAddToPlaylist'

const BtnModalTrackOptions = ({ trackId }) => {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })

    return (
        <>
            <DivOptionsIcon onClick={open}><IoMdMore size={20} /></DivOptionsIcon>

            <Modal>
                <DivModalCloseTracks>
                    <IoIosCloseCircleOutline onClick={close} />
                </DivModalCloseTracks>
                <DivModalOptions>
                    <BtnModalAddToPlaylist trackId={trackId} />
                    {/* <BtnAddToFavTracks>Add to liked songs</BtnAddToFavTracks> */}
                    <BtnSelectOption>View artist</BtnSelectOption>
                    <BtnSelectOption>Go to song album</BtnSelectOption>
                    {/* {isOwner && <BtnSelectOption>Remove from this playlist</BtnSelectOption>} */}

                </DivModalOptions>
            </Modal>
        </>
    )
}

export default BtnModalTrackOptions