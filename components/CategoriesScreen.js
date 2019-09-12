import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text
} from 'react-native'
import { List, ListItem, Button, Icon } from 'react-native-elements'

class CategoriesScreen extends Component {
  static navigationOptions = {
    title: 'Kατηγορίες'
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
      <React.Fragment>
        <View style={styles.subcontainer}>
          <Button
            backgroundColor="#040F3D"
            color="#4BFFA5"
            style={styles.button}
            leftIcon={{
              name: 'book',
              type: 'font-awesome',
              color: '#4BFFA5'
            }}
            title="Όλα τα άρθα"
            onPress={() => this.props.navigation.navigate('Board')}
          />

          <Button
            backgroundColor="#040F3D"
            color="#4BFFA5"
            style={styles.button}
            leftIcon={{
              name: 'lock',
              type: 'font-awesome',
              color: '#4BFFA5'
            }}
            title="Σύνδεση"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
        <View style={styles.container}>
          
            <Button
              backgroundColor="#c6c4c5"
              buttonStyle={{ borderRadius: 20 }}
              color="#040F3D"
              leftIcon={{ name: 'rss', type: 'font-awesome', color: '#040F3D' }}
              title="News"
              onPress={() => this.props.navigation.navigate('News')}
            />

            <Button
              backgroundColor="#c6c4c5"
              buttonStyle={{ borderRadius: 20 }}
              color="#040F3D"
              leftIcon={{
                name: 'terminal',
                type: 'font-awesome',
                color: '#040F3D'
              }}
              title="Development"
              onPress={() => this.props.navigation.navigate('Development')}
            />
            <Button
              backgroundColor="#c6c4c5"
              buttonStyle={{ borderRadius: 20 }}
              color="#040F3D"
              leftIcon={{ name: 'history', color: '#040F3D' }}
              title="Stories"
              onPress={() => this.props.navigation.navigate('Stories')}
            />
            <Button
              backgroundColor="#c6c4c5"
              buttonStyle={{ borderRadius: 20 }}
              color="#040F3D"
              leftIcon={{
                name: 'rocket',
                type: 'font-awesome',
                color: '#040F3D'
              }}
              title="Tips"
              onPress={() => this.props.navigation.navigate('Tips')}
            />
            <Button
              backgroundColor="#c6c4c5"
              buttonStyle={{ borderRadius: 20 }}
              color="#040F3D"
              leftIcon={{
                name: 'camera-retro',
                type: 'font-awesome',
                color: '#040F3D'
              }}
              title="Photoshooting"
              onPress={() => this.props.navigation.navigate('Photoshooting')}
            />
            <Button
              backgroundColor="#c6c4c5"
              buttonStyle={{ borderRadius: 20 }}
              color="#040F3D"
              leftIcon={{
                name: 'coffee',
                type: 'font-awesome',
                color: '#040F3D'
              }}
              title="Interesting"
              onPress={() => this.props.navigation.navigate('Interesting')}
            />
          </View>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: '#c6c4c5'
  },
  myborder: {
    borderRadius: 30
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  subContainer: {
    padding: 5,
    backgroundColor: '#0052cc',
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '3%',
    marginTop: '3%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
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
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#040F3D'
  },
  button: {
    backgroundColor: 'green',
    width: '50%',
    height: 40
  }
})

export default CategoriesScreen
