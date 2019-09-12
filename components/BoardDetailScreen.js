import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View , Image } from 'react-native'
import { List, ListItem, Text, Card, Button } from 'react-native-elements'

import firebase from '../Firebase'

class BoardDetailScreen extends Component {
  static navigationOptions = {
    title: 'Λεπτομέρειες άρθρου'
  }
  constructor() {
    super()
    this.state = {
      isLoading: true,
      event: {},
      key: ''
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
        this.setState({
          event: doc.data(),
          key: doc.id,
          isLoading: false
        })
      } else {
        console.log('No such document!')
      }
    })
  }
  deleteBoard(key) {
    const { navigation } = this.props
    this.setState({
      isLoading: true
    })
    firebase
      .firestore()
      .collection('events')
      .doc(key)
      .delete()
      .then(() => {
        console.log('Το άρθρο διαγράφηκε!')
        this.setState({
          isLoading: false
        })
        navigation.navigate('Board')
      })
      .catch(error => {
        console.error('Error removing document: ', error)
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
      <React.Fragment>
        
          <View style={styles.container}>
            <View>
              <Image source={require("../assets/categoryImages/development.jpg")} left= "0"
              right="0"
              top="0"
              bottom="0"  />
            </View>
            <View>
              <Text
                h4
                style={{
                  color: '#040F3D',
                  marginLeft: '3%',
                  marginRight: '3%',
                  marginBottom: '3%'
                }}
              >
                {this.state.event.title}
              </Text>
            </View>
            <View>
              <Text
                h6
                style={{
                  color: '#040F3D',
                  marginLeft: '3%',
                  marginRight: '3%',
                  marginBottom: '3%'
                }}
              >
                Κατηγορία: {this.state.event.category}
              </Text>
            </View>
            <View>
              <Text
                h5
                style={{
                  color: '#040F3D',
                  marginLeft: '3%',
                  marginRight: '3%',
                  marginBottom: '3%'
                }}
              >
                {this.state.event.description}
              </Text>
              {/* 
            <View>
              <Text h4>{this.state.event.hostedBy}</Text>
            </View>*/}
            </View>
            {/* 
          <View style={styles.detailButton}>
            <Button
              large
              backgroundColor={'#CCCCCC'}
              leftIcon={{ name: 'edit' }}
              title="Επεξεργασία"
              onPress={() => {
                this.props.navigation.navigate('EditBoard', {
                  eventskey: `${JSON.stringify(this.state.key)}`
                })
              }}
            />
          </View>

          <View style={styles.detailButton}>
            <Button
              large
              backgroundColor={'#999999'}
              color={'#FFFFFF'}
              leftIcon={{ name: 'delete' }}
              title="Διαγραφή"
              onPress={() => this.deleteBoard(this.state.key)}
            />
          </View>
*/}
                  
            <Button
              large
              buttonStyle={{ borderRadius: 30 }}
              backgroundColor={'#4BFFA5'}
              leftIcon={{ name: 'lock' , color: '#040F3D' }}
              color={"#040F3D"}
              title="Σύνδεση"
              onPress={() => this.props.navigation.navigate('Login')}
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
    backgroundColor: '#C6C4C5',
  },
  subContainer: {
    flex: 1
    //paddingBottom: 20,
    //borderBottomWidth: 2,
    // borderBottomColor: '#CCCCCC',
    //backgroundColor: '#0052cc'
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66c2ff'
  },
  detailButton: {
    marginTop: 10,
    borderRadius: 30
  }
})

export default BoardDetailScreen
