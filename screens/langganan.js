import { Heading, Image, Text, FlatList, Box} from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";

const Langganan = () => {
  const navigation = useNavigation();
  const renderitem = ({ item }) => {
    return (
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("LanggananDetail", { item: item })}
        >
        <Box
          p={"4"}
          borderBottomColor={"coolGray.300"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1} >

            <Box flex={1} mr={"5"}>
              <Image
                size="xl"
                borderRadius="xl"
                source={{ uri: item.image }}
                alt="Image Data"
                role="img"/>
            </Box>
            <Box flex={2} >
                <Text fontSize={"sm"}>{item.date}</Text>
                <Heading lineHeight={"sm"} fontSize={"lg"}>
                  {item.title}
                </Heading>
                <Text 
                bold
                color="#db2777" 
                fontSize="lg">{item.title2}</Text> 
            </Box>

          </Box>
        </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title={"Langganan Konsultasi"} withBack={true}  />
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Langganan;