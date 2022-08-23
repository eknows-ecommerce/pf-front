export default function Tag({ id, nombre, handleClick, selected }) {
  return (
    <div className="flex items-center">
      <input
        id={`tag${id}`}
        type="checkbox"
        name={nombre}
        className="w-5 h-5 border-gray-300 rounded cursor-pointer"
        onChange={handleClick}
        checked={selected}
      />
      <label
        htmlFor={`tag${id}`}
        className="ml-3 text-sm font-medium  text-blue-600 cursor-pointer"
      >
        {nombre}
      </label>
    </div>
  )
}
