import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Image,StyleSheet,  TouchableOpacity, View } from "react-native";

function  Footer(): React.JSX.Element{
    const navigation = useNavigation();
    return(
        <View style={styles.footer}>
   <TouchableOpacity  >
  <Image source={require('../assets/images/usuarioicon.png')}style={styles.footerIcon}/>
   </TouchableOpacity >

   <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}  >
  <Image source={require('../assets/images/escrever.png')}style={styles.footerIcon}/>
   </TouchableOpacity >

   <TouchableOpacity onPress={()=>navigation.navigate('Listagem')}>
   <Image source={require('../assets/images/livro.png')}style={styles.footerIcon}/>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=>navigation.navigate('')}>
   <Image source={require('../assets/images/cesta.png')}style={styles.footerIcon}/>
   </TouchableOpacity>


        </View>
    );
}

const styles= StyleSheet.create({
    menuList: {
        flexGrow: 1
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginTop: 50
    },
    footerIcon: {
        width: 40,
        height: 40,
    }
})

export default Footer;