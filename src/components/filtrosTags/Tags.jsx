/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from '../../features/actions/tags'
import { setTags } from '../../features/reducers/librosSlice'

import Tag from './Tag'

function Tags({ reset, setReset }) {
  // eslint-disable-next-line no-unused-vars
  const [tagSelect, setTagSelect] = useState([])
  const { tags } = useSelector(({ tagsStore }) => tagsStore)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAll())
  }, [])

  useEffect(() => {
    if (reset) {
      setTags('tags')
      setTagSelect({})
      setReset(false)
    }
  }, [reset])
  function handleClick(e) {
    setTagSelect({
      ...tagSelect,
      [e.target.id]: e.target.checked,
    })
  }

  useEffect(() => {
    let query = 'tags='
    console.log()
    for (const key in tagSelect) {
      if (tagSelect[key]) {
        query += key + ','
      }
    }
    query = query.slice(0, -1)
    dispatch(setTags(query))
  }, [tagSelect])

  return (
    <div className="px-5 py-6 space-y-2">
      {tags?.map((tag) => (
        <Tag
          key={crypto.randomUUID()}
          handleClick={handleClick}
          nombre={tag.nombre}
          id={tag.id}
          selected={tagSelect[tag.id]}
        />
      ))}
    </div>
  )
}

export default Tags
