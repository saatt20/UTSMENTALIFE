import { Heading, Center } from "native-base";
import Header from "../components/header";
import { useNavigation } from '@react-navigation/native';

const Transaksi = () => {
  return (
    <>
      <Header title={"Transaksi"} withBack={"true"} />
      <Center flex={1}>
        <Heading>Ini Home Bosku</Heading>
      </Center>
    </>
  );
};

export default Transaksi;