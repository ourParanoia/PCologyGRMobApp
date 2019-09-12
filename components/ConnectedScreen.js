import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import { List, ListItem, Button, Icon } from 'react-native-elements'
import firebase from '../Firebase'
import * as FirebaseAPI from '../modules/firebaseAPI'

class ConnectedScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'PCology'
    }
  }
  constructor() {
    super()
    this.ref = firebase.firestore().collection('events')
    this.unsubscribe = null
    this.state = {
      isLoading: true,
      events: []
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
            backgroundColor="#0052cc"
            color="white"
            style={styles.button}
            leftIcon={{
              name: 'align-justify',
              type: 'font-awesome',
              color: 'white'
            }}
            title="Κατηγορίες"
            onPress={() => this.props.navigation.navigate('CategoriesCon')}
          />
          <Button
            backgroundColor="#0052cc"
            color="white"
            style={styles.button}
            leftIcon={{
              name: 'plus',
              type: 'font-awesome',
              color: 'white'
            }}
            title="Νέο"
            onPress={() => this.props.navigation.navigate('AddBoard')}
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
            onPress={() => {
              FirebaseAPI.logoutUser()
              navigation.navigate('Board')
            }}
          />
        </View>
        <ScrollView style={styles.container}>
          <List>
            {this.state.events.map((item, i) => (
              <View style={{ backgroundColor: '#00ffcc' }}>
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{
                    name: 'book',
                    type: 'font-awesome',
                    color: 'black'
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('BoardDetailsCon', {
                      eventskey: `${JSON.stringify(item.key)}`
                    })
                  }}
                />
              </View>
            ))}
          </List>
          <Button
            buttonStyle={{
              position: 'absolute',
              width: 56,
              height: 56,
              alignItems: 'center',
              justifyContent: 'center',
              right: 20,
              bottom: 20,
              backgroundColor: '#03A9F4',
              borderRadius: 30,
              elevation: 0
            }}
            title="+"
            onPress={() => {
              this.props.navigation.navigate('AddBoard')
            }}
          />
        </ScrollView>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
    backgroundColor: '#66c2ff'
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
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 0
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  },
  subcontainer: {
    flexDirection: 'row',
    backgroundColor: '#0052cc'
  },
  button: {
    backgroundColor: 'green',
    width: '50%',
    height: 40
  }
})

export default ConnectedScreen
//backgroundColor: "#47d1d1"
