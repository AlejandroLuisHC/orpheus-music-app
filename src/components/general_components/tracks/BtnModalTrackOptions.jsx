import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline, IoMdMore } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { BtnSelectOption, DivModalOptions, DivOptionsIcon } from '../../style/generalStyle'
import { DivModalClose } from '../../style/profileStyle'
import BtnAddToFavTracks from './BtnAddToFavTracks'
import BtnModalAddToPlaylist from './BtnModalAddToPlaylist'

const BtnModalTrackOptions = ({ trackId }) => {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })

   

    return (
        <>
            <DivOptionsIcon onClick={open}><IoMdMore size={20} /></DivOptionsIcon>

            <Modal>
                <DivModalOptions>
                    <BtnModalAddToPlaylist trackId={trackId} />
                    {/* <BtnAddToFavTracks>Add to liked songs</BtnAddToFavTracks> */}
                    <BtnSelectOption>View artist</BtnSelectOption>
                    <BtnSelectOption>Go to song album</BtnSelectOption>
                    {/* {isOwner && <BtnSelectOption>Remove from this playlist</BtnSelectOption>} */}

                    <DivModalClose>
                        <IoIosCloseCircleOutline onClick={close} />
                    </DivModalClose>
                </DivModalOptions>
            </Modal>
        </>
    )
}

export default BtnModalTrackOptions