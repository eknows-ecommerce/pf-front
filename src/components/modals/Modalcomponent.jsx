import styled from "styled-components"

function ModalComponent (props) {
    const {
        children,
        modal,
        closeModal,
        titulo = "Alert",
        mostrarEncabezado = true,
        mostrarOverlay = true,
        closeOverlay = true,
        posicionModal,
        padding,
        margin,
        ancho,
        alto,
    } = props

    const handleContainerClick = (e) => {
        e.stopPropagation()
    }

    return (
        <>
            {modal &&
                <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal} onClick={closeOverlay ? closeModal : null}>
                    <Container margin={margin} >
                        <BotonCerrar onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </BotonCerrar>

                        <ContenedorModal padding={padding} ancho={ancho} alto={alto} onClick={handleContainerClick} >
                            {mostrarEncabezado &&
                                <ContenedorTitulo>
                                    <h2>{titulo}</h2>
                                </ContenedorTitulo>
                            }
                            {children}
                        </ContenedorModal>
                    </Container>
                </Overlay>
            }
        </>
    )
}

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.mostrarOverlay ? " rgba(0,0,0,0.5)" : "rgba(0,0,0,0)"} ;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: ${props =>props.posicionModal ?? "center"};
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${ props => `${props.margin}` ?? "0"};
`

const ContenedorModal = styled.div`
    position: relative;
    min-width: 320px;
    width: ${props => props.ancho ?? "auto"};
    min-height: ${props => props.alto ?? "auto"};
    max-height: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 7px 29px 0px rgb(100, 100, 111, 0.2);
    padding: ${props => props.padding ?? "20px"};
    overflow-y: auto;
    overflow-x: hidden;
`

const ContenedorTitulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #BBB;
    
    h2{
        font-weight: 500;
        font-size: 20px;
        color: #E11D48;
        
    }
`

const BotonCerrar = styled.button`
    position: absolute;
    top: -35px;
    width: 25px;
    height: 25px;
    background-color: tomato;
    color: #FFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease all;
    border: none;

    svg{
        width: 20px;
        height: 20px;
        transition: 0.6s ease all;
    }

    &:hover{
        transform: scale(1.2);
    }
    `
/*
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// // Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 3s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;
*/
export default ModalComponent