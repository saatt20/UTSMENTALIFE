import { Text, Box, Button, Modal, FormControl, Input ,VStack, Popover, Image, AlertDialog} from "native-base";
import { Header } from "../components";
import { useState, React, useRef} from "react";

const Pengaturan = () => {
const [modalVisible, setModalVisible] = useState(false);
const initialFocusRef = useRef(null);
const [isOpen, setIsOpen] = useState(false);
const onClose = () => setIsOpen(false);
const cancelRef = useRef(null);

  return ( 
    <>
     <Header title={"Pengaturan"} withBack={true} justifyContent={"center"} />

     {/* RESET PASS */}
    <Box flex={1} >
      <Text fontSize={"xl"} marginLeft={2} bold marginTop={2} paddingBottom={2}>Akun Saya</Text>
          <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="center" bottom="4" size="lg">
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Reset Password?</Modal.Header>
              <Modal.Body>
              Masukkan alamat email dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda
                <FormControl mt="3">
                  <FormControl.Label>Email</FormControl.Label>
                  <Input />
                </FormControl>
              </Modal.Body>
              <Modal.Footer>
                <Button flex="1" bgColor={"blue.500"} onPress={() => {
                setModalVisible(false);
              }}>
                  Lanjutkan
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
          <VStack space={8} alignItems="center">
            <Button width={"full"} 
            p={"5"}
            borderBottomColor={"white"}
            borderBottomWidth={3}
            flexDirection="row"
            bgColor={"blue.500"}
            size={"lg"} 
            onPress={() => {
            setModalVisible(!modalVisible);
          }}>
              Reset Password
            </Button>
          </VStack>

          {/* EDIT AKUN */}
          <Popover  in
          itialFocusRef={initialFocusRef} trigger={triggerProps => {
          return  <Button width={"full"} 
          p={"4"}
          borderBottomColor={"white"}
          borderBottomWidth={3}
          marginTop={1}
          flexDirection="row"
          bgColor={"blue.500"}
          size={"lg"}{...triggerProps}>Edit Akun</Button>;
        }}>
            <Popover.Content width="350">
              <Popover.Arrow />
              <Popover.CloseButton />
              {/* @ts-ignore */  }
              <Popover.Header>Edit Informasi Akun</Popover.Header>
              <Popover.Body>
                <FormControl>
                  <FormControl.Label _text={{
                  fontSize: "md",
                  fontWeight: "medium"
                }}>
                    Nama Lengkap
                  </FormControl.Label>
                  <Input rounded="sm" fontSize="sm" ref={initialFocusRef} />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label _text={{
                  fontSize: "md",
                  fontWeight: "medium"
                }}>
                    Username
                  </FormControl.Label>
                  <Input rounded="md" fontSize="sm"marginBottom={5} />
                </FormControl>
              </Popover.Body>
              <Popover.Footer>
                <Button.Group>
                  <Button colorScheme="coolGray" variant="ghost">
                    Cancel
                  </Button>
                  <Button bgColor={"blue.500"}>Save</Button>
                </Button.Group>
              </Popover.Footer>
            </Popover.Content>
          </Popover>
          

          {/* HAPUS AKUN */}
          <Button width={"full"} 
            p={"4"}
            borderBottomColor={"white"}
            borderBottomWidth={3}
            marginTop={1}
            flexDirection="row"
            bg={"blue.500"}
            size={"lg"} onPress={() => setIsOpen(!isOpen)}>
            Hapus Akun
          </Button>
          <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Hapus Akun Mentalife?</AlertDialog.Header>
              <AlertDialog.Body>
              <Text fontSize={"md"}>
              Ini akan menghapus semua data yang berkaitan dengan Akun Mental Health. Data yang terhapus tidak dapat dipulihkan.
              </Text>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                    Cancel
                  </Button>
                  <Button bgColor={"blue.500"}onPress={onClose}>
                    Hapus
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>

          {/* PENGATURAN */}
          <Text fontSize={"xl"} bold marginLeft={2} marginTop={1}>Pengaturan </Text>
          <Button  width={"full"} bgColor={"blue.500"} size={"lg"} marginTop={2}>
            Pengaturan Notifikasi
          </Button>
          <Button  width={"full"} bgColor={"blue.500"} size={"lg"} marginTop={2}>
            Pengaturan Bahasa
          </Button>

          </Box>
    </>
  )
}

export default Pengaturan;