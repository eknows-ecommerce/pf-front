export default function Tag({ id, nombre, handleClick, selected }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        name={nombre}
        // onClick={handleClick}
        className="w-5 h-5 border-gray-300 rounded"
        onChange={handleClick}
        checked={selected}
      />
      <label htmlFor="toy" className="ml-3 text-sm font-medium">
        {nombre}
      </label>
    </div>
  )
}
