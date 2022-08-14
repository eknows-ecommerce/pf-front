function SearchBar() {
  return (
    <div className="lg:max-w-[548px] w-full mx-auto border rounded-md">
      <div>
        <input
          className=" text-sm leading-none text-gray-600 bg-white  rounded  w-full px-10 py-4 outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default SearchBar
