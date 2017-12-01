/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  
  StyleSheet,
  FlatList,
  //Button,
  View,
  Text,
  TextInput,
  Alert,
  Button,
  CheckBox
  //Vibration
} from 'react-native';
import Icon from  'react-native-vector-icons/MaterialIcons';
// import ListViewItem from './ListViewItem';



export default class FlexDirectionBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '' ,
      data: [
        {key: 'Morning-Walk'},
        {key: 'Yoga'},
        // {key: 'Prepare Breakfast and Lunch'},
        {key: 'Office'},
        {key: 'Check e-mails'}
      ]
    };
  }
  render() {
    let iconName= this.state.data.completed ? 'check-box' : 'check-box-outline-blank';
    let color = this.props.color || '#000';

    // const b=[
    //   <Icon.Button
    //   data={this.state.data}
    //   name={iconName}
    //   backgroundColor='rgba(0,0,0,0)'
    //   color={color}
    //   underlayColor='rgba(0,0,0,0)'
    //   size={20}
    //   iconStyle={{marginLeft: -10, marginRight: 0}}
    //   activeOpacity={1}
    //   borderRadius={5}
    //   onPress={this.props.onCheckBoxPressed}
    // >
    //  </Icon.Button>
    // ]

    

    return (
      // Try setting `flexDirection` to `column`.
      
      <View style={{flex: 1, flexDirection: 'column', justifyContent:'center' }}>
         <View style={{padding: 10}}>
          <TextInput
            style={{height: 40, marginBottom:-100}}
            placeholder="Add To-Do!!!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '').join(' ')}
          </Text>
          </View>

          <View style={styles.container}>
            
            <FlatList
            
              data= {this.state.data}
              //bd={b}
              renderItem={({item}) => {
                return <Text style={styles.item}>{item.key}</Text>
              }}
            />


            

          </View>
        
          <Button
            onPress={() => { 
              Alert.alert('Task! has been added to your list')}
              // add a new note
              
              var cd = {key : this.state.text}
              var ab = this.state.data
              ab.push(cd) = this.setState + 1
            }
            title="Add"
            
          />

      </View>
    );
  }
};



module.exports = FlexDirectionBasics;

     const styles=StyleSheet.create({
       container: {
         flex:1,
         paddingTop: 22

       },

       item: {
         padding:10,
         fontSize:18,
         height:44
       },
     })
     
