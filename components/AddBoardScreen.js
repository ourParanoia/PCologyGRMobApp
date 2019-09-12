import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  TextInput,
  Picker
} from 'react-native'

import { Button } from 'react-native-elements'
import firebase from '../Firebase'

class AddBoardScreen extends Component {
  static navigationOptions = {
    title: 'Νέο άρθρο'
  }
  constructor() {
    super()
    this.ref = firebase.firestore().collection('events')
    this.state = {
      title: '',
      description: '',
      hostedBy: '',
      category: '',
      isLoading: false
    }
  }
  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text
    this.setState(state)
  }
  saveBoard() {
    this.setState({
      isLoading: true
    })
    this.ref
      .add({
        title: this.state.title,
        description: this.state.description,
        hostedBy: this.state.hostedBy,
        category: this.state.category
      })
      .then(docRef => {
        this.setState({
          title: '',
          description: '',
          hostedBy: '',
          category: '',

          isLoading: false
        })
        this.props.navigation.goBack()
      })
      .catch(error => {
        console.error('Πρόβλημα κατά την δημοσίευση του άρθρου: ', error)
        this.setState({
          isLoading: false
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'Τίτλος'}
            value={this.state.title}
            onChangeText={text => this.updateTextInput(text, 'title')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={4}
            placeholder={'Περιεχόμενο'}
            value={this.state.description}
            onChangeText={text => this.updateTextInput(text, 'description')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'Συντάκτης'}
            value={this.state.hostedBy}
            onChangeText={text => this.updateTextInput(text, 'hostedBy')}
          />
        </View>

        <View style={styles.subContainer}>
          <Picker
            selectedValue={this.state.category}
            style={styles.textInput}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ category: itemValue })
            }
          >
            <Picker.Item label="Κατηγορία" value="Κατηγορία" />
            <Picker.Item label="News" value="news" />
            <Picker.Item label="Development" value="development" />
            <Picker.Item label="Stories" value="stories" />
            <Picker.Item label="Interesting" value="interesting" />
            <Picker.Item label="Photoshooting" value="photoshooting" />
            <Picker.Item label="Tips" value="tips" />
          </Picker>
        </View>
        <View>
          <Button
            large
            buttonStyle={{
              backgroundColor: '#0052cc',
              paddingTop: '5%',
              borderRadius: 30
            }}
            leftIcon={{ name: 'save', color: 'white' }}
            title="Δημοσίευση"
            onPress={() => this.saveBoard()}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03A9F4',
    paddingTop: '10%'
  },
  textInput: {
    height: 40,
    width: '95%',
    borderColor: 'blue',
    //borderWidth: 1,
    borderRadius: 10
  }
})

export default AddBoardScreen
