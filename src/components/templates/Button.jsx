function Button({ children, primary, secondary }) {
  const css = primary
    ? `
   bg-violet-500 inline-block  px-8 py-3 text-sm font-medium text-white transition rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring
  `
    : `
  inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:shadow-xl active:text-indigo-500 focus:outline-none focus:rin
  `

  return <button className={`${css}`}>{children}</button>
}

export default Button
