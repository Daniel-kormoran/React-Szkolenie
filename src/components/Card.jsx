import styled from "styled-components"


const Box = styled.div`
    /* background-color : ${props => props.variant}; */
    background-color : ${({variant}) => variant};
    padding : 10px;

    ${(props) => props.withBorder && `
       border: 2px solid black;
    `}
`;

const Title = styled.h2`
    font-size: 1.5em;
  text-align: center;
  color:${props => props.color} ;
`;

const Card = () => {
  return (
    <div>
    <Box withBorder variant="gold">Mój tytuł</Box>
      <Title color="blue">Treść</Title>
      <button>Kup teraz</button>
    </div>
  )
}

export default Card
