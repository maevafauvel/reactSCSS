import styled from 'styled-components';

const Card = styled.div`
    width: 35vw;
    border-style: outset;
    border-radius: 5px;
    box-shadow: 0 0 25px grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    background-color: white;
`;

const Img = styled.img`
    display: block;
    margin: 0 auto;
    width: 100%;
    content: url("src/assets/imgHxH.jpg");
`;

const Title = styled.h1`
    display: flex;
    justify-content: star;
    align-item: center;
    padding: 0 1rem;
    font-size: 2rem;
`;

const Ul = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding-inline-start: 0;
`;

const Li = styled.li`
    list-style: none;
    padding: 0.2rem 1rem;
    border-radius: 20px;
    background-color: rgb(24, 23, 23);
    color: white;
`;

const Synopsis = styled.p`
    text-align: justify;
    padding: 0 1rem 1rem;
`;

const Title2 = styled.h2`
    display: flex;
    justify-content: start;
    align-item: center;
    padding: 0 1rem;
    font-size: 1.2rem;
`;

const Opinion = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
    padding: 0 1rem 1.2rem;
`;

const StarFill = styled.img`
    content: url("src/assets/star-fill.svg");
    width: 24px;
`;

const StarHalf = styled.img`
    content: url("src/assets/star-half.svg");
    width: 24px;
`;

const Note = styled.p`
    padding: 0 0.5rem;
`;

function StyledComponent() {
    return (
    <Card>
      <Img></Img>
      <Title>
          HunterxHunter (2011)
      </Title>
      <Opinion>
      <StarFill></StarFill>
      <StarFill></StarFill>
      <StarFill></StarFill>
      <StarFill></StarFill>
      <StarHalf></StarHalf>
      <Note>
          4,5/5 (13k avis)
      </Note>
      </Opinion>
      <Ul>
          <Li>Shônen</Li>
          <Li>Adventure</Li>
          <Li>Fantastique</Li>
          <Li>Action</Li>
          <Li>Drame</Li>
      </Ul>
      <Title2>
          Synopsis :
      </Title2>
      <Synopsis>
      Gon est un jeune garçon dont le rêve est de devenir Hunter comme son père. Ce dernier a disparu lorsque Gon était encore tout petit. Devenir Hunter n'est pas aussi simple qu'on le croit. C'est un parcours semé d'embûches et c'est surtout le début de grandes aventures pour Gon !
      </Synopsis>
    </Card>
    );
  }
  
  export default StyledComponent;