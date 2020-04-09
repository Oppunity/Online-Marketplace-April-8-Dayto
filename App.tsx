import React, { Component } from 'react';
import { SafeAreaView, View, Image, ScrollView } from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {AppRegistry, Platform } from 'react-native'
import HomeScreenPage from './src/screens/HomeScreenPage';
//import {parrone as appName} from './app.json'
import UploadPage from './src/screens/UploadPage';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import LogInPage from './src/screens/LogInPage';
import MainFeedPage from './src/screens/MainFeedPage';
import SignUpPage from './src/screens/SignUpPage';
import HomeClickPage from './src/screens/HomeClickPage';

const CustomDrawerComponent = (props) => (
  <SafeAreaView style = {{flex: 1}}>
  <View style = {{height: 150, backgroundColor: 'white'}}>
   <Image source = {{uri: 'https://freesvg.org/img/abstract-user-flat-4.png'}}
   style = {{height: 120, width: 120, borderRadius: 60, left: '10%', justifyContent: 'center'}}/>
  </View>
 
  

  <ScrollView>
  <DrawerItems {...props} />
  </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator(
 {
 Home: HomeScreenPage,
 Upload: UploadPage,
 MainFeed: MainFeedPage,
 SignUp: SignUpPage,
 },

{
 contentComponent: CustomDrawerComponent,
 drawerWidth: '30%'
 });









const RootStack = createStackNavigator ( { 
  Upload:UploadPage,
  HomeScreen: HomeScreenPage,
  HomeClickPage: HomeClickPage,
  LogIn: LogInPage,
  MainFeed: MainFeedPage,
  SignUp: SignUpPage,
  },
{
  initialRoute: 'HomeScreen',
  defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#fff'
  },
  headerTintColor: '#2E36FF'
}
}
)


const MainNavigation = createSwitchNavigator({
  HomeDrawer: AppDrawerNavigator,
  AuthStack: RootStack, // You will use this.props.navigation.replace('HomeDrawer') after login process.
})

//const AppContainer = createAppContainer(RootStack)
const AppContainer = createAppContainer(MainNavigation)
class App extends Component {
  render() {
    
      return (
          <AppContainer/> 
      )
  };
}


// Amplify from 'aws-amplify';
//import awsmobile from './aws-exports';
//Amplify.configure(awsmobile)


export default App;