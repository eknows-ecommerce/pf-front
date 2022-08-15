export default function SearchBar() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-md px-4 mx-auto mt-12"
    >
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-5 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
      </div>
    </form>
  )
}
