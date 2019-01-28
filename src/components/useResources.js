
import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {
  //const fetchResource = async resource => {
  //  const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
  //  setResources(response.data)
  //}

  // 第二引数の値が変わった場合にupdateとみなされる
  //useEffect(() => {
  //  fetchResource(resource)
  //}, [resource])


  const [resources, setResources] = useState([])

  useEffect(() => {
  // これでもいい
    ( async resource =>{
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      setResources(response.data)
    })(resource)
  }, [resource])

  return resources
}

export default useResources
