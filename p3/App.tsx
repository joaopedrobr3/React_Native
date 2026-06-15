
import React from 'react'
import {View,Text,ScrollView,TouchableOpacity, StatusBar, Image, TextInput} from 'react-native'
import {styles} from './styles'

  export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a2a5e" />

    
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
        >
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CONDUTOR</Text>
      </View>

      <ScrollView style={styles.fundo} contentContainerStyle={{ padding: 16 }}>

        
        <View style={styles.card}>
          
          <Text style={styles.cardTitulo}>Informações do Condutor                     <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3U_wBYICebCOn5hvFblDmiM8W0LFSgSVGRw&s' }} style={styles.selo} /></Text>
          <View style={styles.divider} />

          <Text style={styles.destaque}>Nome</Text>
          <Text style={styles.valor}>**** ***** ******** *****</Text>

          <View style={styles.row}>
            <View style={styles.coluna}>
              <Text style={styles.destaque}>CPF</Text>
              <Text style={styles.valor}>***.***.***-**</Text>
            </View>
            <View style={styles.coluna}>
              <Text style={styles.destaque}>Sexo</Text>
              <Text style={styles.valor}>MASCULINO</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.coluna}>
              <Text style={styles.destaque}>Categoria</Text>
              <Text style={styles.valor}>AB</Text>
            </View>
            <View style={styles.coluna}>
              <Text style={styles.destaque}>UF de Emissão</Text>
              <Text style={styles.valor}>RJ</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.coluna}>
              <Text style={styles.destaque}>Data de Validade</Text>
              <Text style={styles.valor}>14/10/2034</Text>
            </View>
            <View style={styles.coluna}>
              <Text style={styles.destaque}>Data de Emissão</Text>
              <Text style={styles.valor}>12/03/2026</Text>
            </View>
          </View>
        </View>

       
        <View style={styles.grid}>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>HABILITAÇÃO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>CADASTRO POSITIVO</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>EXAMES TOXICOLÓGICOS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>CURSOS ESPECIALIZADOS</Text>
          </TouchableOpacity>

        </View>

        
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>{'CREDENCIAL DE\nESTACIONAMENTO'}</Text>
        </TouchableOpacity>

        <TextInput placeholder="Digite alguma coisa" style={styles.textInput} />

      </ScrollView>
    </View>
  )}





