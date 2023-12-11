import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from "./screens/auth/login";
import Profile from "./screens/profile";
import Psikolog from "./screens/psikolog";
import Home from "./screens/home";
import Edit from "./screens/edit";
import Transaksi from "./screens/transaksi";
import Register from "./screens/auth/register";

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
              
            // case "Login":
            //   iconName = "person-circle-outline";
            //   break;
          
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
          height: 100,
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
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Transaksi" component={Transaksi} options={noHead}/> */}
          {/* <Stack.Screen name="Profile" component={Profile} options={noHead}/> */}
          <Stack.Screen name="Create Akun" component={Login} options={noHead}/>
          <Stack.Screen name="Register" component={Register} options={noHead}/>
          <Stack.Screen name="Logout" component={Login} options={noHead}/> 
          <Stack.Screen name="login" component={Login} options={noHead}/>
          <Stack.Screen name="Edit" component={Edit} options={noHead} />
          <Stack.Screen name="Back" component={Login} options={noHead}/>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;