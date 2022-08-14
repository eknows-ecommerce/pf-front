export default function ReviewCard({ title, text, author, rate }) {
  function Stars() {
    let out = []; let star;
    for (let i = 0; i < 5; i++) {
      i < rate ? star = "hover:animate-spin text-yellow-500" : star = "text-gray-300"
      out.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"w-6 h-6 " + star}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }

    return (out)
  }

  return (
    <blockquote className="flex flex-col justify-between h-full p-8 bg-slate-100 rounded-3xl shadow-xl
    hover:scale-x-[1.01] hover:scale-y-[1.01]">
      <div>
        <div className="flex space-x-0.5">
          <Stars />
        </div>
        <div className="mt-4">
          <h5 className="text-xl text-center font-bold text-pink-700 sm:text-2xl">
            {title}
          </h5>
          <p className="mt-4 text-gray-800 text-justify">
            {
              text.length > 190
                ? text.slice(0, text.indexOf(' ', 190)) + ' ...'
                : text
            }
          </p>
        </div>
      </div>
      <footer className="mt-8 text-gray-700 text-right">
        {author ? '- ' + author : "- Anonimo"}
      </footer>
    </blockquote>
  )
}
