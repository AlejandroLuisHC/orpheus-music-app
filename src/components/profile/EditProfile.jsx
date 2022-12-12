import React from 'react'
import { useState } from 'react'
import { IoMdCheckmarkCircle, IoMdCreate } from 'react-icons/io';
import { useSelector } from 'react-redux';

import { DivEditUserData, DivUserData, InputEditStyle, DivEditUserContainer, PTextEdit } from '../style/../style/profileStyle';

const EditProfile = () => {
    const [username, setUsername] = useState(false);
    const [name, setName] = useState(false);
    const [lastname, setLastname] = useState(false);
    const [Location, setLocation] = useState(false);

    const userData = useSelector(state => state.userData.user.userData);
  return (
    <>
        <DivEditUserContainer>
            {!username
                ?
                    <DivUserData>
                        <PTextEdit>{userData.username}</PTextEdit>
                        <IoMdCreate onClick={()=> setUsername(prev=> prev = true)}/>
                    </DivUserData>
                :   

                    <DivEditUserData>
                        <InputEditStyle />
                        {/* SubmitButton ⬇️*/}
                        <IoMdCheckmarkCircle style={{color:'black'}}/>  
                    </DivEditUserData>}
            
        </DivEditUserContainer>
        <DivEditUserContainer>
            {!name
                ?
                    <DivUserData>
                        <PTextEdit>{userData.firstName}</PTextEdit>
                        <IoMdCreate onClick={()=> setName(prev=> prev = true)}/>
                    </DivUserData>
                :   

                    <DivEditUserData>
                        <InputEditStyle />
                        {/* SubmitButton ⬇️*/}
                        <IoMdCheckmarkCircle style={{color:'black'}}/>  
                    </DivEditUserData>}
            
        </DivEditUserContainer>
        <DivEditUserContainer>
            {!lastname
                ?
                    <DivUserData>
                        <PTextEdit>{userData.lastName}</PTextEdit>
                        <IoMdCreate onClick={()=> setLastname(prev=> prev = true)}/>
                    </DivUserData>
                :   

                    <DivEditUserData>
                        <InputEditStyle />
                        {/* SubmitButton ⬇️*/}
                        <IoMdCheckmarkCircle style={{color:'black'}}/>  
                    </DivEditUserData>}
            
        </DivEditUserContainer>
        <DivEditUserContainer>
            {!Location
                ?
                    <DivUserData>
                        <PTextEdit>{userData.country}</PTextEdit>
                        <IoMdCreate onClick={()=> setLocation(prev=> prev = true)}/>
                    </DivUserData>
                :   

                    <DivEditUserData>
                        <InputEditStyle />
                        {/* SubmitButton ⬇️*/}
                        <IoMdCheckmarkCircle style={{color:'black'}}/>  
                    </DivEditUserData>}
            
        </DivEditUserContainer>
        
   </>
  )
}

export default EditProfile