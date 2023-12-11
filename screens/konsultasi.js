import { Heading, Center, Text, Box, Image, ScrollView, Button, HStack } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import datakonsultasi from "../datakonsultasi";

const Konsultasi = () => {
  return (
    <>
      <Header title={"Konsultasi"} withBack="true"/>
      <ScrollView>
      <Box
          p={"4"}
          bgColor={"#D9E8ED"}
          borderBottomColor={"#D9E8ED"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
          <Box flex={1}>
            <Image
              src={"https://i.pinimg.com/564x/23/56/a9/2356a9f5370e67942a6c79a927fd30ad.jpg"}
              w="150"
              h="40"
              borderRadius={10}
              alt="image"
            />
          </Box>
          <Box flex={1} alignSelf={"center"}>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {"Dr. Nadia Utami, M.Psi"}
            </Heading>
            <Text fontSize={"sm"}>{"Psikologi Anak dan Remaja"}</Text>
          </Box>
      </Box>
      <Box  p={"2"} mt={"5"} bg={"#D9E8ED"} >
      <Button onPress={() => console.log("hello world")}>Chat</Button>
      </Box>
      <Box  p={"2"} mt={"3"} bg={"#D9E8ED"} >
      <Button onPress={() => console.log("hello world")}>Voice Call</Button>
      </Box>
      <Box  p={"2"} mt={"3"} bg={"#D9E8ED"} >
      <Button onPress={() => console.log("hello world")}>Video Call</Button>
      </Box>
        </ScrollView>
    </>
  );
};

export default Konsultasi;

     