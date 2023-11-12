import { Heading, Center } from "native-base";
import { Header } from "../components";

const Psikolog = () => {
  return (
    <>
      <Header title={"News Detail"} withBack= {"true"} />
      <Center flex={1}>
        <Heading>Ini Psikolog Bosku</Heading>
      </Center>
    </>
  );
};
export default Psikolog;
