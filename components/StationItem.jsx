import Link from 'next/link'
import Tags from './Tags.jsx'
import css from './styles/station.module.sass'

export default function StationItem({ id, name, description, imgUrl, reliability, popularity, tags }) {
  return <div className={css.container} key={id}>
    <div className={css.image}><img src={imgUrl} /></div>
    <div className={css.content}>
      <div className={css.header}>
        <Link href={{
          pathname: '/station/[station]',
          query: { station: id },
        }}>
          <a className={css.cta}>Listen to the {name}</a>
        </Link>
        <div className={css.score}>
          <div>popularity: {popularity}</div>
          <div>reliability: {reliability}</div>
        </div>
      </div>
      <div>{description}</div>
      <Tags items={tags} />
    </div>
  </div>
}