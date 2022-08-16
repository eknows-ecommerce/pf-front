import image from './tag.png'

export default function Item(props) {
  return (
    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
      <td className="pl-20">
        <p className="font-medium">TG-{props.id}</p>
      </td>
      <td
        onClick={() => props.editarTag(props)}
        className="pl-4 cursor-pointer"
      >
        <div className="flex items-center">
          <div className="w-10 h-10">
            <img className="w-full h-full" src={image} alt="book" />
          </div>
          <div className="pl-4">
            <p className="font-medium">{props.nombre}</p>
          </div>
        </div>
      </td>

      <td>
        <button onClick={() => props.eliminarTag(props)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 hover:text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </td>
    </tr>
  )
}
