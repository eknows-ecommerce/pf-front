/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from '../../features/actions/tags'

import Tag from './Tag'

function Tags() {
  // eslint-disable-next-line no-unused-vars
  const [tagSelect, setTagSelect] = useState([])
  const { tags } = useSelector(({ tagsStore }) => tagsStore)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
  }, [])

  function handleClick(e) {
    setTagSelect([e])
  }

  return (
    <div className="px-5 py-6 space-y-2">
      {tags?.map((tag) => (
        <Tag
          key={tag.id}
          handleClick={handleClick}
          nombre={tag.nombre}
          id={tag.id}
        />
      ))}
    </div>
  )
}

export default Tags
