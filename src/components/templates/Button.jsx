function Button({
  children,
  primary,
  secondary,
  round,
  background,
  textColor,
}) {
  const css = primary
    ? `bg-rosadito-500 text-white`
    : secondary
    ? `bg-transparent text-rosadito-500 border border-rose-600`
    : `bg-rosadito-500 text-white`

  const radius = round ? `rounded-full` : ``
  return (
    <button
      className={`${css} ${radius} flex items-center justify-center content-center w-full px-12 py-3 text-sm font-medium shadow text-w-600 sm:w-auto hover:scale-110 hover:shadow-md hover:shadow-current focus:outline-none focus:ring mr-2`}
    >
      {children}
    </button>
  )
}

export default Button
