import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './components/Register'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
  
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
      <Stack.Screen options={{headerShown: false}} name="Auth" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

// Olhar como remover a parte de cima do Stack Navigator.

export default props => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Feed':
              iconName = focused
                ? 'home'
                : 'home'

              break;
            case 'Photos':
              iconName = focused
                ? 'camera'
                : 'camera'
              break;
            case 'User':
              iconName = focused
                ? 'user'
                : 'user'
              break;
              
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={color} />
        },


      })}
      tabBarOptions = {{
      activeTintColor: 'blue',
      inactiveTincolor: 'grey',
      showLabel:false,
      // labelStyle: { fontSize: 30 }
    }} initialRouteName='Feed' >
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Photos" component={AddPhoto} />
    <Tab.Screen name="User" component={MyStack} />
    </Tab.Navigator>
  </NavigationContainer >
)

