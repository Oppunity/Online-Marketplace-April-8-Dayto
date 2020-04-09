import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Icon} from 'native-base'
import {  SearchBar } from 'react-native-elements';



export default class AccountScreen extends React.Component{
    static navigationOptions = {
        header: null,
        drawerIcon: ({tintColor }) =>
        <Icon name = "md-contact" 
      style={{fontSize: 24, color: tintColor}}/>

    }
  render(){
  return (
    <View style={styles.container}>
        <View style = {{position: 'absolute', backgroundColor: 'black', width: '100%', height: '20%', top: 0, left: 0}}/>
        
                <Icon  name = "menu" 
                onPress = {() => this.props.navigation.openDrawer()}
                style = {{zIndex: 2, height: 40, width: 40, position: 'absolute', top: '6%', left: 30, color: 'white'}}/>

                <Image source = {{uri: 'https://cdnassets.hw.net/f4/12/d613149a4677b09ca08dd760fe34/parr-lumber.png'}}
                style = {{height: '15%', width: '18%', position: 'absolute', left: '8%', top: '4%'}}/>

                <SearchBar 
                placeholder="Search products..."
                round
                fontColor="black"

                
                containerStyle={{backgroundColor: 'black', width: '60%', height: '2%', left: '30%', borderWidth: 1, borderRadius: 10, position: 'absolute', top: '4%', }}

               /> 
               

            <View style = {{flexDirection: 'row', top: '10.5%', marginTop: 10, left: 10, height: 70, width: '95%', position: 'absolute', borderColor: 'white',}}>
              <TouchableOpacity style={{backgroundColor: 'dodgerblue', padding: 5, width: 150, height: 40, justifyContent: 'center', borderRadius: 5, borderWidth: 1, left: 10, top: 110}}
                           >
          
                           <Text style = {{color: 'white', fontWeight: '500', textAlign: 'center'}}> Sign In </Text>

               </TouchableOpacity>
              

              
                </View>
        
    </View>
  );
}
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
