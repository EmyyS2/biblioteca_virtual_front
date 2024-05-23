import axios from "axios";
import React, { useState } from "react";
import {ScrollView, Image, StatusBar, StyleSheet, Text, TextInput,TouchableOpacity, View } from "react-native";

const CadastroLivros: React.FC = () => {
    const [titulo, setTitulo] = useState<string>('');
    const [autor, setAutor] = useState<string>('');
    const [genero, setGenero] = useState<string>('');
    const [data_de_lancamento, setDataDeLancamento] = useState<string>('');
    const [editora, setEditora] = useState<string>('');
    const [sinopse, setSinopse] = useState<string>('');
    const [avaliacao, setAvaliacao] = useState<string>('');
    const [error, setErrors] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const validateForm = () => {
        const newErrors: any = {};
   
        if (!titulo) {
          newErrors.titulo = "O campo título é obrigatório";
        }
        if (!autor) {
          newErrors.autor= "O campo autor é obrigatório";
        }
        if (!data_de_lancamento) {
          newErrors.data_de_lancamento= "O campo data de lançamento é obrigatório";
        }
        if (!editora) {
          newErrors.editora= "O campo editora é obrigatório";
        }
        if (!sinopse) {
          newErrors.sinopse = "O campo sinopse é obrigatório";
        }
        if (!genero) {
          newErrors.genero= "O campo genero é obrigatório";
        }
        if (!avaliacao) {
          newErrors.avaliacao= "O campo avaliacao é obrigatório";
        }
        if (!imagem) {
            newErrors.avaliacao= "O campo  é obrigatório";
          }
        setErrors(newErrors);
   
        return !Object.keys(newErrors).length;
      };

    const cadastrar = async () => {
        try{
        const formData=new FormData();
        formData.append('titulo', titulo);
        formData.append('autor', autor);
        formData.append('genero', genero);
        formData.append('data_de_lancamento', data_de_lancamento);
        formData.append('editora', editora);
        formData.append('sinopse', sinopse);
        formData.append('avaliacao', avaliacao);
        

const response= await axios.post('http://10.137.11.218:8000/api/livros/cadastro', formData,{
    headers:{
        'Content-Type':'multipart/form-data'
    }
});

console.log(response.data)
        }catch(error){
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000000" barStyle="light-content" />

            <View style={styles.header}>
            <Image source={require('../assets/images/Icon.png')} style={styles.headerIcon} />
            </View>

            <ScrollView style={styles.scroll}>

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
                    value={data_de_lancamento}
                    onChangeText={setDataDeLancamento}
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

                <TouchableOpacity style={styles.button} onPress={cadastrar}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                    
                <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━◎</Text>
                    
                <View style={styles.footer}>

                
                </View>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C0C0C0' ,
        flex: 1
    },
    footer: {
        backgroundColor: '#C0C0C0',
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        height: 40,
        width: 40
    },
    header: {
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        paddingVertical: 30,
    },
    headerIcon: {
        width: 200,
        height: 200,
        marginBottom: -60,
        marginTop: -60
    },
    form: {
        padding: 10,
        backgroundColor: '#C0C0C0',
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
        backgroundColor: '#2C7DA0',
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
    },
    scroll: {

    }
});

export default CadastroLivros;