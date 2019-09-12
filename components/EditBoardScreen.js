import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  TextInput
} from 'react-native'
import { Button } from 'react-native-elements'
import firebase from '../Firebase'

class EditBoardScreen extends Component {
  static navigationOptions = {
    title: 'Επεξεργασία άρθρου'
  }
  constructor() {
    super()
    this.state = {
      key: '',
      isLoading: true,
      title: '',
      description: '',
      author: ''
    }
  }
  componentDidMount() {
    const { navigation } = this.props
    const ref = firebase
      .firestore()
      .collection('events')
      .doc(JSON.parse(navigation.getParam('eventskey')))
    ref.get().then(doc => {
      if (doc.exists) {
        const events = doc.data()
        this.setState({
          key: doc.id,
          title: events.title,
          description: events.description,
          hostedBy: events.hostedBy,
          category: events.category,
          isLoading: false
        })
      } else {
        console.log('Δεν υπάρχει τέτοια εγγραφή')
      }
    })
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text
    this.setState(state)
  }

  updateBoard() {
    this.setState({
      isLoading: true
    })
    const { navigation } = this.props
    const updateRef = firebase
      .firestore()
      .collection('events')
      .doc(this.state.key)
    updateRef
      .set({
        title: this.state.title,
        description: this.state.description,
        hostedBy: this.state.hostedBy,
        category: this.state.category
      })
      .then(docRef => {
        this.setState({
          key: '',
          title: '',
          description: '',
          hostedBy: '',
          category: '',
          isLoading: false
        })
        this.props.navigation.navigate('Board')
      })
      .catch(error => {
        console.error(
          'Παρουσιάστηκε πρόβλημα κατά την δημοσίευση του άρθρου: ',
          error
        )
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
            placeholder={'Τίτλος'}
            value={this.state.title}
            onChangeText={text => this.updateTextInput(text, 'title')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder={'Περιεχόμενο'}
            value={this.state.description}
            onChangeText={text => this.updateTextInput(text, 'description')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={'Συντάκτης'}
            value={this.state.hostedBy}
            onChangeText={text => this.updateTextInput(text, 'hostedBy')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={'Κατηγορία'}
            value={this.state.category}
            onChangeText={text => this.updateTextInput(text, 'category')}
          />
        </View>
        <View style={styles.button}>
          <Button
            large
            leftIcon={{ name: 'update' }}
            title="Ενημέρωση"
            onPress={() => this.updateBoard()}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC'
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default EditBoardScreen
