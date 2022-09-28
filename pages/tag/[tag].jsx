import { useRouter } from 'next/router'
import { useStationsContext } from '../../src/state.jsx'
import { convertPathToTag } from '../../src/helpers.js'
import { StationItem } from '../../components'

export default function Tag() {
  const { query } = useRouter()
  const { tag: path } = query
  const [, { getStationsWithTag }] = useStationsContext()
  const tag = convertPathToTag(path)

  return <div>{getStationsWithTag(tag).map(StationItem)}</div>
}