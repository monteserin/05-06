import { useEffect, useState } from "react";
import { getCoffeById, getCoffes } from "./services/api";
import { Box, Container, Grid, Img } from "./styles";
import { Row } from "antd";

function App() {
  const [coffes, setCoffes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [id, setId] = useState(0);
  const [selectedCoffe, setSelectedCoffe] = useState({});
  useEffect(() => {
    getCoffes().then((data) => {
      console.log("111", data);
      setCoffes(data);
    });
  }, []);

  useEffect(() => {
    if (id) {
      getOneCoffe();
    }
  }, [id]);

  const handleClick = (coffe) => {
    setFavorites([...favorites, coffe]);
  };

  const handleDelete = (id) => {
    setFavorites(favorites.filter((coffe) => coffe.id !== id));
  };

  const getOneCoffe = () => {
    getCoffeById(id).then((data) => {
      setSelectedCoffe(data);
    });
  };

  return (
    <Container>
      <Img src={selectedCoffe.image} alt="" />
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <Row gutter={[20, 20]}>
        {coffes?.map((coffe) => (
          <Box xs={12} lg={6} key={coffe.id} onClick={() => handleClick(coffe)}>
            <img src={coffe.image} alt="" />
            <p>{coffe.title}aaaaaaa</p>{" "}
          </Box>
        ))}
      </Row>
      <h2>Favoritos</h2>
      {
        <Grid>
          {favorites?.map((coffe) => (
            <Box key={coffe.id} onClick={() => handleDelete(coffe.id)}>
              <img src={coffe.image} alt="" />
              <p>{coffe.title}</p>
            </Box>
          ))}
        </Grid>
      }
    </Container>
  );
}

export default App;
