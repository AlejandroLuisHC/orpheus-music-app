import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../api';
import fetchUpdateUser from '../../api/fetchUpdateUser';
import { UPDATE } from '../../redux/features/user_data/userSlice';
import { FormStyle } from '../style/generalStyle'
import ChangePasswordStep1 from './ChangePasswordStep1';
import ChangePasswordStep2 from './ChangePasswordStep2';

const ChangePassword = ({register, watch, formState}) => {

    
    const [formSteps, setFormSteps] = useState({ step: '1', firstStep: true });
    const userActualData = useSelector(state => state.userData.user.userData);


    const passwordValidation = inputValue => {
        if(userActualData.password === inputValue){
            return true;
        }else{return false;}
    }
    return (
    <>    
        
            <fieldset>
                {formSteps.firstStep && 
                    <ChangePasswordStep1
                        register = {register}
                        watch = {watch}
                        passwordValidation = {passwordValidation}
                        errors = {formState}
                        setFormSteps = {setFormSteps}
                    />
                }
                {formSteps.secondStep && 
                    <ChangePasswordStep2
                        register = {register}
                        watch = {watch}
                        errors = {formState}
                        setFormSteps = {setFormSteps}
                    />
                }
            </fieldset>
        
    </>
    )
}

export default ChangePassword