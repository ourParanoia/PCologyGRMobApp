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
            backgroundColor="#0052cc"
            color="white"
            style={styles.button}
            leftIcon={{
              name: 'book',
              type: 'font-awesome',
              color: 'white'
            }}
            title="Όλα τα άρθα"
            onPress={() => this.props.navigation.navigate('Connected')}
          />

          <Button
            backgroundColor="#0052cc"
            color="white"
            style={styles.button}
            leftIcon={{
              name: 'lock',
              type: 'font-awesome',
              color: 'white'
            }}
            title="Αποσύνδεση"
            onPress={() => {
              FirebaseAPI.logoutUser()
              navigation.navigate('Board')
            }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Button
              backgroundColor="#0052cc"
              buttonStyle={{ borderRadius: 30 }}
              color="white"
              leftIcon={{ name: 'rss', type: 'font-awesome', color: 'white' }}
              title="News"
              onPress={() => this.props.navigation.navigate('NewsCon')}
            />

            <Button
              backgroundColor="#0052cc"
              buttonStyle={{ borderRadius: 30 }}
              color="white"
              style={styles.subContainer}
              leftIcon={{
                name: 'terminal',
                type: 'font-awesome',
                color: 'white'
              }}
              title="Development"
              onPress={() => this.props.navigation.navigate('DevelopmentCon')}
            />
            <Button
              backgroundColor="#0052cc"
              buttonStyle={{ borderRadius: 30 }}
              color="white"
              leftIcon={{ name: 'history', color: 'white' }}
              title="Stories"
              onPress={() => this.props.navigation.navigate('StoriesCon')}
            />
            <Button
              backgroundColor="#0052cc"
              buttonStyle={{ borderRadius: 30 }}
              color="white"
              leftIcon={{
                name: 'rocket',
                type: 'font-awesome',
                color: 'white'
              }}
              title="Tips"
              onPress={() => this.props.navigation.navigate('TipsCon')}
            />
            <Button
              backgroundColor="#0052cc"
              buttonStyle={{ borderRadius: 30 }}
              color="white"
              leftIcon={{
                name: 'camera-retro',
                type: 'font-awesome',
                color: 'white'
              }}
              title="Photoshooting"
              onPress={() => this.props.navigation.navigate('PhotoshootingCon')}
            />
            <Button
              backgroundColor="#0052cc"
              buttonStyle={{ borderRadius: 30 }}
              color="white"
              leftIcon={{
                name: 'coffee',
                type: 'font-awesome',
                color: 'white'
              }}
              title="Interesting"
              onPress={() => this.props.navigation.navigate('InterestingCon')}
            />
          </View>
        </View>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: '#66c2ff'
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
    backgroundColor: '#0052cc'
  },
  button: {
    backgroundColor: 'green',
    width: '50%',
    height: 40
  }
})

export default CategoriesScreen
