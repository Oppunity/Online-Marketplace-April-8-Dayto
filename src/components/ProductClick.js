import React , {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { withNavigation } from 'react-navigation';



type Props = {};

class ProductClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            screenWidth: Dimensions.get("window").width,
           
           
            
        
         };
    }

  
      

    render(){
       // console.log(this.props.item);
     
      

        return(          
 
            <View style = {{alignItems: 'center', flex:1, width: 100 + "%", backgroundColor:'black', height: 270, borderWidth: 1, borderColor: 'white', marginBottom: 70}}> 
                    
               




                <View style = {styles.productPicture}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductClick')}> 
                <Image source = {{uri: 'https://www.84lumber.com/media/1333/lumber_cover.jpg'}}
                style = {{ height: 100 + '%',
                width: 100+ '%',}}/>
                </TouchableOpacity>
                
               <Text style = {{marginLeft: '3%',  top: '5%', color: 'white', fontSize: 14, fontStyle: 'italic'}}>Parr Lumber</Text>
                
                <Text style = {{marginLeft: '3%',  top: '7%', color: 'white', fontSize: 14}}>2 in. x 4 in. x 8 ft. Redwood Lumber </Text>

                <Text style = {{marginLeft: '3%',  top: '9%', color: 'white', fontSize: 16}}>$24.55 </Text>
                <TouchableOpacity style={{backgroundColor: 'dodgerblue', padding: 5, width: '90%', height: 35, justifyContent: 'center', borderRadius: 5, borderWidth: 1, left: 10, top: 30}}
                           >
          
                           <Text style = {{color: 'white', fontWeight: '500', textAlign: 'center'}}> Add to cart </Text>

               </TouchableOpacity>
                

            
               

                       

                </View>


                </View>
           
        );
    }
}

const styles = StyleSheet.create({
   


    
    productPicture: {
        height: 130,
        width: 300,
        marginRight: 1,
        marginBottom: 60,
        
    },
    

  
});


export default withNavigation(ProductClick);



