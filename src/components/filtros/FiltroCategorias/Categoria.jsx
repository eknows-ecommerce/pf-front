export default function Categoria({ id, nombre, handleClick, selected }) {
  return (
    <div className="flex items-center">
      <input
        id={`cat${id}`}
        type="checkbox"
        name={nombre}
        // onClick={handleClick}
        className="w-5 h-5 border-gray-300 rounded cursor-pointer"
        onChange={handleClick}
        checked={selected}
      />
      <label
        htmlFor={`cat${id}`}
        className="ml-3 text-sm font-medium  text-blue-600 cursor-pointer"
      >
        {nombre}
      </label>
    </div>
  )
}
