import { Heading, Center } from "native-base";
import Header from "../components/header";

const Home = () => {
  return (
    <>
      <Header title={"News Detail"} />
      <Center flex={1}>
        <Heading>Ini Home Bosku</Heading>
      </Center>
    </>
  );
};

export default Home;