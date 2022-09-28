import Link from 'next/link'
import { convertTagToPath } from '../src/helpers.js'
import css from './styles/tags.module.sass'

function TagItem(tag) {
  return (
    <Link key={tag} href={{
      pathname: '/tag/[tag]',
      query: { tag: convertTagToPath(tag) },
    }}>
      <a className={css.tag}>{tag}</a>
    </Link>
  )
}

export default function Tags({ items }) {
  return <div className={css.container}>tags: {items?.map(TagItem)}</div>
}