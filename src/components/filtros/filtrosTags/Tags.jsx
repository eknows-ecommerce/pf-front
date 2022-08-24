/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from 'features/actions/tags'
import { setTags, setPaginaActual } from 'features/reducers/librosSlice'

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
      setTags([])
      setTagSelect({})
      setReset(false)
    }
  }, [reset])

  const handleClick = (e) => {
    setTagSelect({
      ...tagSelect,
      [e.target.id]: e.target.checked,
    })
  }

  useEffect(() => {
    const whereTags = []
    for (const key in tagSelect) {
      if (tagSelect[key]) {
        whereTags.push(Number(key.slice(3)))
      }
    }
    dispatch(setTags(whereTags))
    dispatch(setPaginaActual(1))
  }, [tagSelect])

  return (
    <div className="px-5 py-6 space-y-2 cursor-default">
      {tags?.map(({ id, nombre }) => (
        <Tag
          key={crypto.randomUUID()}
          handleClick={handleClick}
          nombre={nombre}
          id={id}
          selected={tagSelect[`tag${id}`]}
        />
      ))}
    </div>
  )
}

export default Tags
