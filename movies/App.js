import { useState } from 'react';
import {
  StyleSheet, Text, View, StatusBar, TextInput, Platform, Pressable, ScrollView,
  ActivityIndicator, Alert, Keyboard
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const statusBarHeight = StatusBar.currentHeight;
const KEY_GPT = 'sk-proj-9JjboNGiLqEIWQC5aU2lT3BlbkFJeGLjDrOOn7gI5bMMrsxC'; // Substitua pela sua chave API

export default function App() {

  const [genero, setGenero] = useState("");
  const [quantidade, setQuantidade] = useState(3);
  const [loading, setLoading] = useState(false);
  const [filme, setFilme] = useState("")

  async function handleGenerate() {
    if (genero === "") {
      Alert.alert("Atenção", "Escolha um genêro")
      return;
    }

    setFilme("")
    setLoading(true);
    Keyboard.dismiss();

    const prompt = `Dê uma lista de ${quantidade.toFixed(0)} livros do gênero ${genero}, incluindo o título, ano de publicação e uma avaliação de 1 a 5 estrelas para cada um.`;

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${KEY_GPT}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.20,
        max_tokens: 500,
        top_p: 1,
      })
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data.choices[0].message.content);
        setFilme(data.choices[0].message.content)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })

  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#F1F1F1" />
      <Text style={styles.heading}>MOVIE LIST</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Escolha um gênero de filme</Text>
        <TextInput
          placeholder="Romance, terror, ação, etc..."
          style={styles.input}
          value={genero}
          onChangeText={(text) => setGenero(text)}
        />

        <Text style={styles.label}>Quantidade de filmes: <Text style={styles.quantidade}> {quantidade.toFixed(0)} </Text> filmes</Text>
        <Slider
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="#009688"
          maximumTrackTintColor="#000000"
          value={quantidade}
          onValueChange={(value) => setQuantidade(value)}
        />
      </View>

      <Pressable style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>Gerar lista</Text>
        <MaterialIcons name="edit" size={24} color="#FFF" /> 
      </Pressable>

      <ScrollView contentContainerStyle={{ paddingBottom: 24, marginTop: 4, }} style={styles.containerScroll} showsVerticalScrollIndicator={false} >
        {loading && (
          <View style={styles.content}>
            <Text style={styles.title}>Carregando lista...</Text>
            <ActivityIndicator color="#000" size="large" />
          </View>
        )}

        {filme && (
          <View style={styles.content}>
            <Text style={styles.title}>Lista de filmes 👇</Text>
            <Text style={{ lineHeight: 24, }}>{filme}</Text>
          </View>
        )}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 54
  },
  form: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#94a3b8',
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  quantidade: {
    backgroundColor: '#F1f1f1'
  },
  button: {
    backgroundColor: '#FF5656',
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  content: {
    backgroundColor: '#FFF',
    padding: 16,
    width: '100%',
    marginTop: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14
  },
  containerScroll: {
    width: '90%',
    marginTop: 8,
  }
});