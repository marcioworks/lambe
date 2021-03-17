import React,{Component} from 'react'
import {View,FlatList, StyleSheet} from 'react-native'
import Post from '../components/Post'
class Feed extends Component{
  state={
    posts:[{
      id:Math.random(),
      nickname: 'José Pereira lima',
      email: 'jsperlim@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments:[{
        nickname: 'jonh james',
        comment: 'awesome!'
      },{
        nickname: 'maria silva',
        comment: 'muito lindo'
      }]
    },{
      id:Math.random(),
      nickname: 'Marcio silva',
      email: 'marcioadsworks@gmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments:[]
    }]
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList data={this.state.posts} 
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => 
              <Post key={item.id} {...item}/>}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#f5FCFF'
  }
})


export default Feed