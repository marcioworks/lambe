import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  ScrollView, Alert
} from 'react-native'

import {launchCamera} from 'react-native-image-picker'

class AddPhoto extends Component {
  state = {
    image: null,
    comment: ''
  }

  pickImage = () => {
    launchCamera({
      title: 'Escolha uma Imagem',
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 600,
      maxWidth: 600,
    }, res => {
      if (!res.didCancel) {
        this.setState({ image: { uri: res.uri, base64: res.data } })
      }
    })
  }

  save = async () => {
    Alert.alert('Imagem Adiconada!', this.state.comment)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma Imagem</Text>
          <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image} />
          </View>
          <TouchableOpacity onPress={this.pickImage} style={styles.button}>
            <Text style={styles.buttomText}>Escolha a Foto</Text>
          </TouchableOpacity>
          <TextInput
            placeholder='algum comentario para a foto?'
            style={styles.input}
            value={this.state.comment}
            onChangeText={comment => this.setState({ comment })}
          />
          <TouchableOpacity onPress={this.save} style={styles.button}>
            <Text style={styles.buttomText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center"
  },
  title:{
    fontSize:20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  imageContainer:{
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#EEE',
    marginTop:10
  },
  image:{
    width: '100%',
    height: Dimensions.get('window').width /2,
    resizeMode: 'center'
  },
  button:{
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttomText:{
    fontSize: 20,
    color: '#FFF'
  },
  input:{
    marginTop: 20,
    width: '90%'
  }
})

export default AddPhoto