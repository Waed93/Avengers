//import react from react
import React from 'react';
//import element from reacr-native 
import { StyleSheet, Text, View, Button } from 'react-native';
//import FormInput & Header from react native elements
import { FormInput, Header ,Divider, CheckBox } from 'react-native-elements';
//import from navidate react drawer
import Drawer from 'react-native-drawer'
//import createDrawerNavigator as DrawerNavigator from react navigation
import { createDrawerNavigator } from 'react-navigation'
//import axios to make router works
import axios from 'axios';    
 
//import the icon from lirbary  one by one (each one library in react native icon)
import Icon0 from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';
import Icon6 from 'react-native-vector-icons/Octicons';
import Icon7 from 'react-native-vector-icons/Foundation';


const UserTypeGenderText={
  //female (Mother) / male (Father) / child (Children)
  female:'Mother',
  male:'Father',
  child:'Child',
}

//export Home from the react componant
export default class Finance extends React.Component{
  //the constructor
  constructor(){
    //super for ES6
    super();
    //all the data save before to can show in the bar
    this.state={
      //defult thing when change from data base change here 🙂 <3
      //female (Mother) / male (Father)/ child (Children)
      userType:'female',
      //from 100%
      userProgress:'100',
      //for how many child in family
      userRanking:'2',
      //the money still
      restMoney:'1500',
    };
  }

  fectch1(){
    //return axios.get('http://192.168.1.82:3000')
    return fetch('http://192.168.1.82:3000')
      .then((response) => response.json())
        .then((responseJson) => {
          console.log("server done:",JSON.stringify(responseJson) )
           alert(JSON.stringify(responseJson));
        })
      .catch(function (error) {
       console.log(error);
      });  
  }
  
  goToDrawer(){
    alert('goToDrawer');
  };
  goToTasks(){
    alert('goToTasks');
    //this.props.navigation.openDrawer()
  };
  
  //  renderRow() {
  //       return (
  //           <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
  //               <View style={{ flex: 1, alignSelf: 'stretch' }} /> { /* Edit these as they are your cells. You may even take parameters to display different data / react elements etc. */}
  //               <View style={{ flex: 1, alignSelf: 'stretch' }} />
  //               <View style={{ flex: 1, alignSelf: 'stretch' }} />
  //               <View style={{ flex: 1, alignSelf: 'stretch' }} />
  //               <View style={{ flex: 1, alignSelf: 'stretch' }} />
  //           </View>
  //       );
  //   }
  // //render
  // render() {
  //   //what return   
  //       const data = [1, 2, 3, 4, 5];
  //       return (
  //           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //           {
  //               data.map((datum) => { 
  //               // This will render a row for each data element.
  //                 return this.renderRow();
  //               });
  //           }
  //           </View>
  //       );
  //   }
    
}

const styles = StyleSheet.create({
  allPage: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  otherView: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'green',
    //marginBottom:35,
  },
  name:{
    fontSize: 23,
    textAlign:'center',
    fontWeight: 'bold',
    color:'white',
  },
  cost:{
    fontSize: 23,
    textAlign:'center',
    fontWeight: 'bold',
    color:'gray',  
  }

});


/*
<View style={styles.allPage}>
        <View style={styles.otherView}>
          <Text onPress={this.goToDrawer.bind(this)} style={styles.name}>Menu</Text>
          <Text onPress={this.goToDrawer.bind(this)} style={styles.cost}>cost</Text>

        
        </View>


*/