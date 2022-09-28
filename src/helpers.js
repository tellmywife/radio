export const getItem = (items, stationId) => {
  const [station] = items.filter(({ id }) => id === stationId)
  return station
}

export const getItemsWithTag = (items, tag) => items.filter(station => station.tags.includes(tag))

export const sortBy = (items, field) => {
  return [...items].sort((a, b) => {
    return b[field] - a[field]
  })
}

export const convertTagToPath = tag => tag?.split(' ').join('-')
export const convertPathToTag = path => path?.split('-').join(' ')