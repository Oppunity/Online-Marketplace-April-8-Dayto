import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome'

import { withNavigation } from 'react-navigation';

//type Props = {};

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            screenWidth: Dimensions.get("window").width,  
         };
    }

  
      

    render(){
       // console.log(this.props.item);
     
      

        return(          
 
            <View style = {{ width: 100 + "%", backgroundColor:'black', borderWidth: 1, borderColor: 'white', marginBottom: "7%",height:200}}> 
                    
               




                <View style = {styles.productPicture}>

        
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductClick')}> 
                <Image source = {{uri: 'https://www.84lumber.com/media/1333/lumber_cover.jpg'}}
                style = {{ height: 70, width: 70 }}/>
                </TouchableOpacity>
                
               

                <View style = {{ width: '75%',  left: '25%', justifyContent: 'center',  borderWidth:1,top:-70}}>
                <Text style = {{margin: '3%', top: '2%', color: 'white', fontSize: 20, }}>2 in. x 4 in. x 8 ft. Redwood Lumber</Text>
                </View> 

                <View style = {{ width: '100%', right: '0%', top: -65 }}>
               <Text style = {{position: 'absolute', marginLeft: '3%', right: '43%',top: '0%', color: 'gray', fontSize: 14, fontStyle: 'italic'}}>Parr Lumber</Text>
                </View> 
                
                </View>




                    <View style={{width:'100%',height:40,top: -100}}>
                         <Text style = {{marginLeft: '3%',   color: 'white', fontSize: 35,right:'0%',position:'absolute'}}>$240.55 </Text>
                            <TextInput 
           placeholder = '       QTY'
           placeholderTextColor= "gray" 
           value = {1}
           style = {{ position:'absolute', color: 'white', height: 40, width: '30%', left: '3%', borderRadius: 10, borderColor: 'dimgray', backgroundColor: 'transparent', borderWidth: 1}}
           > 
           {/*onChangeText={eventComment => this.setState({ eventComment })}> */}
           </TextInput>
                         </View>
                  <TouchableOpacity style={{top:-80,backgroundColor: 'dodgerblue',  width: '90%', right: '5%', left: '5%', height: 35, justifyContent: 'center', borderRadius: 5, borderWidth: 1,  bottom: '5%',}}
                           >
          
                           <Text style = {{color: 'white', fontWeight: '500', textAlign: 'center'}}> Add to cart </Text>

               </TouchableOpacity>
                


                </View>
           
        );
    }
}

const styles = StyleSheet.create({
   


    
    productPicture: {
       
        width: 300,
        marginRight: 1,
        marginBottom: 60,
        
    },
    

  
});


export default withNavigation(Product);
