import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,      
      paddingTop: Constants.statusBarHeight + 20,      
      backgroundColor: '#FFF',
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
    },

    headerTitle:{
      paddingHorizontal: 24,
    },

    title: {
      fontSize: 30,
      marginBottom: 16,
      marginTop: 20,
      color: '#13131a',
      fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#13131a',
    },

    total:{
      fontWeight: 'bold',
    },

    createItem:{
      marginTop: 32,      
    },

    toDoList:{
      marginTop: 20,
      paddingHorizontal: 10,
    },

    item: {
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,        
        borderColor: '#000000',
    },

    itemProperty: {
      fontSize: 14,
      color: '#000000',
      fontWeight: 'bold',
    },

    itemValue: {
      marginTop: 8,
      fontSize: 15,
      marginBottom: 24,
      color: '#000000',
    },

    actions:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',      
    },

    button: {
      backgroundColor: '#000000',
      borderRadius: 8,
      height: 40,
      width: '38%',      
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText:{
      color: '#000000',
      fontSize: 15,
      fontWeight: 'bold',
    },

    createButton: {
      flexDirection: 'row',            
      alignItems: 'center',
    },

    createButtonText: {
      color: '#000000',
      fontSize: 15,
      fontWeight: 'bold',
    },
 });
  