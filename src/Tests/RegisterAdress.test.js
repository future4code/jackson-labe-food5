import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import RegisterAdress from './RegisterAdressForm.js';
import { ExpansionPanelActions } from '@material-ui/core';


describe("Register Adress",()=>{
    test("Testing Register Adress",()=>{
        const { getByPlaceholderText, getByText} = render(<RegisterAdressForm/>);

        const input = getByPlaceholderText("Rua / Av.");

        fireEvent.change(input, {target:{value: "Test street"}});

        expect(input).toHaveValue("Test street")
        
        const button = getByText("Salvar");
        
        fireEvent.click(button);

    });
})
