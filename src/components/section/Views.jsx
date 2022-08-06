import { Link } from 'react-router-dom'

function Views() {
  return (
    <div>
      <img src="K-views" alt="k-views"></img>
      <Link to="/kviews" className="p-1">
        <h2 className="text-3xl font-semibold font-poiret-one">K-views</h2>
        <h2 className="text-2xl font-poiret-one">
          Las historias mas atrapantes, a donde quieras
        </h2>
      </Link>
    </div>
  )
}

export default Views
