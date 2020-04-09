import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Image, FlatList, Text, TouchableOpacity, TextInput, Alert, ScrollView, } from 'react-native';
import normalize from 'react-native-normalize'
import { Icon } from 'native-base'
import {  SearchBar, Button } from 'react-native-elements';
import House from '../components/House'
import Modal from "react-native-modal";


export default class HomeScreenPage extends React.Component{
    static navigationOptions = {
        header: null,
        drawerIcon: ({ tintColor }) =>
        <Icon name = "home"
      style={{fontSize: 24, color: tintColor}}/>

    }
    constructor(props) {
        super(props);
        this.state = {
              modalVisible: false, //hides modal when load app

            prices:1,
            pricesone:1,
            pricestwo:1,
            pricesfourth:0,
            count: 0,
        marketitem: [ {pic: "https://images.homedepot-static.com/productImages/712f88b9-407a-4dc4-942f-09ccdf813fd3/svn/framing-studs-161640-64_1000.jpg", nameone: '2 in. x 4 in. x 8 ft. Redwood Lumber', price: 1}, {pic: "https://images.homedepot-static.com/productImages/62a70196-70dc-49a1-9af8-e536ed0a3b88/svn/sierra-pacific-industries-wood-fence-pickets-458830-64_1000.jpg",  nameone: '5/8 in. x 5 in. x 6 ft. Cedar Fence Picket', price: 1.5},  {pic: "https://www.84lumber.com/media/1333/lumber_cover.jpg",  nameone: '2 in. x 4 in. x 8 ft. Redwood Lumber', price: 4}, 
        //"https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Devil_Emoji_grande.png?v=1571606036"
        ],
        marketitem1: [ {pic: "https://images.homedepot-static.com/productImages/74fc4971-bc31-4cd8-bb5b-12c15a8565c7/svn/grip-rite-drywall-screws-114cdws1-64_1000.jpg", nameone: '6 x 1-1/4 in. Philips Bugle-Head Screw', price: 1}, {pic: "https://images.homedepot-static.com/productImages/cfddb455-d228-4149-9c8b-9f3387d46006/svn/grip-rite-collated-framing-nails-gr08rhg1m-64_400_compressed.jpg",  nameone: '2-3/8 in. x 0.113 Ring Shank Nails', price: 1.5},  {pic: "https://www.84lumber.com/media/1333/lumber_cover.jpg",  nameone: '2 in. x 4 in. x 8 ft. Redwood Lumber', price: 4}, 
        //"https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Devil_Emoji_grande.png?v=1571606036"
        ],
        marketitem2: [ {pic: "https://images.homedepot-static.com/productImages/855df4ec-e09a-4391-b7b4-4ba82362808b/svn/gray-owens-corning-roof-shingles-hk20-64_1000.jpg", nameone: 'Estate Gray Laminate Architectural Shingles', price: 1}, {pic: "https://images.homedepot-static.com/productImages/55b548ca-df89-461e-85a9-a72fab5bccf3/svn/metal-sales-metal-roofing-2313317-64_1000.jpg",  nameone: '10 ft. Rib Steel Roof Panel in Charcoal', price: 1.5},  {pic: "https://www.84lumber.com/media/1333/lumber_cover.jpg",  nameone: '2 in. x 4 in. x 8 ft. Redwood Lumber', price: 4}, 
        //"https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Devil_Emoji_grande.png?v=1571606036"
        ],
        numColumnss:1, 
        quality: 0,
        }
    }

 
     setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

   
    onButtonPress = () => {
        this.setState({
            prices: this.state.pricesfourth,
            prices: 0,
        });
        if (this.state.count == 0 ) {
            Alert.alert("Added to Cart", "Added 2in. x 4 in. x 8 ft. (QTY: 2) to Cart");
        } else {
            Alert.alert("Added to Cart", "5/8 in. x 5 in. x 6 ft. Cedar Fence Picket (QTY: 3) to Cart")
        }
        this.state.count = 1
      }

      onButtonPressZero = () => {
        this.setState({
            prices: this.state.pricesfourth,
            prices: 0,
        });
        Alert.alert("Added to Cart", "Added 6 x 1-1/4 in. Philips Buygle-Head Screw (QTY: 3) to Cart")
      }
    
      onButtonPressOne = () => {
        this.setState({
            pricesone: this.state.pricesfourth,
            pricesone: 0,
        });
        Alert.alert("Added to Cart", "Added 6 x 1-1/4in. Philips Bugle-Head Screw (QTY: 15) to Cart")
      }

      
      onButtonPressTwo = () => {
          
        this.setState({
            pricestwo: this.state.pricesfourth,
            pricestwo: 0,
        });
        alert('10 ft. Rib Steel Roof Panel in Charcoal (QTY: 4) to Cart')
      }
    

