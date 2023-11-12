// import { Box, Text, Image, HStack, Button, Heading} from "native-base";
// import { Header } from "../components";
// import Ionicons from "@expo/vector-icons/Ionicons";

// const Home = () => {
//   return (
//     <>
//       <Header title={"Mentalife"} />
//       <Box p={4} mx={"auto"} bg={"#FFD7BC"} w={"360"} borderRadius={"30"}>
//         <Image
//         source={{ uri: "https://i.pinimg.com/736x/ac/3c/df/ac3cdff15a6dab5a061a0bd8b6d64107.jpg" }}
//         w={"full"}
//         h={40}
        
//         borderRadius={10}
//         alt="image"
//         />
//         <Text fontSize={"15"} w={"300"} mx={"auto"} pt={"3"} textAlign={"center"}>Sehat dari Dalam, Damai dari Jiwa.  

//         </Text>
//       </Box>  

//       <Box w={300} h={"150"} mx={"auto"} borderRadius={"20"} borderColor={"black"} borderWidth={"2"} mt={"5"}>
//         <Box mx={"auto"} my={"auto"}>
//           <HStack>
//             <Box  mx={"5"}>
//             <Ionicons name="location-outline" size={32} color="black" />
//             <Text>Apa aja</Text>
//             </Box>
//             <Box mx={"5"}>
//             <Ionicons name="business-outline" size={32} color="black" />
//             <Text>Apa aja</Text>
//             </Box>
//           </HStack>
//           <Box >
//             <Button mt={"2"} bg={"#D9D9D9"}>More Info
//             </Button>
//           </Box>
//         </Box>
//       </Box>  

//       <HStack>
//         <Heading textAlign={"left"} ml={"3"} mt={"3"} fontSize={"md"}>Top Article</Heading>
//         <Text textAlign={"right"} ml={"225"}  mt={"3"} fontSize={"md"}>Top Article</Text>  
//       </HStack>

//       <Box bg={"#FFD7BC"} w={"full"} h={"200"} mx={"auto"} >
//         <Image source={{ uri: "https://i.pinimg.com/564x/e5/67/0d/e5670d32a958ef12c4669dfe12fd927e.jpg"}}
//          w={"200"}
//          h={40}
//          borderRadius={10}
//          alt="image" />
//         <Text fontSize={"15"} w={"300"} mx={"auto"} pt={"3"} textAlign={"center"}>Sehat dari Dalam, Damai dari Jiwa.  

//         </Text>
//       </Box>

//     </>
//   );
// };

// export default Home;
import { Heading, Center } from "native-base";
import { Header } from "../components";

const Home = () => {
  return (
    <>
      <Header title={"Home"} />
      <Center flex={1}>
        <Heading>Ini Home</Heading>
      </Center>
    </>
  );
};

export default Home;