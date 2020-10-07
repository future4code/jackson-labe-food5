import React from 'react';
import styled from 'styled-components'
import { Button } from '../../styles/atoms';
import { Label } from '../../styles/molecules'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const ProfileForm = () => {
  return (
    <Form>
        <Label htmlFor="name">
          <span>Nome*</span>
          <input
            id="name"
            type="text"
            placeholder="Nome e Sobrenome"
            required
          />
        </Label>

        <Label htmlFor="E-mail">
          <span>E-mail*</span>
          <input
            id="e-mail"
            type="email"
            placeholder="email@email.com"
            required
          />
        </Label>
        
        <Label htmlFor="CPF">
          <span>CPF*</span>
          <input
            id="CPF"
            type="text"
            placeholder="000.000.000-00"
            minLength="12"
            maxlength="15"
            required
          />
        </Label>

        <Button type="submit">Salvar</Button>
      </Form>
  );
};

export default ProfileForm;