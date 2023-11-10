import { Heading, Text, Image, View, Center, Button, Modal} from "native-base";
import { Header } from "../components";
import { useState, React} from "react";
import { ScrollView } from "native-base";

const LanggananDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <Header title={"Langganan & Hemat"} withBack={true} />
            <ScrollView>
                <View>
                    <Image
                        width={"auto"}
                        height={400}
                        source={{ uri: params.image }}
                        alt="Image Data"
                        marginBottom={1}
                        role="img"
                    />    
                  <Center h={100}>
                    <Button onPress={() => setShowModal(true)}w={"2xs"} h={55} bgColor={"#db2777"}>
                    <Text bold fontSize={"md"} color={"white"}> Langganan Sekarang</Text>
                    </Button>
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
                    _dark: {
                      bg: "coolGray.800"
                    }
                  }}>
                    <Modal.Content maxWidth="500" maxH="350">
                      <Modal.CloseButton />
                      <Modal.Header >Kenapa Beli Paket Ini?</Modal.Header>
                      <Modal.Body>
                        <Text fontSize={"md"}>Jaga kesehatan mental Anda dengan langganan konsultasi kesehatan mental kami! Dapatkan dukungan ahli kapan pun Anda butuhkan. 
                        Segera langganan untuk hidup yang lebih bahagia. </Text>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" size={"lg"} onPress={() => {
                            setShowModal(false); }}> Cancel
                            </Button>
                          <Button 
                          bgColor={"red.600"}
                          size={"lg"}
                          onPress={() => {
                          setShowModal(false);
                        }}> Beli
                          </Button>
                        </Button.Group>
                      </Modal.Footer>
                    </Modal.Content>
                    </Modal>
                    </Center>
        
                    <Text fontSize={24} paddingHorizontal={16} marginTop={-8} color={"#db2777"} bold>
                      {params.title2}
                      </Text>
                    <Heading lineHeight={"xl"} fontSize={24} paddingHorizontal={15}>
                        {params.title}
                    </Heading>
                    <View
                        p={2}
                        width={500}
                        marginBottom={5}
                        alignSelf="center"
                        borderBottomColor={"coolGray600"}
                        paddingHorizontal={15}
                        borderBottomWidth={1}
                    ></View>
                    <Text paddingHorizontal={10} color="black" marginBottom={25} fontSize={"md"}>
                        {params.content}
                    </Text>
                </View>
          </ScrollView>
        </>
    );
};

export default LanggananDetail;