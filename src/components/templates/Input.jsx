import React from 'react'

function Input({
  placeholder = '',
  type = 'text',
  value = '0',
  id,
  onChange,
  primary,
}) {
  const valueInput = type === 'number' ? 0 : value
  const onChangeInput = onChange || (() => {})

  const foco = primary ? `focus:ring-rosadito-500` : `focus:ring-gray-600`
  const css = primary ? `text-rosadito-500` : ` text-gray-600`

  if (type === 'number') {
    return (
      <input
        type={type}
        id={id}
        defaultValue={valueInput}
        placeholder={placeholder}
        onChange={onChange}
        className={`${css} ${foco} w-full p-3 text-sm border  rounded-lg focus:outline-none focus:ring  focus:ring-opacity-80`}
      />
    )
  }

  if (type === 'text') {
    return (
      <input
        onChange={onChangeInput}
        className={`${css} ${foco} w-full p-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-opacity-80`}
        placeholder={placeholder}
        type={type}
        id={id}
      />
    )
  }
}

export default Input