  render(){  

 

  return (
    <Fragment>
    

    <View style={{zIndex: 1, height: '100%', width: '100%', backgroundColor: 'black', position: 'absolute'}}>
    {/*header  */}
    <View style = {{zIndex: 1, position: 'absolute', backgroundColor: 'black', width: '100%', height: '18%', top: 0, left: 0, borderColor: 'white', }}>
        
                <Icon  name = "menu" 
                onPress = {() => this.props.navigation.openDrawer()}
                style = {{zIndex: 3, height: '30%', width: '20%', position: 'absolute', top: '20%', left: '5%', color: 'white', }}/>

                {/*parrlumber logo  */}
                <Image 
                  
                source = {{uri: 'https://cdnassets.hw.net/f4/12/d613149a4677b09ca08dd760fe34/parr-lumber.png'}}
                style = {{ left: 110, height: 80, width: 100,  top: '6%', position: 'absolute', resizeMode: 'contain' }}/>

                 {/*searchbar  */}
                <SearchBar 
                placeholder="Search products..."
                round
                fontColor="black"
                containerStyle={{zIndex: 3, backgroundColor: 'black', width: '40%', height: '2%', left: '30%', borderWidth: 1, borderRadius: 10, position: 'absolute', top: '20%', }}
               /> 

                {/* sign in button  */}
               <Button
  title="Sign In"
  type="outline"
  containerStyle={{zIndex: 3, width: '10%', left: '85%', top: '20%' }}
  onPress={() => this.props.navigation.navigate('LogIn')}
/>
</View> 






{/* vertical scrollview of whole website*/}
             <ScrollView
                scrollEventThrottle = {16}>

{/*horizontal scrollview of homes with blueprints*/}
              <View style = {{zIndex: 1, left: '5%', backgroundColor: 'black', height: '100%', width:'100%', position: 'absolute'}}>
                <Text style = {{left: '1.2%', fontFamily: 'sans-serif', color: 'white', fontSize: 22, top: 220, position: 'absolute'}}>Select a home to build </Text>
                <Text style = {{left: '1.2%', fontFamily: 'sans-serif', color: 'gray', fontSize: 20, top: 250, position: 'absolute'}}>A selection of homes that come with blueprints and materials.
                </Text>  

            
                    <View style = {{ height: 350, top: 300, marginBottom: 40 }}> 
                   
                  <ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator={true}>
                    
                    <TouchableOpacity onPress = {()=> this.props.navigation.navigate('HomeClickPage')}> 
                    <House
                    
                   
                     imageUri ={{uri:'https://ssl.cdn-redfin.com/photo/45/mbpaddedwide/408/genMid.FR19242408_1.jpg'}}
                    />
                    </TouchableOpacity>

                    <House imageUri ={{uri:'https://66.media.tumblr.com/01d5b773173c39a69236138458ca2482/tumblr_p7eck8xuUC1ss7ju0o1_400.jpg'}}
                    />


                    <House imageUri ={{uri:'https://i.pinimg.com/originals/2e/e4/a2/2ee4a29a105a7ae13cd42b478b1c12db.jpg'}}
                    />

                     <House imageUri ={{uri:'https://i.pinimg.com/originals/12/e7/0b/12e70b83fbb22fa7346afd8b19c779eb.jpg'}}
                    />

                    <House imageUri ={{uri:'https://ssl.cdn-redfin.com/photo/45/mbpaddedwide/408/genMid.FR19242408_1.jpg'}}
                    />

                    <House imageUri ={{uri:'https://cdn.midwesthome.com/wp-content/uploads/sites/2/2018/09/img_2018-09_Luxury-Home-Tour_Divine-Custom-Homes_Back-Exterior_G.jpg'}}
                    />

                     <House imageUri ={{uri:'https://i.pinimg.com/originals/96/a2/ba/96a2bac94fda16052e5bbda614cde785.jpg'}}
                    />

                    <House imageUri ={{uri:'https://www.bdrholdings.com/wp-content/uploads/2016/08/6214-intro-3.jpg'}}
                    />



                  </ScrollView>

                    </View>
               
              
               </View>


              {/*horizontal scrollview of lumber*/}
               <View style = {{left: '5%', top: 820, backgroundColor: 'black', height: '100%', width:'100%', position: 'absolute'}}>
                <Text style = {{left: '1.2%', fontFamily: 'sans-serif', color: 'white', fontSize: 22, top: 20, position: 'absolute'}}>Select type of lumber </Text>
                <Text style = {{left: '1.2%', fontFamily: 'sans-serif', color: 'gray', fontSize: 20, top: 50, position: 'absolute'}}>Selections include high quality softwoods and hardwoods.
                </Text>  

            
                    <View style = {{ height: 350, top: 100, marginBottom: 40 }}> 
                   
                  <ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator={true}>

                    <House imageUri ={{uri:'https://hardwoodstairtreads.com/wp-content/uploads/2018/04/hard_maple_stair_tread_grain-1.jpg'}}
                    />

                    <House imageUri ={{uri:'https://floorsunlimited.com/4090/barefoot-unfinished-flooring-select-and-better-red-oak-bfro214-sb.jpg'}}
                    />


                    <House imageUri ={{uri:'https://etmoore.com/images/flooring-lumber/hickory-hardwood@2x.jpg'}}
                    />

                     <House imageUri ={{uri:'https://www.rarewoodsusa.com/wp-content/uploads/2018/08/cherry-curly-1000x500.jpg'}}
                    />

                    <House imageUri ={{uri:'https://images.squarespace-cdn.com/content/v1/5303d68fe4b0ed5e6d1a13ae/1516734867381-ZRCQXNT63TB2NZ65H78P/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/CherryCoffeeTable4.jpg'}}
                    />

                    <House imageUri ={{uri:'https://www.omegacabinetry.com/-/media/omegacab/products/door_styles/clio/clio_5pc_cherry_raised_panel_cabinet_door_chestnut.jpg'}}
                    />

                   


                  </ScrollView>

                    </View>
               
              
               </View>

                 {/*horizontal scrollview of decking*/}
               <View style = {{left: '5%', top: 1420, backgroundColor: 'black', height: '100%', width:'100%', position: 'absolute'}}>
                <Text style = {{left: '1.2%', fontFamily: 'sans-serif', color: 'white', fontSize: 22, top: 20, position: 'absolute'}}>Select type of decking </Text>
                <Text style = {{left: '1.2%', fontFamily: 'sans-serif', color: 'gray', fontSize: 20, top: 50, position: 'absolute'}}>Extend your living space for relaxing and enjoying the beautiful views of mother nature. 
                </Text>  

            
                    <View style = {{ height: 350, top: 100, marginBottom: 40 }}> 
                   
                  <ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator={true}>

                    <House imageUri ={{uri:'https://www.thedeckingsuperstore.com/static/ef0e1945b08eff756451cbba1a8caae8/9f1b4/wrc-header2-e1547675504548.jpg'}}
                    />

                    <House imageUri ={{uri:'https://www.kwaterskibros.com/wp-content/uploads/2014/01/2x6-Clear-Mixed-Grain-All-Heart-Redwood.jpg'}}
                    />


                    <House imageUri ={{uri:'https://i.pinimg.com/originals/e9/34/2e/e9342e2c9eb48d0409f64eec478616ed.jpg'}}
                    />

                     <House imageUri ={{uri:'https://www.foxgal.com/wp-content/uploads/2014/08/trex-composite-deck.jpg'}}
                    />

                    <House imageUri ={{uri:'https://cdnassets.hw.net/e1/b6/70363c344cce8043b1bc42127f54/ipe-hero-tcm122-2195664.jpg'}}
                    />

                  

                   


                  </ScrollView>

                    </View>
               
              
               </View>

                {/*horizontal scrollview of cabinets*/}
               <View style = {{left: '5%', top: 2020, backgroundColor: 'black', height: '100%', width:'100%', position: 'absolute'}}>
                <Text style = {{left: '1.2%', fontFamily: 'sans-serif', color: 'white', fontSize: 22, top: 20, position: 'absolute'}}>Select type of cabinet </Text>
                <Text style = {{left: '1.2%', fontFamily: 'sans-serif', color: 'gray', fontSize: 20, top: 50, position: 'absolute'}}> Thousands of additional door styles, finishes and species 
                </Text>  

            
                    <View style = {{ height: 350, top: 100, marginBottom: 40 }}> 
                   
                  <ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator={true}>

                    <House imageUri ={{uri:'https://www.bergengranite.com/yuklemeler/blog/shaker-cabinets-image.png'}}
                    />

                    <House imageUri ={{uri:'https://blog.kitchenandbathclassics.com/hs-fs/hubfs/flat%20panel%20kitchen%20cabinet.jpg?width=1563&name=flat%20panel%20kitchen%20cabinet.jpg'}}
                    />


                    <House imageUri ={{uri:'https://blog.kitchenandbathclassics.com/hs-fs/hubfs/inset%20kitchen%20cabinets.jpg?width=1563&name=inset%20kitchen%20cabinets.jpg'}}
                    />

                     <House imageUri ={{uri:'https://blog.kitchenandbathclassics.com/hs-fs/hubfs/Cream-Distressed-Kitchen-Cabinets.jpeg?width=1563&name=Cream-Distressed-Kitchen-Cabinets.jpeg'}}
                    />

                    <House imageUri ={{uri:'https://blog.kitchenandbathclassics.com/hs-fs/hubfs/thermofoil%20cabinet%20doors.jpg?width=1563&name=thermofoil%20cabinet%20doors.jpg'}}
                    />

                  

                   


                  </ScrollView>

                    </View>
               
              
               </View>

               

                    
               </ScrollView>

             
        
    </View>
 </Fragment> 
    
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