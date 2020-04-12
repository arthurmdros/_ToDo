import React, { useRef } from 'react';
import { Feather } from '@expo/vector-icons';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import api from '../../services/api';
import Input from '../components/Input';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Create() {
 
  const formRef = useRef(null);
  const navigation = useNavigation();

  function helpAlert(){
    alert('Página para cadastrar uma tarefa.');
  }

  function navigateToHome(){
    navigation.navigate('Main');
  }

  async function handleSubmit(data) {
    try{

      await api.post('create', data);
      alert('Salvo com sucesso!');
      navigateToHome();

    }catch(err){
      alert('Erro ao cadastrar, tente novamente');
    }        
  }

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <TouchableOpacity onPress = {helpAlert}>
            <Feather name='help-circle' size={25} color={'#000000'}/>
        </TouchableOpacity>
      </View>

      <View style={styles.headerTitle}>
        <Text style={styles.title}>Cadastrar Lembrete</Text>
        <Text style={styles.description}>
            Insira as informações abaixo:
        </Text>        
      </View> 
      
      <View style={styles.newContainer}>
          <Form ref={formRef} onSubmit={handleSubmit}>
          <Text style={styles.newText}>Título:</Text>
          <Input style={styles.newTitle} name="title" type="title" />
          
          <Text style={styles.newText}>Descrição:</Text>
          <Input style={styles.newDescription} name="description" type="description" />

        <View style={styles.actions}>
          <TouchableOpacity style = {styles.button} onPress={navigateToHome}>
            <Text style={styles.buttonText}>Retornar</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.button} onPress={() => formRef.current.submitForm()}>
              <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          
        </View>
        </Form>               
      </View>
    </View>    
  );
}