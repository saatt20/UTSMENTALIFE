import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Lainnya from "./screens/lainnya";
import Pengaturan from "./screens/pengaturan";
import Bantuan from "./screens/bantuan";
import LanggananDetail from "./screens/langganan-detail";
import Langganan from "./screens/langganan";
import Psikolog from "./screens/psikolog";
import Home from "./screens/home";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Lainnya":
              iconName = "menu-outline";
              break;

              case "Home":
                iconName = "home-outline";
                break;

              case "Psikolog":
              iconName = "git-network-outline";
              break;

             
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Psikolog" component={Psikolog} options={noHead} />
      <Tab.Screen name="Lainnya" component={Lainnya} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>  
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen
            name="LanggananDetail"
            component={LanggananDetail}
            options={noHead}
          />
          <Stack.Screen name="Go" component={Langganan} options={noHead} />
          <Stack.Screen
            name="Langganan"
            component={Langganan}
            options={noHead}
          />
          <Stack.Screen name="Help" component={Pengaturan} options={noHead}/>
          <Stack.Screen
            name="Pengaturan"
            component={Pengaturan}
            options={noHead}
          />
          <Stack.Screen name="Support" component={Bantuan} options={noHead}/>
          <Stack.Screen
            name="Bantuan"
            component={Bantuan}
            options={noHead}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
      </>
  );
};

export default App;
