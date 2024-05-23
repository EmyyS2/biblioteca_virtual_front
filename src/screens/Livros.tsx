import React from "react";
import axios from "axios";
import { Image, StyleSheet, Text, TouchableOpacity, StatusBar, FlatList, View } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";


interface Livros {
    titulo:string;
    autor:string;
    data_lancamento:string;
    editora:string;
    sinopse:string;
    genero:string;
    avaliacao:string;
    image:any;
};

function Livros(): React.JSX.Element{

    const livros: Livros[] = [
        {titulo: 'É Assim Que Começa',
        autor: 'Colleen Hoover',
        genero: 'Psicologia e Vida familiar',
        data_lancamento: '2022-10-18',
        editora:  'Galera',
        sinopse: 'Lily Bloom continua administrando uma floricultura. Ela está oficialmente divorciada de seu ex-marido e agora dividem a guarda de Emerson.',
        avaliacao: 'É um romance leve, sem muito desastre, com um ótimo plot e extremamente envolvente. Apenas no fim do livro que eu esperava algo mais detalhado do casamento.',
        image: require('')},
    
        {titulo: 'Garota Exemplar',
        autor: 'Gillian Flynn',
        genero: 'Drama e Ficção detetive',
        data_lancamento: '2014-10-02',
        editora:  'Intrínseca',
        sinopse: 'Na manhã de seu quinto aniversário de casamento, Amy, a linda e inteligente esposa de Nick Dunne, desaparece de sua casa às margens do Rio Mississippi.',
        avaliacao: 'No começo, a história demorou um pouco pra me prender, mas foi melhorando mais pra metade do livro, que realmente me surpreendeu!',
        image: require('')},
    
        {titulo: 'Coraline',
        autor: 'Neil Gainman',
        genero: 'Fantasia e Ficção sombria',
        data_lancamento: '2002-07-02',
        editora:  'Darkside',
        sinopse: 'É um conto no qual uma jovem descobre uma porta para um misterioso mundo no palácio para onde acabou de se mudar.',
        avaliacao: 'Quem assistiu o filme antes de ler o livro não terá do que se queixar. É incrivelmente perfeito. Apesar de parecer um livro infantil, é surpreendente!',
        image: require('')},
    
        {titulo: 'Eu e Esse Meu Coração',
        autor: 'C. C. Hunter',
        genero: 'Mistério e Romance',
        data_lancamento: '2018-10-02',
        editora:  'Jangada',
        sinopse: 'Leah MacKenz não tem coração. O que a mantém viva é um coração artificial. Com os dias contados, ela cria uma lista de “coisas para fazer antes de morrer”.',
        avaliacao: 'Que livro incrível e fluído! Apesar de grande, os personagens são tão cativantes e o mistério se torna tão interessante que é impossível parar de ler!',
        image: require('')},
    ]

    const selecionarLivro = (produto: Livros) =>{
    
}

const renderItem = ({ item }: { item: Livros }) => (
 <TouchableOpacity style={styles.item} onPress={()=> selecionarLivro(item)}>
        <Text style={styles.itemTitulo}>{item.titulo}</Text>
        <Text style={styles.textAutor}>{item.autor}</Text>
        <Text style={styles.textGenero}>{item.genero}</Text>
            <Text style={styles.textData}>{item.data_lancamento}</Text>
            <Text style={styles.textEditora}>{item.editora}</Text>
            <Text style={styles.textSinopse}>{item.sinopse}</Text>
            <Text style={styles.textAvaliacao}>{item.avaliacao}</Text>
            <Image source={item.image} style={styles.image} />

        </TouchableOpacity>
    
    );
    
    return(
    <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content"/>
        <Head/>
            <FlatList
            data={livros}
            renderItem={renderItem}
            keyExtractor={(item)=>item.titulo ? item.titulo.toString(): Math.random().toString()}
            contentContainerStyle={styles.item}
            />
        <Footer/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000' ,
        flex: 1
    },
    item: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    itemTitulo: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textAutor: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textGenero: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textData: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textEditora: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textSinopse: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
    },
    textAvaliacao: {
        fontSize: 20,
        color: '#FFF',
        marginLeft: 65
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
});
    
export default Livros;