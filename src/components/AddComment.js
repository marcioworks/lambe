import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback as TWF,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
  state = {
    comment: '',
    editMode: false
  }
  handleAddComment = () => {
    Alert.alert('Adicionado', this.state.comment)
  }
  render() {
    let commentArea = null
    if (this.state.editMode) {
      commentArea = (
        <View style={styles.container}>
          <TextInput placeholder='digite seu comentario...'
            style={styles.input} autoFocus={true}
            value={this.state.comment}
            onChangeText={comment => this.setState({ comment })}
            onSubmitEditing={this.handleAddComment} />
          <TWF onPress={() => this.setState({editMode:false})}>
            <Icon name='times' size={15} color='#555'/>
          </TWF>
        </View>
      )
    }else{
      commentArea =(
        <TWF onPress={() => this.setState({editMode: true})}>
          <View style={styles.container}> 
            <Icon name='comment-o' size={35} color='#333'/>
            <Text style={styles.caption}> Adicione um comentário</Text>
          </View>
        </TWF>
      )
    }

    return(
      <View style={{flex: 1,marginLeft:5}}>
        {commentArea}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  
  },
  caption:{
    marginLeft: 10,
    fontSize: 12,
    color: '#555'
  },
  input:{
    width: '90%'
  }
})

export default AddComment