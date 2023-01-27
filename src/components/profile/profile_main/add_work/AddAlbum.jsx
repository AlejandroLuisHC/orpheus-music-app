import React from 'react'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { ButtonSecondaryStyle } from '../../../style/generalStyle'
import { DivModalAlbum, DivModalClose, DivModalWork } from '../../../style/profileStyle'

const AddAlbum = () => {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true
    })
  return (
    <>
        <ButtonSecondaryStyle onClick={open}>Add Album</ButtonSecondaryStyle>
        <Modal> 
            <DivModalAlbum>
                <h1>ALBUM</h1>
                <input type='text'/>
                <DivModalClose>
                    <IoIosCloseCircleOutline onClick={close}/>
                </DivModalClose>
            </DivModalAlbum>
        </Modal>
    </> 
  )
}

export default AddAlbum