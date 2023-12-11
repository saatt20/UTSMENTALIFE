import { Text, Box, Actionsheet, Button, useDisclose, CheckIcon, Modal, 
  InfoIcon, SunIcon,Image, VStack, Heading,  useBreakpointValue, View} from "native-base";
 import { Header } from "../components";
 import { useState, React} from "react";
 
 const Bantuan = () => {
 const flexDir = useBreakpointValue({
  base: "row",
  lg: "row"
});
  const [modalVisible, setModalVisible] = useState(false);
  const {isOpen, onOpen,onClose} = useDisclose();
   return ( 
     <>
     <Header title={"Mental Health"} withBack={true} />
      <Box flex={5}>
      <Heading p={2}>Bantuan</Heading>

          {/* TENTANG SAYA */}
          <Button onPress={onOpen} marginBottom={3} bgColor={"blue.500"}>
            <Text fontSize={"lg"} color={"white"}>Tentang Saya</Text>
            </Button>
          <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
            <Actionsheet.Content>
              <Box w="auto" h={60} px={4} justifyContent="center">
                <Text fontSize="16" color="gray.600" _dark={{
                color: "gray.600"
              }}>
                  SATRIO TEGAR NURWICAKSONO
                </Text>
              </Box>
              <Actionsheet.Item startIcon={<InfoIcon size="5" mt="0.5" color="emerald.500" />} >
                Id           : 1204228145
              </Actionsheet.Item>
              <Actionsheet.Item startIcon={<SunIcon size="5" mt="0.5" color="emerald.500" />} >
                Gender  : Laki-Laki
              </Actionsheet.Item>
              <Actionsheet.Item startIcon={<CheckIcon size="5" mt="0.5" color="emerald.500" />} >
                Umur    : 22 Tahun
              </Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet> 

        {/* HUBUNGI KAMI */}
        <Button width={"full"}
          bgColor={"blue.500"} onPress={() => {setModalVisible(!modalVisible);}}>
          <Text fontSize={"lg"} color={"white"}>Hubungi Kami</Text>
        </Button>
       <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="center" bottom="4" size="lg">
          <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Hubungi Customer Support</Modal.Header>
          <Modal.Body >
          <Text fontSize={"md"}>Anda dapat menghubungi kami melalui email "mentalife@gmail.com" atau melalui telepon "031-129915"</Text>
          </Modal.Body>
          <Modal.Footer>
             <Button bgColor={"blue.500"} onPress={() => { setModalVisible(false); }}>Kembali </Button>
          </Modal.Footer>
         </Modal.Content>
        </Modal>
      
      {/* KEBIJAKAN DUMMY */}
        <Button width={"full"}
         bgColor={"blue.500"}
         marginTop={3}
         onPress={() => {}}>
          <Text fontSize={"lg"} color={"white"}>Kebijakan Privasi Mentalife</Text>
        </Button>
        <Button width={"full"}
         bgColor={"blue.500"}
         marginTop={3}
         onPress={() => {}}>
          <Text fontSize={"lg"} color={"white"}>Ketentuan Penggunaan Mentalife</Text>
        </Button>
        <Button width={"full"}
         bgColor={"blue.500"}
         marginTop={3}
         onPress={() => {}}>
          <Text fontSize={"lg"} color={"white"}>Ketentuan Penggunaan Mentalife</Text>
        </Button>
      </Box>

      {/* FOOTER */}
      <VStack flex={3} space={10} bgColor={"gray.400"} paddingLeft={10} paddingRight={10} alignItems="center" justifyContent="center">
        <Heading fontSize={"2xl"}  marginBottom={-5} >Kenapa Mentalife?</Heading>
        <View style={{
        flexDirection: flexDir}}>
          <VStack m="1" w={105}  borderRadius="xl" p="3" bg={"black"}  alignItems="center" justifyContent="center">
          <Image 
                size="sm"
                borderRadius="lg"
                source={{ uri:"https://icon-library.com/images/trusted-icon/trusted-icon-3.jpg" }}
                alt="-"
                role="img">
          </Image>
          <Text fontSize="md" textAlign="center" color={"white"} _dark={{ color: "coolGray.800" }}>
            Terpercaya
          </Text>
          </VStack>

          <VStack m="1" w={100} borderRadius="xl" p="3" bg="black"  space={1} alignItems="center" justifyContent="center">
          <Image
                size="sm"
                source={{ uri:"https://cdn.icon-icons.com/icons2/2265/PNG/512/doctor_avatar_medical_icon_140443.png" }}
                alt="-"
                role="img">
          </Image>
            <Text fontSize="md" textAlign="center" color={"white"} _dark={{ color: "coolGray.800" }}>
               Dokter Berlisensi
            </Text>
          </VStack>

          <VStack m="1" w={100}  borderRadius="xl" p="3"  bg="black" alignItems="center" justifyContent="center">
          <Image
          size="sm"
                source={{ uri:"https://cdn-icons-png.flaticon.com/512/6603/6603918.png" }}
                alt="-"
                role="img">
          </Image>
            <Text fontSize="md" textAlign="center" color={"white"} _dark={{color: "coolGray.800"}}>
              Fleksibel
            </Text>
          </VStack>

        </View>
      </VStack>
     </>
   )
  }



 
 export default Bantuan;