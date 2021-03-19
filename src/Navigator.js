import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'

const Tab = createBottomTabNavigator()

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
          return <Icon name={iconName} size={size} color={color} />
        },


      })}
      tabBarOptions = {{
      activeTintColor: 'blue',
      inactiveTincolor: 'grey',
      showLabel:false,
      // labelStyle: { fontSize: 30 }
    }} initialRouteName='Feed' >
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Photos" component={Feed} />
    <Tab.Screen name="User" component={Feed} />
    </Tab.Navigator>
  </NavigationContainer >
)

