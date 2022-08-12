
export default function Tag({ id, nombre, handleClick }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        name={nombre}
        onClick={() => handleClick(nombre)}
        className="w-5 h-5 border-gray-300 rounded"
      />
      <label htmlFor="toy" className="ml-3 text-sm font-medium">
        {nombre}
      </label>
    </div>
  )
}
