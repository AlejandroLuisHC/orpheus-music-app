import React from 'react'
import { useModal } from 'react-hooks-use-modal'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { ButtonPrimaryStyle } from '../../../style/generalStyle'
import { ButtonProfileStyle, DivModalClose, DivModalOptions, DivModalWork } from '../../../style/profileStyle'
import AddAlbum from './AddAlbum'
import AddTrack from './AddTrack'

const AddWork = () => {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true
})
  return (
    <>
    <ButtonProfileStyle onClick={open} >Add Work</ButtonProfileStyle>

    <Modal> 
      <DivModalWork>
        <h1>Add your notes to Orpheus!</h1>
        <DivModalOptions>
          <AddAlbum />
          <AddTrack />
        </DivModalOptions>
        <DivModalClose>
          <IoIosCloseCircleOutline onClick={close}/>
        </DivModalClose>
      </DivModalWork>
   </Modal>                
    </>
    
    )
}

export default AddWork