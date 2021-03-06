import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity
} from 'react-native'
import firebase from 'firebase'
import * as FirebaseAPI from '../modules/firebaseAPI'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Σύνδεση'
  }

  state = {
    name: '',
    email: '',
    password: ''
  }

  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }

  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user)

      if (user) {
        navigation.navigate('Connected')
      }
    })
  }

  createUser() {
    FirebaseAPI.createUser(this.state.email, this.state.password)
  }

  signIn() {
    FirebaseAPI.signInUser(this.state.email, this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Σύνδεση στο PCology.gr</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Κωδικός"
            autoCapitalize="none"
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />

          <TouchableOpacity
            style={{ marginTop: '5%', paddingTop: 10 }}
            onPress={() => this.signIn()}
          >
            <View>
              <Text>Σύνδεση</Text>
            </View>
          </TouchableOpacity>
          {/* 
          <TouchableOpacity
            style={{ marginTop: '5%', paddingTop: 20 }}
            onPress={() => this.createUser()}
          >
            <View>
              <Text>Δημιουργία νέου χρήστη</Text>
            </View>
          </TouchableOpacity>
          */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    paddingTop: '50%',
    borderWidth: 1,
    borderColor: '#040F3D' ,
    marginVertical: 75,
    borderRadius: 10
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: '#040F3D',
    borderWidth: 1,
    marginTop: 8 ,
    color: '#040F3D'
  },
  text: {
    fontSize: 17,
    color: '#040F3D',
    lineHeight: 24,
    width: '75%',
    marginBottom: '10%',
    textAlign: 'center'
  }
})
