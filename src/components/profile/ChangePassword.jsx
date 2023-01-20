import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ChangePasswordStep1 from './ChangePasswordStep1';
import ChangePasswordStep2 from './ChangePasswordStep2';

const ChangePassword = ({register, watch, formState}) => {

    
    const [formSteps, setFormSteps] = useState({ step: '1', firstStep: true });
    const userActualData = useSelector(state => state.userData.user);


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