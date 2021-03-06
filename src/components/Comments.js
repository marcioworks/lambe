import React,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native'

class Comments extends Component{
  render(){
    let views = null
    if(this.props.comments){
      views = this.props.comments.map((item,index)=>{
        return(
          <View style={styles.commentContainer} key={index}>
            <Text style={styles.nickname}>{item.nickname}</Text>
            <Text style={styles.comment}>{item.comment}</Text>
          </View>
        )
      })
    }

    return (
      <View style={styles.container}>
        {views}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin:10
  },
  commentContainer:{
    flexDirection: 'row',
    marginTop: 10
  }, 
  nickname:{
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#444'
  },
  comment:{
    color: '#555',
    marginLeft: 5,
  }
})

export default Comments