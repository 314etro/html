import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {useState} from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

/*launchCamera, launchImageLibrary. Usado pra utilizar a camera */


export default function App() {
 const [foto, setFoto] = useState(null);

 function openAlbum(){

  const options = {
    mediaType: 'photo',
    quality:1, 
    SelectionLimit: 1,
 }
    
 launchImageLibrary(options, (response) =>{
  if(response.didCancel){
    console.log("image picker cancelado")
    return;
  }else if(response.error){
    console.log("gerou erro", response.errorMessage)
    return;
  }
  console.log(response.assets)
  setFoto(response.assets[0].uri)
 })
}

async function openCamera(){
  const options = {
    mediaType: 'photo',
    quality:1,
    saveTofotos:true,
  }
/*async função asincrona, "delay" entre apertar o botão e a execução */
  const response = await launchCamera(options)
  setFoto(response.assets[0].uri)
}


  return (
  <SafeAreaView style={estilos.container}>
    <View style={estilos.botoes}>
      <TouchableOpacity style={estilos.botaoAlbum} onPress={openAlbum}> 
        <Text style={estilos.texto}>Abrir Album</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botaoCam} onPress={openCamera}>
        <Text style={estilos.texto}>Abrir Câmera</Text>
      </TouchableOpacity>


    </View>
    {foto !== null && (
    <Image source={{uri:''}} style={estilos.foto}/>
    )}
  </SafeAreaView>
  );
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  botoes:{
    marginTop:144,
    flexDirection:'row',
    gap: 20,
    marginBottom:24
  },
  botaoAlbum:{
    backgroundColor: '#7bb4e3',
    padding:4,
    paddingHorizontal: 15,
    borderRadius:4,

  },botaoCam:{
    backgroundColor: '#FF7B00',
    padding:4,
    paddingHorizontal:15,
    borderRadius:4,
  },
  texto:{
    color:'#fff',
    fontWeight:'bold'
  },
  foto:{
    width:'90%',
    height:300,
    borderWidth:1, 
    borderColor:'#dfe9f5'
  }
});