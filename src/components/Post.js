import React ,{Component} from 'react'
import {View,Image,Dimensions,StyleSheet} from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.image} source={this.props.image} />
        <Author email={this.props.email} nickname={this.props.nickname} />
        <Comments comments={this.props.comments} />
        <AddComment />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  image:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width *3/4,
    resizeMode:'contain'
  }
})

export default Post