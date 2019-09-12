import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text
} from 'react-native'
import { List, ListItem, Button, Icon } from 'react-native-elements'
import firebase from '../Firebase'

class NewsConScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Κατηγορία: News'
    }
  }
  constructor() {
    super()
    this.ref = firebase.firestore().collection('events')
    this.unsubscribe = null
    this.state = {
      isLoading: true,
      events: [],
      category: 'news'
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
              name: 'book',
              type: 'font-awesome',
              color: 'white'
            }}
            title="Όλα τα άρθρα"
            onPress={() => this.props.navigation.navigate('Board')}
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
            title="Σύνδεση"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
        <ScrollView style={styles.container}>
          <List>
            {this.state.events.map((item, i) => (
              <React.Fragment>
                {item.category === this.state.category ? (
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
                        this.props.navigation.navigate('BoardDetails', {
                          eventskey: `${JSON.stringify(item.key)}`
                        })
                      }}
                    />
                  </View>
                ) : null}
              </React.Fragment>
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

export default NewsConScreen
//backgroundColor: "#47d1d1"
