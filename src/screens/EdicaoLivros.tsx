import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { ImageBackground, StatusBar, StyleSheet, ScrollView, TextInput, Image, Text, View, TouchableOpacity } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";
import CadastroLivros from "./CadastroLivros";


interface Livros{
    id: string;
    titulo:string;
    autor:string;
    data_de_lancamento:string;
    editora:string;
    sinopse:string;
    genero:string;
    avaliacao:string;
  
}
const EdicaoLivros: React.FC = () => {

    const [titulo, setTitulo] = useState<string>('');
    const [autor, setAutor] = useState<string>('');
    const [data_de_lancamento, setDataDeLancamento] = useState<string>('');
    const [editora, setEditora] = useState<string>('');
    const [sinopse, setSinopse] = useState<string>('');
    const [genero, setGenero] = useState<string>('');
    const [avaliacao, setAvaliacao] = useState<string>('');


    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const { Livros } = route.params;
            setTitulo(Livros.titulo);
            setAutor(Livros.autor);
            setDataDeLancamento(Livros.data_de_lancamento);
            setEditora(Livros.editora)
            setSinopse(Livros.sinopse)
            setGenero(Livros.genero)
            setAvaliacao(Livros.avaliacao)
    })

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/fundo.png')} style={styles.background} />


            <StatusBar backgroundColor="#000000" barStyle="light-content" />
            <Head />

            <View style={styles.header}>
                <Image source={require('../assets/images/Icon.png')} style={styles.headerIcon} />
            </View>

            <ScrollView style={styles.scroll}>

                <View style={styles.form}>

                    <TextInput
                        style={styles.input}
                        placeholder="Título:"
                        value={titulo}
                        onChangeText={setTitulo} />

                    <TextInput
                        style={styles.input}
                        placeholder="Autor:"
                        value={autor}
                        onChangeText={setAutor} />

                    <TextInput
                        style={styles.inputGenero}
                        placeholder="Gênero:"
                        value={genero}
                        onChangeText={setGenero}
                        multiline />

                    <TextInput
                        style={styles.inputDT}
                        placeholder="Data:"
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
 <TouchableOpacity style={styles.button}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                    <Text style={styles.linhaTitle}>◎━━━━━━━━━━━━━━━━◎.◈.◎━━━━━━━━━━━━━━━◎</Text>

                    <View>

                    </View>
                    <View style={styles.menuList}></View>
                    <Footer />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        height: 1000,
        flex: 1
    },
    container: {

        flex: 1,
    },
    inputGenero: {
        fontWeight: 'bold',
        height: 50,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
        width: '52%'
    },
    inputDT: {
        fontWeight: 'bold',
        height: 50,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: -55,
        width: '40%',
        marginLeft: 220
    },
    menuList: {
        flexGrow: 1
    },
    header: {
        alignItems: 'center',
        paddingVertical: 30
    },
    headerIcon: {
        width: 250,
        height: 250,
        marginBottom: -80,
        marginTop: -80
    },
    form: {
        padding: 10,
    },
    input: {
        fontWeight: 'bold',
        height: 50,
        borderWidth: 3,
        borderColor: '#2C7DA0',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 5
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
        alignItems: 'center',
        marginTop: 40,
        marginBottom: -20
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    linhaTitle: {
        color: '#2C7DA0',
        marginBottom: -45,
        marginTop: 40
    },
    scroll: {

    }
});

export default EdicaoLivros;