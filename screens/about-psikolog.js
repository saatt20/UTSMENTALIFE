import { Heading, Center, Text, Box, Image, ScrollView, Button, HStack } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import datas from "../datas";

const AboutPsikolog = ({ route }) => {
  const navigation = useNavigation();
 const params = route.params.item; 
 
  return (
    <>
      <Header title={"About"} withBack="true"/>
      <ScrollView>
        <Image source={{uri: params.image}} w={"full"} h={"80"} alt="Image"/>
        <Box  p={"4"} borderBottomColor={"coolGray.300"} borderBottomWidth={1}>
          <Heading>{params.title}</Heading>
          <Text>{params.job}</Text>
          <Text>{params.keahlian}</Text>
        </Box>
        <Box p={"4"} bg={"#D9E8ED"} >
          <Text bold fontSize={"17"}>
            {params.harga}
          </Text>
        </Box>
        <Box  p={"4"} >
          <Text>
            {params.content}
          </Text>
        </Box>
        <Button onPress={() => navigation.navigate( "Pembayaran" )}  alignSelf="flex-end"  borderRadius="full" 
         w={"150"} h={"12"} mr={"5"} mt={"2"}>Pembayaran</Button>
        <Box  p={"4"}>
          
        </Box>
        </ScrollView>
    </>
  );
};

export default AboutPsikolog;