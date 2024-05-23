import React from "react";
import {Image,StyleSheet,  TouchableOpacity, View } from "react-native";

function  Footer(): React.JSX.Element{
    return(
        <View style={styles.footer}>
   <TouchableOpacity >
  <Image source={require('../assets/images/compra.png')}/>
   </TouchableOpacity >
   <TouchableOpacity >
   <Image source={require('../assets/images/catalogo.png')}/>
   </TouchableOpacity>
   <TouchableOpacity>
   <Image source={require('../assets/images/usuario.png')}/>
   </TouchableOpacity>


        </View>
    );
}

const styles= StyleSheet.create({
    menuList:{
        flexGrow:1
    },
    footer:{
        borderTopWidth: 0.2,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        paddingVertical:10
    },
    footerIcon:{
        width:40,
        height:40
    }
})

export default Footer;