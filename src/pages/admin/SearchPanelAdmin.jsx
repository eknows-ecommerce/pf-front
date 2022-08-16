export default function SearchPanelAdmin({
  search,
  handleSearch,
  placeholder,
}) {
  return (
    <div className="m-2 lg:max-w-[548px] w-full mx-auto border rounded-md">
      <div>
        <input
          className=" text-sm leading-none text-gray-600 bg-white  rounded  w-full px-10 py-5 outline-none"
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  )
}
