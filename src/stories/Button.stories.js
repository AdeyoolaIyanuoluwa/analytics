import React from 'react';
import Button from '../components/Button/button';

export default {
    title: 'Components/Button',
    component: Button
}


const TemplateButton = (args) =>{
    return(
        <div>
            <Button {...args}>Sign up</Button>
        </div>
    )
};

export const mainbutton = TemplateButton.bind({});
            mainbutton.args = {
                children: 'Sign up',
                mainbutton: true
            }

export const subbutton = TemplateButton.bind({})
            subbutton.args = {
                children: 'Try for free',
                mainbutton: false
            }