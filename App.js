import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text, View } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/home";
import Psikolog from "./screens/psikolog";
import Profile from "./screens/profile";
import HospitalList from "./screens/hospital";
import Berita from "./screens/berita";



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
            case "Home":
              iconName = "home-outline";
              break;

            case "Psikolog":
              iconName = "git-network-outline";
              break;

            case "Profile":
              iconName = "person-circle-outline";
              break;

            case "lainnya":
                iconName = "person-circle-outline";
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
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="lainnya" component={lainnya} options={noHead} /> */}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="Hospital" component={HospitalList} options={noHead} />
          <Stack.Screen name="Berita" component={Berita} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;