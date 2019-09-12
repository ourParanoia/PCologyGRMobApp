import React, { Component } from 'react'

import { StyleSheet, Text, View, Animated } from 'react-native'
import { List, ListItem, Button, Icon } from 'react-native-elements'

class ExpandPage extends React.Component {
  static navigationOptions = { title: '' }
  constructor() {
    super()
    this.y_translate = new Animated.Value(0)
    this.state = {
      menu_expanded: false,
      isLoading: true
    }
  }
  componentDidMount() {
    const { navigation } = this.props
    this.setState({
      isLoading: true
    })
  }
  openMenu() {
    this.setState(
      {
        menu_expanded: true
      },
      () => {
        this.y_translate.setValue(0)
        Animated.spring(this.y_translate, {
          toValue: 1,
          friction: 3
        }).start()
      }
    )
    const { navigation } = this.props
  }

  hideMenu() {
    this.setState(
      {
        menu_expanded: false
      },
      () => {
        this.y_translate.setValue(1)
        Animated.spring(this.y_translate, {
          toValue: 0,
          friction: 4
        }).start()
      }
    )
    const { navigation } = this.props
  }

  render() {
    const menu_moveY = this.y_translate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -300]
    })

    return (
      <View style={styles.container}>
        <View style={styles.body} />
        <Animated.View
          style={[
            styles.footer_menu,
            {
              transform: [
                {
                  translateY: menu_moveY
                }
              ]
            }
          ]}
        >
          {!this.state.menu_expanded && (
            <View style={styles.tip_menu}>
              <Button
                onPress={this.openMenu.bind(this)}
                backgroundColor="#00ffcc"
                color="black"
                title="Extras"
              />
            </View>
          )}

          {this.state.menu_expanded && (
            <View>
              <Button onPress={this.hideMenu.bind(this)} title="Ακύρωση" />
              <Text>Η επίσημη εφαρμογή του:</Text>
              <Text>pcology.gr</Text>
              <Text>Email επικοινωνίας:</Text>
              <Text>vg.appsolution@gmail.com</Text>
            </View>
          )}
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body: {
    flex: 1,
    backgroundColor: '#66c2ff'
  },
  footer_menu: {
    position: 'absolute',
    width: 600,
    height: 350,
    bottom: -300,
    backgroundColor: '#00ffcc',
    alignItems: 'center'
  },
  tip_menu: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#fff'
  },
  button_label: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
export default ExpandPage
