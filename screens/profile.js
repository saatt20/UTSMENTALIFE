import { Heading, Center } from "native-base";
import { Header } from "../components";

const Profile = () => {
  return (
    <>
      <Header title={"Home"} />
      <Center flex={1}>
        <Heading>Ini Profile</Heading>
      </Center>
    </>
  );
};

export default Profile;