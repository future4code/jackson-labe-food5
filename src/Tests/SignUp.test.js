import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import SignUpForm from '../screens/SignUpPage/SignUpForm';
import { ExpansionPanelActions } from '@material-ui/core';

describe("Sing Up", () => {
    test ("Testing Sign Up", () => {
        const { getByPlaceholderText, getByText} = render(<SingUpForm/>);
    
        const input = getByPlaceholderText("Nome e Sobrenome");
    
        fireEvent.change(input, {target:{value: "Test Sign Up" } });
    
        expect(input).toHaveValue("Test Sign Up")
        
        const button = getByText("Criar");

        fireEvent.click(button);

        const exchange = getByText("Test Sing Up");
        

    });
})
