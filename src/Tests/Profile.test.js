import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Profile from './ProfileForm.js';
import { ExpansionPanelActions } from '@material-ui/core';


describe("Profile", () => {
    test ("Testing Profile", () => {
        const { getByPlaceholderText, getByText} = render(<ProfileForm/>);
    
        const input = getByPlaceholderText("Nome e Sobrenome");
    
        fireEvent.change(input, {target:{value: "Test name" } });
    
        expect(input).toHaveValue("Test name")
        
        const button = getByText("Salvar");

        fireEvent.click(button);

        

    });
})