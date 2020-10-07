import axios from 'axios'
import { goToHomepage } from '../navigation/Coordinator'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4"

export const login = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${baseUrl}/login`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      setIsLoading(false)
      goToHomepage(history)
      
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Falha no Login, tente novamente")
    })
}