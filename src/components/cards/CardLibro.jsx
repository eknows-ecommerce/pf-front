// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useFavorite from '../../hooks/useToggle'

function CardLibro({ portada, titulo, descuento = 15, precio }) {
  const { toggle, handleToggle } = useFavorite(false)

  return (
    <CardContainer>
      <Fav toggle={toggle} onClick={handleToggle}>
        F
      </Fav>
      <BodyContainer>
        <ImgContainer>
          <ImgStyled src={portada} alt={titulo} />
          <figcaption>{titulo}</figcaption>
        </ImgContainer>
        <DetailsContainer>
          <p>LLevatelo con {descuento}% descuento</p>
          <h1>${precio}</h1>
        </DetailsContainer>
      </BodyContainer>
      <FooterContainer>
        {/* <Link to={'detalle'}>Ver detalle</Link> */}
        {/* <Link to={'Car'}>Add Car</Link> */}
      </FooterContainer>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: #fff;
`
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5px 15px;
`
const ImgContainer = styled.figure`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  figcaption {
    width: 100%;
    font-weight: bold;
    font-size: 1.3rem;
  }
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  p,
  h1 {
    margin: 5px;
  }
`

const Fav = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 100%;
  background-color: ${(props) => (props.toggle ? '#fff' : '#D53544')};
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
    cursor: pointer;
  }
`
const ImgStyled = styled.img`
  padding: 0;
  height: 450px;
  width: 100%;
`
export default CardLibro
