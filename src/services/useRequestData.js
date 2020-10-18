import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A"

const useRequestData = (initialData, endpoint, setIsLoading ) => {
  const [data, setData] = useState(initialData)


  useEffect(() => {
    setIsLoading(true)
    axios.get(`${baseUrl}${endpoint}`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setIsLoading(false)
        setData(response.data.restaurant)
      })
      .catch((error) => {
        setIsLoading(false)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [endpoint])

  return (data)
}

export default useRequestData

