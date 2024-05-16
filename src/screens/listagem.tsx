import React from "react";
import axios from "axios";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Livros {
    titulo:string;
    autor:string;
    data_de_lancamento:string;
    editora:string;
    sinopse:string;
    genero:string;
    avaliacao:string;
    image:any;
};
const dados: Livros[] = [
    //Ana
        {titulo: 'É Assim Que Começa',
        autor: 'Colleen Hoover',
        genero: 'Psicologia e Vida familiar',
        data_de_lancamento: '2022-10-18',
        editora:  'Galera',
        sinopse: 'Lily Bloom continua administrando uma floricultura. Ela está oficialmente divorciada de seu ex-marido e agora dividem a guarda de Emerson.',
        avaliacao: 'É um romance leve, sem muito desastre, com um ótimo plot e extremamente envolvente. Apenas no fim do livro que eu esperava algo mais detalhado do casamento.',
        image: require('')},
    
    //Emilly
        {titulo: 'Garota Exemplar',
        autor: 'Gillian Flynn',
        genero: 'Drama e Ficção detetive',
        data_de_lancamento: '2014-10-02',
        editora:  'Intrínseca',
        sinopse: 'Na manhã de seu quinto aniversário de casamento, Amy, a linda e inteligente esposa de Nick Dunne, desaparece de sua casa às margens do Rio Mississippi.',
        avaliacao: 'No começo, a história demorou um pouco pra me prender, mas foi melhorando mais pra metade do livro, que realmente me surpreendeu!',
        image: require('')},
    
    //Giovanna
        {titulo: 'Coraline',
        autor: 'Neil Gainman',
        genero: 'Fantasia e Ficção sombria',
        data_de_lancamento: '2002-07-02',
        editora:  'Darkside',
        sinopse: 'É um conto no qual uma jovem descobre uma porta para um misterioso mundo no palácio para onde acabou de se mudar.',
        avaliacao: 'Quem assistiu o filme antes de ler o livro não terá do que se queixar. É incrivelmente perfeito. Apesar de parecer um livro infantil, é surpreendente!',
        image: require('')},
    
    //Sara
        {titulo: 'Eu e Esse Meu Coração',
        autor: 'C. C. Hunter',
        genero: 'Mistério e Romance',
        data_de_lancamento: '2018-10-02',
        editora:  'Jangada',
        sinopse: 'Leah MacKenz não tem coração. O que a mantém viva é um coração artificial. Com os dias contados, ela cria uma lista de “coisas para fazer antes de morrer”.',
        avaliacao: 'Que livro incrível e fluído! Apesar de grande, os personagens são tão cativantes e o mistério se torna tão interessante que é impossível parar de ler!',
        image: require('')},
    ];
    const renderItem = ({ item }: { item: Livros }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.itemTitle}>{item.titulo}</Text>
            <Text style={styles.textInformacoes}>{item.autor}, {item.avaliacao}, {item.data_lancamento}, {item.editora}, {item.sinopse}</Text>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.textAvaliacao}>{item.avaliacao}</Text>
        </TouchableOpacity>
    
    );
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#000000' ,
            flex: 1
        },
        item: {
    
        },
        itemTitle: {
    
        },
        textInformacoes: {
    
        },
        image: {
    
        },
        textAvaliacao: {
            
        }
    });
    
    export default Livros;
    