import { Heading, ScrollView, VStack, Stack, Divider, Box, Image} from "native-base";
import { Header } from "../components";
import { TouchableOpacity } from "react-native";

const Home = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <ScrollView>
      <Header title={"Mental Health"}/> 
      <VStack p={4} w={"max"} h={"max"} >
        <Stack direction="column">

        {/* home */}
        <TouchableOpacity onPress={() => navigation.navigate("Langganan")} >
          <Box
              p={"4"}
              borderBottomColor={"coolGray.300"}
              borderBottomWidth={1}
              flexDirection="row"
              flex={1} >
              <Box flex={2} mr={"5"}>
              <Image
                  size="xl"
                  source={{ uri:"https://cdn-icons-png.flaticon.com/512/2851/2851439.png" }}
                  alt=""
                  role="img"
                />
              </Box>

              <Box flex={3} >
                <Heading mt={10} lineHeight={"lg"} fontSize={"2xl"}>
                  Berlangganan 
                </Heading>
              </Box>
            </Box>
          </TouchableOpacity>
        


        {/* Pengaturan */}
        <TouchableOpacity onPress={() => navigation.navigate("Pengaturan")}>
        <Box
          p={"4"}
          borderBottomColor={"coolGray.300"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
            <Box flex={2} mr={"5"}>
            <Image
                size="xl"
                
                source={{ uri:"https://cdn-icons-png.flaticon.com/512/900/900834.png" }}
                alt="Image Data"
                role="img"
              />
            </Box>
            <Box flex={3} >
              <Heading mt={10} fontSize={"2xl"}>
                Pengaturan
              </Heading>
            </Box>
          </Box>
        </TouchableOpacity>

        {/* Bantuan */}
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Bantuan")}>
        <Box
          p={"4"}
          borderBottomColor={"coolGray.300"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
            <Box flex={2} mr={"5"}>
            <Image
                size="xl"
                borderRadius="xl"
                source={{ uri:"https://static-00.iconduck.com/assets.00/call-center-icon-2048x2047-wn5rj4y3.png" }}
                alt="Image Data"
                role="img"
              />
            </Box>
            <Box flex={3} >
              <Heading mt={10} fontSize={"2xl"}>
                Pusat Bantuan
              </Heading>
            </Box>
          </Box>
        </TouchableOpacity>

        </Stack>
        <Divider />
      </VStack>
    </ScrollView>
  );
};

export default Home;