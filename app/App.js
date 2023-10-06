import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { useState
 } from 'react';
export default function App() {


  const [entradaCelsius, setEntradaCelsius] = useState('');
  const [saidaFahrenheit1, setSaidaFahrenheit1] = useState('');
  const [saidaKelvin1, setSaidaKelvin1] = useState('');

  
  const [entradaFahrenheit, setEntradaFahrenheit] = useState('');
  const [saidaCelsius2, setSaidaCelsius2] = useState('');
  const [saidaKelvin2, setSaidaKelvin2] = useState('');
  
  const [entradaKelvin, setEntradaKelvin] = useState('');
  const [saidaCelsius3, setSaidaCelsius3] = useState('');
  const [saidaFahrenheit3, setSaidaFahrenheit3] = useState('');
  


  function converterCelsiu(){

    

  }
  function converterFarenheit(){

   

  }
  function converterKelvin(){

    

  }
 
 

  return (

    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.textoH1}>Conversor de Temperatura</Text>

    <View style={styles.card}>
      <Text style={styles.textoCard}>Inserir Celsius (ºC)</Text>
      <TextInput
      style={styles.input}
      value={entradaCelsius}
      keyboardType = 'numeric'
      onChangeText={setEntradaCelsius}/>

    <TouchableOpacity style={styles.botao} onPress={converterCelsiu}>
    <Text style={styles.textoBotao}>Calcular</Text>


    </TouchableOpacity>
    <Text style={styles.resultado}></Text>
    </View>
    

    <View style={styles.card}>

    <Text style={styles.textoCard}>Inserir Farenheit (°F)</Text>
      <TextInput
      style={styles.input}
      value={entradaFahrenheit}
      keyboardType = 'numeric'
      onChangeText={setEntradaFahrenheit}/>

    <TouchableOpacity style={styles.botao} onPress={converterFarenheit}>
    <Text style={styles.textoBotao}>Calcular</Text>


    </TouchableOpacity>
    <Text style={styles.resultado}></Text>
    
    </View>
    <View style={styles.card}>

    <Text style={styles.textoCard}>Inserir Kelvin (K)</Text>
      <TextInput
      style={styles.input}
      value={entradaKelvin}
      keyboardType = 'numeric'
      onChangeText={setEntradaKelvin}/>

    <TouchableOpacity style={styles.botao} onPress={converterKelvin}>
    <Text style={styles.textoBotao}>Calcular</Text>


    </TouchableOpacity>
    <Text style={styles.resultado}></Text>

    </View>



      <StatusBar style="auto" />
    </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  card:{

    width:'95%',
    height: 250,
    backgroundColor: '#A9A9A9',
    borderRadius: 10,
    borderWidth: 1,
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,

  },
  textoCard: {

    fontSize: 30,
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 3,

  },
  input: {

    height: 30,
    width: 200,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 3,


  },
  botao: {

    borderWidth: 1,
    borderRadius: 15,
    width: 100,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    backgroundColor: '#7B68EE',

  },
  textoH1: {

    fontSize: 60,
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 3,

  },
  resultado: {

    fontSize: 30,
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 3,


  }



});