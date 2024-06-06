import React from 'react';
import CadastroLivros from './src/screens/CadastroLivros';
import EdicaoLivros from './src/screens/EdicaoLivros';
import Listagem from './src/screens/Livros';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

function App(): JSX.Element{
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Cadastro' component={CadastroLivros} options={{ headerShown: false }} />
    <Stack.Screen name='Listagem' component={Listagem} options={{ headerShown: false }} />
    <Stack.Screen name='EditarProduto' component={EdicaoLivros} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App;