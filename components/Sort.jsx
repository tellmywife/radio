import { useStationsContext } from '../src/state.jsx'
import css from './styles/sort.module.sass'

export default function Sort() {
  const [, { sortByPopularity, sortByReliability }] = useStationsContext()
  return (<div className={css.container}>
      Sort by:
      <div onClick={sortByPopularity}>popularity</div>
      <div onClick={sortByReliability}>reliability</div>
    </div>
  )
}