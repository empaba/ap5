import React, { Component } from 'react';
import {StyleSheet, View,Text,Image,TouchableOpacity,Dimensions, ScrollView,} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const imageWidth = screenHeight > screenWidth ? screenWidth / 5 : screenWidth / 5;


const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];


const perfil=('https://i.pinimg.com/originals/ce/7c/c5/ce7cc5a6055aa87bde90033611760f03.jpg');

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.seccion1}>
          <View style={styles.imgPerfil}>
            <Image source={{uri:perfil}} style={styles.perfilRedondo} />
          </View>
          <View style={styles.infoPerfilContainer}>
            <View style={styles.infoPerfil}>
              <View style={styles.boxPerfil}>
                <Text style={styles.post}>Posts</Text>
                <Text style={styles.post}>20</Text>
              </View>

              <View style={styles.boxPerfil}>
                <Text style={styles.Followers}>Followers</Text>
                <Text style={styles.Followers}>110304</Text>
              </View>

              <View style={styles.boxPerfil}>
                <Text style={styles.Followings}>Followings</Text>
                <Text style={styles.Followings}>1103</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.botonPerfil}>
            <Text>Edit Perfil</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.seccion2}>
          <ScrollView contentContainerStyle={{
              flexDirection:'row',
              flexWrap:'wrap',
              justifyContent:'space-evenly',
          }}>
          {images.map((item,index)=>(
            <View key={index + item + ''}>
              <Image source={{uri:item}} style={styles.galeriaImg}/>
            </View>
          ))}
          </ScrollView>
        </View>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:20,
    
  }, 
  seccion1:{
    flex:1,
    padding:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderColor:'purple',
    borderWidth:3,
    
  },
  imgPerfil: {
    bordercolor:'orange',
    borderWidth:3,

  },
  perfilRedondo: {
    width:imageWidth,
    height:imageWidth,
    borderRadius: 50,
    borderColor:'black',
    borderWidth:1,
  },

  infoPerfilContainer:{
    flex: 1,
    borderColor:'blue',
    borderWidth:3,
  },

  infoPerfil:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },

  boxPerfil: {
    flex:1,
    borderColor:'red',
    alignItems:'center',
  },
  post:{
    fontSize:13,
    fontWeight:'bold',
  },
  Followers:{
    fontSize:13,
    fontWeight:'bold',
  },
  Followings:{
    fontSize:13,
    fontWeight:'bold',
  },
  botonPerfil:{
    margin:6,
    backgroundColor:'grey',
    alignItems:'center',
    alignSelf:'flex-end',

  },
 
  seccion2: {
    flex:3,
    borderColor:'green',
    borderWidth:3,
    fontSize:10,
    fontWeight:'600',
    paddin:12,
    paddingTop:60
  
  },
galeriaImg:{
    width:imageWidth,
    height:imageWidth,
    marginTop:2,
    marginRight:2,
    marginLeft:2,

},

});


