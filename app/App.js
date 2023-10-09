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

    let Celsius = Number(entradaCelsius) 

    let farenheit = ( Celsius * 9/5) + 32
    let kelvin  = Celsius + 273.15

    setSaidaFahrenheit1(farenheit.toFixed(2) +'°F')
    setSaidaKelvin1(kelvin.toFixed(2) + 'K')
    


  }
  function converterFarenheit(){

    let farenheit = Number(entradaFahrenheit) 

    let celsius = 5/9*(farenheit-32)
    let kelvin  = (farenheit + 459.67) * 5/9

    setSaidaCelsius2(celsius.toFixed(2) + 'ºC')
    setSaidaKelvin2(kelvin.toFixed(2) + 'K')
   

   

  }
  function converterKelvin(){

    let kelvin = Number(entradaKelvin) 

    let celsius = kelvin - 273.15
    let farenheit  = (kelvin - 273.15) * 9/5 + 32

    setSaidaCelsius3(celsius.toFixed(2) + 'ºC')
    setSaidaFahrenheit3(farenheit.toFixed(2) +'°F')

    

  }
 
 

  return (

    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.textoH1}>Conversor</Text>
      <Text style={styles.textoH1}>de</Text>
      <Text style={styles.textoH1}>Temperatura</Text>

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
    <View style={styles.ViewResultador}>
    <Text style={styles.resultado}>Farenheit: {saidaFahrenheit1}</Text>
    <Text style={styles.resultado}>Kelvin: {saidaKelvin1}</Text>
    </View>
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
    <View style={styles.ViewResultador}>
    <Text style={styles.resultado}>Celsius: {saidaCelsius2}</Text>
    <Text style={styles.resultado}>Kelvin: {saidaKelvin2}</Text>
    </View>
    
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
    <View style={styles.ViewResultador}>
    <Text style={styles.resultado}>Celsius: {saidaCelsius3}</Text>
    <Text style={styles.resultado}>Farenheit: {saidaFahrenheit3}</Text>
    </View>

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
    height: 300,
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
    TextshadowOffset: {width: 3, height: 5},
    TextshadowOpacity: 0.3,
    TextshadowRadius: 3,

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
    paddingLeft: 10


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

    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    TextshadowOffset: {width: 3, height: 5},
    TextshadowOpacity: 0.3,
    TextshadowRadius: 3,

  },
  resultado: {

    fontSize: 30,
    TextshadowOffset: {width: 3, height: 5},
    TextshadowOpacity: 0.3,
    TextshadowRadius: 3,

  },
  ViewResultador: {
    width:'100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',

  }



});