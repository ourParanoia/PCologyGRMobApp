import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text
} from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import firebase from '../Firebase'

class BoardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'PCology'
    }
  }
  constructor() {
    super()
    this.ref = firebase.firestore().collection('events')
    this.unsubscribe = null
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
    this.state = {
      isLoading: true,
      events: [],
      isOpen: false
    }
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }
  onCollectionUpdate = querySnapshot => {
    const events = []
    querySnapshot.forEach(doc => {
      const { title, description, hostedBy, category } = doc.data()
      events.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        hostedBy,
        category
      })
    })
    this.setState({
      events,
      isLoading: false
    })
  }
  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen
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
      <React.Fragment>
        <View style={styles.subcontainer}>
          <Button
            backgroundColor="#040F3D"
            color="#4BFFA5"
            style={styles.button}
            leftIcon={{
              name: 'align-justify',
              type: 'font-awesome',
              color: '#4BFFA5'
            }}
            title="Κατηγορίες"
            onPress={() => this.props.navigation.navigate('Categories')}
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
        <ScrollView style={styles.container}>
          <List>
            {this.state.events.map((item, i) => (
              <View style={{ backgroundColor: '#C6C4C5', color: "#040F3D" }}>
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{
                    name: 'book',
                    type: 'font-awesome',
                    color: '#040F3D'
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('BoardDetails', {
                      eventskey: `${JSON.stringify(item.key)}`
                    })
                  }}
                />
              </View>
            ))}
          </List>
        </ScrollView>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
    backgroundColor: '#c6c4c5'
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

export default BoardScreen
//backgroundColor: "#47d1d1"
