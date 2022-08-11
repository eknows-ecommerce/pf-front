import { useSelector } from 'react-redux'

export default function Baneados() {
  const { usuarios } = useSelector(({ usuariosSlice }) => usuariosSlice)

  return <div>Baneados</div>
}
