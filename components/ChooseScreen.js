import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text
} from 'react-native'
import { List, ListItem, Button, Icon } from 'react-native-elements'

class ChooseScreen extends Component {
  static navigationOptions = {
    title: 'Διαθέσιμες επιλογές'
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
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
            backgroundColor="#00ffcc"
            color="black"
            alignItems="left"
            leftIcon={{
              name: 'folder-open',
              type: 'font-awesome',
              color: 'black'
            }}
            title="Όλα τα άρθρα"
            onPress={() => this.props.navigation.navigate('Board')}
          />
          <Button
            backgroundColor="#00ffcc"
            color="black"
            alignItems="left"
            leftIcon={{ name: 'menu', color: 'black' }}
            title="Κατηγορίες"
            onPress={() => this.props.navigation.navigate('Categories')}
          />
          <Button
            backgroundColor="#00ffcc"
            color="black"
            alignItems="left"
            leftIcon={{ name: 'lock', color: 'black' }}
            title="Σύνδεση"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66c2ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  subContainer: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF'
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

export default ChooseScreen
