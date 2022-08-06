import { Link } from 'react-router-dom'

function Stories() {
  return (
    <div>
      <img src="K-stories" alt="k-stories"></img>
      <Link to="/kstories" className="p-1">
        <h2 className="text-3xl font-semibold font-poiret-one">K-stories</h2>
        <h2 className="text-2xl font-poiret-one">
          Para tí, en todas las formas
        </h2>
      </Link>
    </div>
  )
}

export default Stories
