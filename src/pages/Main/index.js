import React, { useState, useEffect } from 'react';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Main() {
  const [itens, setItens] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateCreate(){ 
    setItens([]);
    setPage(1);   
    navigation.navigate('Create');
  }

  function navigateUpdate(item){    
    setItens([]);
    setPage(1);
    navigation.navigate('Update', item.id);
  }

  function helpAlert(){
    alert('Aplicação para cadastrar lista de afazeres.');
  }

  async function loadItens(){       
    if (loading){
      return;
    }

    if (total > 0 && itens.length === total){
      return;
    }    
    setLoading(true);

    const response = await api.get('index', {
      params: { page }
    });   
    console.log(page);
    setItens([...itens, ...response.data]);    
    setTotal(response.headers['total-count']);             
    setPage(page + 1);
    setLoading(false);    
  }

  useEffect(() => {
    loadItens();
  }, [])

  async function deleteToDo(id){
    setItens([]);
    setPage(1);
    try{
      await api.delete(`delete/${id}`);

      setItens(itens.filter(item => item.id !== id));
    }catch(err){
      alert('Erro ao deletar item, tente novamente.');
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
        <Text style={styles.title}>Bem-Vindo!</Text>
        <Text style={styles.description}>
            Cadastre um lembrete para fazer quando tiver tempo. Você tem
            <Text style={styles.total}> {total} </Text>afazeres cadastrados.
        </Text>
        
        <View style={styles.actionsHeader}>          
          <TouchableOpacity style={styles.createButton} onPress={() => navigateCreate(itens)}>
              <Text style={styles.createButtonText}>Cadastrar afazeres </Text>
              <Feather name='plus-circle' size={20} color={'#000000'}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.updateButton} onPress={() => loadItens()}>
              <Text style={styles.updateButtonText}>Atualizar </Text>
              <MaterialIcons name='update' size={20} color={'#000000'}/>
          </TouchableOpacity>
        </View>

      </View>

      <FlatList          
          data = {itens}
          style = {styles.toDoList}
          keyExtractor = {item => String(item.id)}
          showsVerticalScrollIndicator={false}          
          onEndReachedThreshold={0.2}
          renderItem={({ item: item }) => (
          <View style={styles.item}>
              <Text style={styles.itemProperty}>Tarefa:</Text>
              <Text style={styles.itemValue}>{item.title}</Text>
              
              <Text style={styles.itemProperty}>Descrição:</Text>
              <Text style={styles.itemValue}>{item.description}</Text>

              <View style={styles.actions}>
                <TouchableOpacity onPress={( )=> navigateUpdate(item)}>
                  <Text style={styles.buttonText}>Editar</Text>
                  <AntDesign name='edit' size={20} color={'#000000'}/>
                </TouchableOpacity>          
                <TouchableOpacity  onPress={( )=> deleteToDo(item.id)}>
                  <Text style={styles.buttonText}>Feito</Text>
                  <Feather name='check-square' size={20} color={'#000000'}/>
                </TouchableOpacity> 
              </View>
          </View>
          )}      
      />
    </View>
  );
}