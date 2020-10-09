import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A"

const useRequestData = (initialData, endpoint, ) => {
  const [data, setData] = useState(initialData)


  useEffect(() => {
    axios.get(`${baseUrl}${endpoint}`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data.restaurant)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [endpoint])

  return (data)
}

export default useRequestData

