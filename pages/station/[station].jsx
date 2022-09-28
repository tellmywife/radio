import { useRouter } from 'next/router'
import { useStationsContext } from '../../src/state.jsx'
import { StationItem } from '../../components'

export default function Station() {
  const { query } = useRouter()
  const { station: id } = query
  const [, { getStation }] = useStationsContext()
  const station = getStation(id)
  const { streamUrl } = station

  return <div>
    <StationItem {...station} />
    <audio controls src={streamUrl} />
  </div>
}