import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const Header = ({ title, withBack = false }) => {
    const trueGray900 = "#171717";
    const navigation = useNavigation();
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor={"white"} />
        <Box bg={"blue"} p={"2"}>
          <HStack justifyContent="space-between" alignItems="center">
            <HStack alignItems="center">
              {!withBack ? (
                <>
                <Box mr={"5"}>
                  <Ionicons name="person" size={25} color="black" 
                  />
                  </Box>
                </>
                ) : (
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.goBack()}
                    >
                    <Box mr={"3"}>
                        <Ionicons name="arrow-back-outline" size={32} color="black" />
                    </Box>
                    </TouchableOpacity>
                )}
                <Heading color={"black"}>{title}</Heading>
                
                </HStack>
                <Image
                    source={require("../assets/search.png")}
                    w="5"
                    h="5"
                    alt="Search Icon"
                    alignItems={"flex-end"}
                    />
                </HStack>
                </Box>
                </SafeAreaView>
                
                );
                };
export default Header;