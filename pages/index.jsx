import { useStationsContext } from '../src/state.jsx'
import { StationItem, Sort } from '../components'

export default function Home() {
  const [{ list }] = useStationsContext()

  return (<>
    <Sort />
    {list.map(StationItem)}
  </>)
}
