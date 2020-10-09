import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Login from './LoginForm.js';
import { ExpansionPanelActions } from '@material-ui/core';


describe("Login", () => {
    test ("Testing Login", () => {
        const { getByPlaceholderText, getByText} = render(<LoginForm/>);
    
        const input = getByPlaceholderText("email@email.com");
    
        fireEvent.change(input, {target:{value: "Test email" } });
    
        expect(input).toHaveValue("Test email")
        
        const button = getByText("Entrar");

        fireEvent.click(button);

        

    });
})