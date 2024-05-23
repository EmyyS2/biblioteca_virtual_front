import axios from "axios";
import React, { useState } from "react";
import {ScrollView, Image, StatusBar, StyleSheet, Text, TextInput,TouchableOpacity, View, ImageBackground } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";

const CadastroLivros: React.FC = () => {
    const [titulo, setTitulo] = useState<string>('');
    const [autor, setAutor] = useState<string>('');
    const [genero, setGenero] = useState<string>('');
    const [data_lancamento, setDataLancamento] = useState<string>('');
    const [editora, setEditora] = useState<string>('');
    const [sinopse, setSinopse] = useState<string>('');
    const [avaliacao, setAvaliacao] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const CadastroProduto = async () => {
        try{
        const formData=new FormData();
        formData.append('titulo', titulo);
        formData.append('autor', autor);
        formData.append('genero', genero);
        formData.append('data_lancamento', data_lancamento);
        formData.append('editora', editora);
        formData.append('sinopse', sinopse);
        formData.append('avaliacao', avaliacao);
        formData.append('imagem',{
            uri:imagem,
            type:'image/jpeg',
            name:new Date()+ '.jpg',
        });

const response= await axios.post('http://10.137.11.217:8000/api/clientes', formData,{
    headers:{
        'Content-Type':'multipart/form-data'
    }
});
        }catch(error){
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000000" barStyle="light-content" />
            <ImageBackground source={require('../assets/images/Fundo.png')} resizeMode="cover" style={styles.container}></ImageBackground>
<Head/>
            <View style={styles.header}>
            <Image source={require('../assets/images/Icon.png')} style={styles.headerIcon} />
            </View>

            <View style={styles.form}>

            <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━◎</Text>


            <TextInput
                    style={styles.input}
                    placeholder="Título:"
                    value={titulo}
                    onChangeText={setTitulo}/>

                <TextInput
                    style={styles.input}
                    placeholder="Autor:"
                    value={autor}
                    onChangeText={setAutor}/>

                <TextInput
                    style={styles.input}
                    placeholder="Gênero:"
                    value={genero}
                    onChangeText={setGenero}
                    multiline />
                    
                <TextInput
                    style={styles.input}
                    placeholder="Data de lançamento:"
                    value={data_lancamento}
                    onChangeText={setDataLancamento}
                    multiline />

                <TextInput
                    style={styles.input}
                    placeholder="Editora:"
                    value={editora}
                    onChangeText={setEditora}
                    multiline />

                <TextInput
                    style={styles.input}
                    placeholder="Sinopse:"
                    value={sinopse}
                    onChangeText={setSinopse}
                    multiline />

                <TextInput
                    style={styles.input}
                    placeholder="Avaliação:"
                    value={avaliacao}
                    onChangeText={setAvaliacao}
                    multiline />
                    
                <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━◎</Text>

                    <Footer/>
               
               
              

                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        paddingVertical: 30,
    },
    headerIcon: {
        width: 300,
        height: 300,
        marginBottom: -90,
        marginTop: -90
    },
    form: {
        padding: 10,
       
        borderRadius: 10,
    },
    input: {
        fontWeight: 'bold',
        height: 50,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 10
    },
    imageButton: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
    },
    imageButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 1000,
        marginBottom: 10,
        borderWidth: 10,
        borderColor: '#000000',
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    linhaTitle: {
        color:'#2C7DA0',
        marginTop: 10
    }
});

export default CadastroLivros;