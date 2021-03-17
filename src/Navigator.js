import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'
// import {createBottomTabNavigator} from 'react-navigation'
// import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'

const MenusRoutes ={
  Feed:{
    name:'Feed',
    screen: Feed,
    navigationOptions:{
      title:'Feed',
      tabBarIcon: ({tintColor})=>
        <Icon name='home' size={30} color={tintColor} />
      
    }
  },
  Add:{
    name: 'AddPhoto',
    screen: Feed,
    navigationOptions:{
      title: 'Add Picture',
      tabBarIcon: ({tintColor}) =>
        <Icon name='camera' size={30} color={tintColor} />
    }
  },
  profile:{
    name: 'Profile',
    screen: Feed,
    navigationOptions:{
      title: 'Profile',
      tabBarIcon: ({tintColor}) =>
        <Icon name='user' size={30} color={tintColor} />
    }
  }
}

const MenuConfig ={
  initialRouteName:'Feed',
  tabBarOptions:{
    showLabel: false
  }
}

const MenuNavigator = createBottomTabNavigator(MenusRoutes,MenuConfig)
export default MenuNavigator