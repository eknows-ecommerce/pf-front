import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useFavorite from '../../hooks/useToggle'
import Button from '../templates/Button'

function CardLibro({ id, portada, titulo, descuento = 15, precio }) {
  const { toggle, handleToggle } = useFavorite(false)

  return (
    <div>
      <a
        class="relative block flex-col justify-between mt-2"
        href={`/detalle/${id}`}
      >
        <button
          class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
          type="button"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>

        <img
          class="object-contain w-full h-56 lg:h-72"
          src={portada}
          alt="Build Your Own Drone"
          loading="lazy"
        />

        <div class="p-6">
          {/* <strong class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
          New
        </strong> */}

          <p class=" font-bold  font-poiret-one">{titulo}</p>

          <p class="mt-2 text-sm text-gray-700">${precio}</p>
        </div>
      </a>
      <Link to="#carrito">
        <Button primary>Add to Cart</Button>
      </Link>
    </div>
  )
}

export default CardLibro
