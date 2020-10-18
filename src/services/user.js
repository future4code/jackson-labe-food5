import axios from 'axios'
import { goToHomepage, goToRegisterAdressPage } from '../navigation/Coordinator'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A"

export const login = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${baseUrl}/login`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      setIsLoading(false)
      goToHomepage(history)
      
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Falha no Login, tente novamente")
    })
}

export const signUp = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${baseUrl}/signup`, body)
    .then((response)=>{
      localStorage.setItem('token', response.data.token)
      setIsLoading(false)
      goToRegisterAdressPage(history)
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Falha no Cadastro, tente novamente")
    })
}