import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import BoardScreen from './components/BoardScreen'
import BoardDetailScreen from './components/BoardDetailScreen'
import BoardDetailConScreen from './components/BoardDetailConScreen'
import AddBoardScreen from './components/AddBoardScreen'
import EditBoardScreen from './components/EditBoardScreen'
import BeginScreen from './components/BeginScreen'
import ChooseScreen from './components/ChooseScreen'
import CategoriesScreen from './components/CategoriesScreen'
import CategoriesConScreen from './components/CategoriesConScreen'
import NewsScreen from './components/NewsScreen'
import NewsConScreen from './components/NewsConScreen'
import DevelopmentScreen from './components/DevelopmentScreen'
import DevelopmentConScreen from './components/DevelopmentConScreen'
import StoriesScreen from './components/StoriesScreen'
import StoriesConScreen from './components/StoriesConScreen'
import TipsScreen from './components/TipsScreen'
import TipsConScreen from './components/TipsConScreen'
import PhotoshootingScreen from './components/PhotoshootingScreen'
import PhotoshootingConScreen from './components/PhotoshootingConScreen'
import InterestingScreen from './components/InterestingScreen'
import InterestingConScreen from './components/InterestingConScreen'
import ExpandScreen from './components/ExpandPage'
import LoginScreen from './components/LoginScreen'
import AuthLoadingScreen from './components/AuthLoadingScreen'
import ConnectedScreen from './components/ConnectedScreen'
const RootStack = createStackNavigator(
  {
    Begin: BeginScreen,
    Choose: ChooseScreen,
    Board: BoardScreen,
    Categories: CategoriesScreen,
    CategoriesCon: CategoriesConScreen,
    BoardDetails: BoardDetailScreen,
    BoardDetailsCon: BoardDetailConScreen,
    AddBoard: AddBoardScreen,
    EditBoard: EditBoardScreen,
    News: NewsScreen,
    NewsCon: NewsConScreen,
    Development: DevelopmentScreen,
    DevelopmentCon: DevelopmentConScreen,
    Stories: StoriesScreen,
    StoriesCon: StoriesConScreen,
    Tips: TipsScreen,
    TipsCon: TipsConScreen,
    Photoshooting: PhotoshootingScreen,
    PhotoshootingCon: PhotoshootingConScreen,
    Interesting: InterestingScreen,
    InterestingCon: InterestingConScreen,
    Login: LoginScreen,
    Auth: AuthLoadingScreen,
    Connected: ConnectedScreen,
    Expand: ExpandScreen
  },
  {
    initialRouteName: 'Begin',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#040F3D',
      },
      headerTintColor: '#4BFFA5',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerBackTitle: null
    }
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6C4C5',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
