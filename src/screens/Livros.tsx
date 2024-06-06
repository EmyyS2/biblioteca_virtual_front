import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, StyleSheet, Text, TouchableOpacity, StatusBar, FlatList, View, TextInput, ImageBackground } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";
import { ScrollView } from "react-native-gesture-handler";
import HeadListagem from "../components/HeadListagem";
import EdicaoLivros from "./EdicaoLivros";
import { useNavigation } from "@react-navigation/native";

interface Livro {
    id: string;
    titulo: string;
    autor: string;
    data_de_lancamento: string;
    editora: string;
    sinopse: string;
    genero: string;
    avaliacao: string;

}
const navigation = useNavigation();
const renderItem = ({ item }: { item: Livro }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.textTitulo}>{item.titulo}</Text>
        <Text style={styles.textAutor}>{item.autor}</Text>
        <Text style={styles.textData}>{item.data_de_lancamento}</Text>
        <Text style={styles.textEditora}>{item.editora}</Text>
        <Text style={styles.textSinopse}>{item.sinopse}</Text>
        <Text style={styles.textGenero}>{item.genero}</Text>
        <Text style={styles.textAvaliacao}>{item.avaliacao}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Editar')}>
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>

    </TouchableOpacity>    
);
function Listagem(): React.JSX.Element {
    const [livro, setLivro] = useState<Livro[]>([]);
   
    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.218/biblioteca_virtual/public/api/livros/visualizar');
                setLivro(response.data);

                console.log(livro)
            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);
    console.log(renderItem);


    return (

        <View style={styles.container}>

            <ImageBackground source={require('../assets/images/fundo.png')} style={styles.background} />
            <StatusBar backgroundColor='#000000' barStyle='light-content' />
            <HeadListagem />


            <View style={styles.header}>
                <Image source={require('../assets/images/Icon.png')} style={styles.headerIcon} />
            </View>

            <View style={styles.alinhapesquisa} >
                <Image style={styles.pesquisaicon} source={require('../assets/images/lupinha.png')} />

                <TextInput style={styles.pesquisa} placeholder="Pesquisar..." />
            </View>

            <FlatList style={styles.container}
                showsVerticalScrollIndicator={false}
                data={livro}
                renderItem={renderItem}
                keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
                contentContainerStyle={styles.menuList}
            />
            <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━◎</Text>

            <Footer />
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linhaTitle: {
        color: '#2C7DA0',
        marginBottom: -45,
        marginTop: 40
    },
    scroll: {},

    background: {
        height: 760,
        flex: 1
    },
    imageButton: {

        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
    },
    imageButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    header: {
        alignItems: 'center',
        paddingVertical: 30
    },
    headerIcon: {
        width: 250,
        height: 250,
        marginBottom: -20,
        marginTop: -100
    },
    button: {
        backgroundColor: '#2C7DA0',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: -5
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: 'white',
        padding: 19,
        marginVertical: 7,
        marginHorizontal: 15,
        borderRadius: 19,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        marginTop: 30
    },
    textTitulo: {
        fontSize: 30,
        color: '#00000',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textAutor: {
        fontSize: 20,
        color: '#00000',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 5,
    },
    textGenero: {
        fontSize: 20,
        color: '#00000',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 5,
    },
    textData: {
        fontSize: 15,
        color: '#00000',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 5,
    },
    textEditora: {
        fontSize: 15,
        color: '#00000',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 5,
    },
    textSinopse: {
        fontSize: 29,
        color: '#00000',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 5,
    },
    textAvaliacao: {
        fontSize: 15,
        color: '#00000',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 5,
    },
    image: {
        height: 100,
        width: 170,
        borderRadius: 10,
        borderWidth: 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15
    },
    pesquisa: {
        fontSize: 13,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        borderRadius: 100,
        alignItems: 'center',
        width: '78%',
        paddingLeft: 50,
        marginTop: -50,
        marginLeft: -10
    },
    alinhapesquisa: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    pesquisaicon: {
        width: 90,
        height: 90,
        marginTop: -40
    },
    linha: {
        color: 'white',
        marginTop: -8,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    menuList: {
        flexGrow: 1
    },
});
export default Listagem;