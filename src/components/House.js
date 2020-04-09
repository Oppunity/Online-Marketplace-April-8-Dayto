import React, {Component } from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

class House extends Component{
    render(){
        return(
            <View style = {{height: 250, width: 350, marginLeft:20,}}>
                        <View> 
                        
                          <Image source = {this.props.imageUri}
                          style={{width: 330, height: 250, resizeMode: 'cover'}}/>
                          
                        </View>

                        
                    </View>
                    
        )
    }
}
export default House;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})