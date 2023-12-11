import { Heading, Pressable, Button, Box, Input, Image, ScrollView } from "native-base";
import { TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { Header } from "../../components";

const Register = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
        <Box mt={12} >
            <StatusBar backgroundColor="#343A40" barStyle="dark-content" />
            <Box>
              <Heading fontSize={"4xl"} mt={10} alignSelf={"center"}>
                REGISTER
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
              Create your Account
            </Heading>
          </Box>
      
          <Box>
              <Input borderColor={"blue.200"} borderWidth={1} ml={5} mr={5} placeholder="Masukan Email"
                h={"70"} fontSize={18} mb={5} borderRadius={5} shadow={""}
              />
      
              <Input borderColor={"blue.200"} borderWidth={1} ml={5} mr={5} fontSize={18} mb={5}
                shadow={""} placeholder="Masukan Password"secureTextEntry borderRadius={5} h={"70"}
              />
              
              <Input borderColor={"blue.200"} borderWidth={1} ml={5} mr={5} fontSize={18} mb={5}
                shadow={""} placeholder="Confirm Password"secureTextEntry borderRadius={5} h={"70"}
              />
              
              <Pressable>
              <Button alignSelf={"flex-start"} p={6} ml={2} w={"48"} mb={-20} title="Back" color={"amber.200"} borderColor={"white"}
                shadow={"4"}  borderWidth={1} borderRadius={15} bgColor={"red.400"}
                  onPress={() => navigation.navigate("Back")}>
                
                <Heading size="md" color={"white"}>
                  Back
                </Heading>
      
              </Button>
              </Pressable>
      
              <Pressable>
              <Button alignSelf={"flex-end"} p={6} mb={12} mr={2} w={"48"}  title={"Create Account"} borderRadius={15} 
                shadow={"4"}  borderColor={"black"} borderWidth= {"0"} bgColor= {"white"}
                    onPress={() => navigation.navigate("Create Akun")}>
                <Heading size="md" color="black">
                  Create Account
                </Heading>
                
              </Button>
              </Pressable>  
      
            </Box>
          </Box>
        </ScrollView>
        );
};

export default Register;