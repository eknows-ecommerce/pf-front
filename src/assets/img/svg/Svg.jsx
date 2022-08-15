import React from 'react'

export function Eliminar() {
  return (
    <svg
      className="w-5 h-5 text-rosadito-500 "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -2 20 20"
      stroke="currentColor"
      fill="none"
    >
      <path
        fillRule="evenodd"
        strokeWidth="2"
        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
      />
    </svg>
  )
}

export function Confirmar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

export function Disable() {}

export function Editar() {}
