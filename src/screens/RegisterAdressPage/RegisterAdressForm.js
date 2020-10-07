import React from 'react'
import { Form } from './styled-register-adress'
import { Button } from '../../styles/atoms'
import { Label } from '../../styles/molecules'
import { goToHomepage } from '../../navigation/Coordinator'
import {useHistory} from 'react-router-dom'

const RegisterAdressForm = () => {
    const history = useHistory()
    return (
        <Form>
        <Label htmlFor="email-login">
          <span>Logradouro*</span>
          <input
            id="logradouro"
            type="text"
            placeholder="Rua / Av."
            required
            autoFocus
          />
        </Label>

        <Label htmlFor="password-login">
          <span>Número*</span>
          <input
            id="number-home"
            type="number"
            placeholder="Número"
            required
          />
        </Label>
        <Label htmlFor="password-login">
          <span>Complemento</span>
          <input
            id="complemento-home"
            type="text"
            placeholder="Apto. / Bloco"
            required
          />
        </Label>
        <Label htmlFor="password-login">
          <span>Bairro*</span>
          <input
            id="bairro"
            type="text"
            placeholder="Bairro"
            required
          />
        </Label>
        <Label htmlFor="password-login">
          <span>Cidade*</span>
          <input
            id="cidade"
            type="text"
            placeholder="Cidade"
            required
          />
        </Label>
        <Label htmlFor="password-login">
          <span>Estado*</span>
          <input
            id="estado"
            type="text"
            placeholder="Estado"
            required
          />
        </Label>

        <Button type="submit" onClick={() => goToHomepage(history)}>Salvar</Button>
      </Form>
    )
}

export default RegisterAdressForm
