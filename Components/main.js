import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Text, View, Image,Picker} from 'react-native';
import undraw from '../assets/undraw.png';
import axios from 'axios';


export default class Main extends Component {
    state={
        team1:null,
        team2:null,
        toss:null,
        venue:null,
        tosschoice:null,
        data:null,
    }

     meraDost =()=>{
        this.setState({
            data:"Loading...."
        })
        console.log(this.state.team1);
        console.log(this.state.team2);
        console.log(this.state.venue);
        console.log(this.state.toss);
        console.log(this.state.tosschoice);
        if(this.state.toss==1){
            this.setState({
                toss: this.state.team1
            })
        }
        else if(this.state.toss==2){
            this.setState({
                toss:this.state.team2
            })
        }
        console.log(this.state.toss);
        let formData = new FormData()
        formData.append("homeTeam", this.state.team1)
        formData.append("awayTeam", this.state.team2)
        formData.append("city", this.state.venue)
        formData.append("tossWinner", this.state.toss)
        formData.append("selector1", this.state.tosschoice)


        try{
            let res =  axios.post('https://minor123456.herokuapp.com/submit',formData)
            console.log(res);
            }
        catch{
            console.log("err");
        }
    
    }


    render() {
        return (
            <View style={{width:355,alignItems:'center',marginTop:40}}>
                <Image source={undraw} style={{height:240,width:355,resizeMode:'cover',borderRadius:25}}/>
                <View style={{height:428,width:355,backgroundColor:'#fff',borderRadius:25,marginTop:12}}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'#1A1A1A',width:150,height:25,fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',margin:15,marginLeft:22}}>Home Team</Text>
                <Picker
                    selectedValue={this.state.team1}
                    style={{ height: 50, width: 150,marginTop:5}}
                    onValueChange={(itemValue, itemIndex) => this.setState({ team1: itemValue })}>
                    <Picker.Item label="Sunrisers Hyderabad" value="1" />
                    <Picker.Item label="Mumbai Indians" value="2" />
                    <Picker.Item label="Royal Challenger Bangalore" value="5" />
                    <Picker.Item label="Kolkata Knight Riders" value="6" />
                    <Picker.Item label="Delhi Daredevils" value="7" />
                    <Picker.Item label="Chennai Super Kings" value="9" />
                    <Picker.Item label="Rajasthan Royals" value="10" />

                </Picker>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'#1A1A1A',width:150,fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',margin:15,marginLeft:22}}>Away Team</Text>
                <Picker
                    selectedValue={this.state.team2}
                    style={{ height: 50, width: 150,marginTop:5}}
                    onValueChange={(itemValue, itemIndex) => this.setState({ team2: itemValue })}>
                    <Picker.Item label="Sunrisers Hyderabad" value="1" />
                    <Picker.Item label="Mumbai Indians" value="2" />
                    <Picker.Item label="Royal Challenger Bangalore" value="5" />
                    <Picker.Item label="Kolkata Knight Riders" value="6" />
                    <Picker.Item label="Delhi Daredevils" value="7" />
                    <Picker.Item label="Chennai Super Kings" value="9" />
                    <Picker.Item label="Rajasthan Royals" value="10" />
                    
                </Picker>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'#1A1A1A',width:150,fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',margin:15,marginLeft:22}}>Select Venue</Text>
                <Picker
                    selectedValue={this.state.venue}
                    style={{ height: 50, width: 150,marginTop:5}}
                    onValueChange={(itemValue, itemIndex) => this.setState({ venue: itemValue })}>
                    <Picker.Item label="Hyderabad" value="1" />
                    <Picker.Item label="Pune" value="2" />
                    <Picker.Item label="Rajkot" value="3" />
                    <Picker.Item label="Indore" value="4" />
                    <Picker.Item label="Bangalore" value="5" />
                    <Picker.Item label="Mumbai" value="6" />
                    <Picker.Item label="kolkata" value="7" />
                    <Picker.Item label="Delhi" value="8" />
                    <Picker.Item label="Jaipur" value="11" />
                    <Picker.Item label="Chennai" value="12" />

                </Picker>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'#1A1A1A',width:150,fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',margin:15,marginLeft:22}}>Toss Winner</Text>
                <Picker
                    selectedValue={this.state.toss}
                    style={{ height: 40, width: 150,marginTop:5}}
                    onValueChange={(itemValue, itemIndex) => this.setState({ toss: itemValue })}>
                     <Picker.Item label="Team-1" value="1" />
                     <Picker.Item label="Team-2" value="2" />
                </Picker>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'#1A1A1A',width:150,fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',margin:15,marginLeft:22}}>Toss Choice</Text>
                <Picker
                    selectedValue={this.state.tosschoice}
                    style={{ height: 50, width: 150,marginTop:5}}
                    onValueChange={(itemValue, itemIndex) => this.setState({ tosschoice: itemValue })}>
                     <Picker.Item label="Field" value="1" />
                    <Picker.Item label="Bat" value="2" />
                </Picker>
                    </View>

                    <View style={{width:350,justifyContent:'center',paddingTop:5}}>
                        <Text style={{textAlign:'center',fontSize:20,backgroundColor:'#ffbbff90',borderRadius:20,marginLeft:7,height:35,color:'#1A1A1A',justifyContent:'center',fontWeight:'bold'}} onPress={this.meraDost}>Submit</Text>
                    </View>
                    <Text style={{textAlign:'center',fontSize:20,borderRadius:20,marginLeft:7,height:35,color:'#1A1A1A',justifyContent:'center',fontWeight:'bold',marginTop:10,marginLeft:5}}>{this.state.data}</Text>
                    

                </View>
                

                
            </View>
        )
    }
}
