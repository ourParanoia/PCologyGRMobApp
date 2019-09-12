import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text
} from 'react-native'
import { List, ListItem, Button, Icon } from 'react-native-elements'
import ExpandPage from './ExpandPage'

class BeginScreen extends Component {
  static navigationOptions = {
    title: 'PCOLOGY.GR'
  }
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    this.setState({
      isLoading: true
    })
  }
  /*
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'SignUp')
    })
  }*/

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={{ paddingTop: 40 }}>
            <Text style={{ fontSize: 30 }}>PCology</Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>
              Η "επιστημονική" πλευρά των υπολογιστών
            </Text>
          </View>
          <View style={{ borderRadius: 20, paddingTop: 30 }}>
            <Button
              large
              backgroundColor="#4BFFA5"
              buttonStyle={{ borderRadius: 30 }}
              color="#040F3D"
              rightIcon={{
                name: 'flask',
                type: 'font-awesome',
                color: '#040F3D'
              }}
              title="Ξεκινάμε"
              onPress={() => this.props.navigation.navigate('Board')}
            />
          </View>
        </View>
        
        {/*<ExpandPage /> */}
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6c4c5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
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
    backgroundColor: '#040f3d',
    borderRadius: 20
  }
})

export default BeginScreen
