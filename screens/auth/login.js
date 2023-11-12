import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, StatusBar,Text } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { Box, Image,Input, Button, Heading, ScrollView, Pressable } from "native-base";
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';



const Login = (props) => {
  const navigation = useNavigation();
  
  return (
  <Box mt={12} >
      <StatusBar backgroundColor="#343A40" barStyle="dark-content" />
      <Box>
        <Heading fontSize={"4xl"} mt={10} alignSelf={"center"}>
          LOGIN
        </Heading>
      </Box>

    <Box alignItems={"center"} bgColor={"blueGray.30"}
      w={"container"} mt={1} h={"container"}>
        <Box alignItems="center" mb={1} mt={5}>
          <Image source={require("../../assets/logo1.png")}
            w={400} h={200}/>
        </Box>
    </Box>

    <Box mb={"6"} alignSelf={"center"} >
      <Heading fontSize={"2xl"} color={"blue.400"} fontWeight={"hairline"} >
        Login to your Account
      </Heading>
    </Box>

    <Box>
        <Input borderColor={"blue.200"} borderWidth={1} ml={5} mr={5} placeholder="Masukan Email"
          fontSize={18} mb={5} borderRadius={5} shadow={"4"}
        />

        <Input borderColor={"blue.200"} borderWidth={1} ml={5} mr={5} fontSize={18} mb={5}
          shadow={"4"} placeholder="Masukan Password"secureTextEntry borderRadius={5}
        />
        
        
        <Pressable>
        <Button p={4} ml={10} mr={10} mb={5} title="Login" color={"amber.200"} borderColor={"cyan.200"}
          shadow={"4"}  borderWidth={1} borderRadius={15} bgColor={"info.300"}
            onPress={() => navigation.navigate("Tabs")}>
          
          <Heading size="md" color={"white"}>
            Login
          </Heading>

        </Button>
        </Pressable>

        <Pressable>
        <Button p={4} ml={10} mr={10} title={"Register Account"} borderRadius={15} 
          shadow={"4"}  borderColor={"white"} borderWidth= {1} bgColor= {"yellow.100"} 
            onPress={() => navigation.navigate("Register")}>
          
          <Heading size="md" color="black">
            Register Account
          </Heading>
          
        </Button>
        </Pressable>

      </Box>
    </Box>
  );
};
  
  export default Login;