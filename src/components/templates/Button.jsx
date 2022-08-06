function Button({ children, primary, secondary }) {
  const css = primary
    ? `text-white bg-rose-600 active:text-rose-700 hover:text-white rounded`
    : secondary
    ? `text-rose-600 bg-white active:text-rose-700 border border-current hover:text-rose-600 rounded-full`
    : `text-white bg-rose-600 active:text-rose-700 hover:text-white`
  return (
    <button
      className={`${css} w-full px-12 py-3 text-sm font-medium shadow text-w-600 sm:w-auto hover:scale-110 hover:shadow-xl  focus:outline-none focus:ring mr-2`}
    >
      {children}
    </button>
  )
}

export default Button
