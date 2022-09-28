import { createContext, useContext, useState, useEffect } from 'react'
import { getItem, getItemsWithTag, sortBy } from './helpers.js'

export const StationsContext = createContext([])
export const useStationsContext = () => useContext(StationsContext)

function StationsContextProvider (props) {
  const [items, setItems] = useState([])
  const [list, setList] = useState([])
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch('https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json')
      .then(res => res.json())
      .then(({ data }) => {
        setItems(data)
        setList(data)
        setLoading(false)
      })
  }, [])

  const sortByPopularity = () => setList(sortBy(items, 'popularity'))
  const sortByReliability = () => setList(sortBy(items, 'reliability'))
  const getStation = (id) => getItem(items, id) || { name: '', streamUrl: '' }
  const getStationsWithTag = (tag) => getItemsWithTag(items, tag)

  return <StationsContext.Provider
    value={[{ list, isLoading }, { sortByPopularity, sortByReliability, getStation, getStationsWithTag }]}
    {...props}
  />
}

export default StationsContextProvider
