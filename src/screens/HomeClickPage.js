import React, {Component } from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Modal from 'modal-react-native-web';

export default class HomeClickPage extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            
         modalVisible: false, //hides modal when load app
                    }

 
                        
     }

       
  

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    
      return (
            <View style = {{height: '100%', width: '100%', backgroundColor: 'black', position: 'absolute' }}>
                        
                        
                          <Image source = {{uri:'https://ssl.cdn-redfin.com/photo/45/mbpaddedwide/408/genMid.FR19242408_1.jpg'}}
                          style={{position: 'absolute', margin: '5%', width: '25%', height: '50%', resizeMode: 'cover'}}/>

                          <Image                 
                source = {{uri: 'https://cdnassets.hw.net/f4/12/d613149a4677b09ca08dd760fe34/parr-lumber.png'}}
                style = {{zIndex: 3, height: 100, width: 250, left: '35%', top: '10%', position: 'absolute', }}/>

                <View style = {{position: 'absolute', borderColor: 'white', top: '30%',  width: '45%', height: '18%', left: '35%' }}> 
                <Text style ={{color: 'white', fontSize: 18, }}> 3 bd || 2 ba || 2,542 sqft </Text>
                 <Text style ={{color: 'dodgerblue', fontSize:18, fontStyle: 'italic'}}> Estimated Construction Time: 103 days </Text>
                 <Text style ={{color: 'dodgerblue', fontSize: 18,  fontStyle: 'italic' }}> Estimated Construction Cost: $245,309 </Text>

                 <View style = {{flexDirection: 'row'}}> 
                 
                  <TouchableOpacity 
                    onPress={() => {
            this.setModalVisible(true);
          }
                    }
                  style={{backgroundColor:'dodgerblue',  height: 50, padding: 5, width: '40%', justifyContent: 'center', borderRadius: 5, borderWidth: 1, top: 10}}
                            >
          
                           <Text style = {{color: 'white', fontWeight: '500', textAlign: 'center'}}> Contact Distributor </Text>

               </TouchableOpacity>

               
                 </View>

                 
                </View>

                <Image source = {{uri: 'https://tornadonet.online/wp-content/uploads/2019/01/3-bedroom-blueprints-single-story-3-bedroom-3-bath-house-plans-lovely-brilliant-e-story-3-bedroom-2-bath-3-bedroom-house-layout-ideas.jpg'}}
                style = {{position: 'absolute', width: '25%', height:'50%', right: '5%', top: '10%'}}/>
                     
                        
               <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
         >

                <View style = {{backgroundColor: 'black', height: 300, width: 300, top: 360, left: 450}} >
                
               <Text style = {{color: 'dodgerblue', fontSize: 16, top: '40%', left: '30%'}}> (909) 214-1324  </Text>

               <TouchableOpacity
               style = {{right: 20, top: 20, color: 'white', position: 'absolute'}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Icon  
                name={'fullscreen-exit'}  
                color='white'  
                size={25}  
            />  
              </TouchableOpacity>

                </View> 
                
                </Modal>
                        


                    </View>
      );
  }
}
