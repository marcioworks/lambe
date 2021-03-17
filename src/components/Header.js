import React ,{Component} from 'react'
import {View,Text,Image,StyleSheet,Platform} from 'react-native'
import icon from '../../assets/imgs/icon.png'
class Header extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image style={styles.image}source={icon}/>
          <Text style={styles.title}>Lambe Lambe</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    marginTop: Platform.OS === 'ios'? 30: 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#BBB"
  },
  rowContainer:{
    flexDirection: 'row',
    alignItems:'center'
  },
  image:{
    resizeMode: 'contain',
    width: 30,
    height: 30
  },
  title:{
    color:'#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28
  }

})
export default Header