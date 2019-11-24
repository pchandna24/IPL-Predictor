import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Text, View,ScrollView, Image,Picker} from 'react-native';
import undraw from '../assets/undraw.png';
import axios from 'axios';

const key = {
    "Hyderabad":"SRH",
    "Mumbai":"MI",
    "Bangalore":"RCB",
    "Kolkata":"KKR",
    "Delhi":"DD",
    "Chennai":"CSK",
    "Rajasthan":"RR",
}

export default class Main extends Component {
    state={
        team1:null,
        team2:null,
        toss:null,
        venue:null,
        tosschoice:null,
        data:null,
        tossVal:null
    }

     meraDost =async()=>{
        this.setState({
            data:"Loading...."
        })

        console.log(this.state.team1);
        console.log(this.state.team2);
        console.log(this.state.venue);
        console.log(this.state.tossVal);
        console.log(this.state.tosschoice);

        let formData = new FormData()
        formData.append("homeTeam", this.state.team1)
        formData.append("awayTeam", this.state.team2 )
        formData.append("city", `City: ${this.state.venue}`)
        formData.append("tossWinner",  this.state.tossVal || "KKR")
        formData.append("selector1", this.state.tosschoice)

            try{
                let res = await axios.post('https://minor123456.herokuapp.com/submit',formData)
                console.log(res);
                this.setState({
                    data:res.data.data
                })
                }
            catch(err){
                console.log(err)
                console.log("err");
            }
   
        
    }


    render() {
        return (
            <ScrollView >
                <View style={{width:355,alignItems:'center',marginTop:40}}>
                <Image source={undraw} style={{height:240,width:355,resizeMode:'cover',borderRadius:25}}/>
                <View style={{height:428,width:355,backgroundColor:'#fff',borderRadius:25,marginTop:12}}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'#1A1A1A',width:150,height:25,fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',margin:15,marginLeft:22}}>Home Team</Text>
                <Picker
                    selectedValue={this.state.team1}
                    style={{ height: 50, width: 150,marginTop:5}}
                    onValueChange={team1 => this.setState({ team1 })}>
     <Picker.Item label="Select Choice" value="Select Choice" />

                    <Picker.Item label="Sunrisers Hyderabad" value="Hyderabad" />
                    <Picker.Item label="Mumbai Indians" value="Mumbai" />
                    <Picker.Item label="Royal Challenger Bangalore" value="Bangalore" />
                    <Picker.Item label="Kolkata Knight Riders" value="Kolkata" />
                    <Picker.Item label="Delhi Daredevils" value="Delhi" />
                    <Picker.Item label="Chennai Super Kings" value="Chennai" />
                    <Picker.Item label="Rajasthan Royals" value="Rajasthan" />

                </Picker>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'#1A1A1A',width:150,fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',margin:15,marginLeft:22}}>Away Team</Text>
                <Picker
                    selectedValue={this.state.team2}
                    style={{ height: 50, width: 150,marginTop:5}}
                    onValueChange={team2 => this.setState({ team2 })}>
                             <Picker.Item label="Select Choice" value="Select Choice" />

 <Picker.Item label="Sunrisers Hyderabad" value="Hyderabad" />
                    <Picker.Item label="Mumbai Indians" value="Mumbai" />
                    <Picker.Item label="Royal Challenger Bangalore" value="Bangalore" />
                    <Picker.Item label="Kolkata Knight Riders" value="Kolkata" />
                    <Picker.Item label="Delhi Daredevils" value="Delhi" />
                    <Picker.Item label="Chennai Super Kings" value="Chennai" />
                    <Picker.Item label="Rajasthan Royals" value="Rajasthan" />
                    
                </Picker>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'#1A1A1A',width:150,fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',margin:15,marginLeft:22}}>Select Venue</Text>
                <Picker
                    selectedValue={this.state.venue}
                    style={{ height: 50, width: 150,marginTop:5}}
                    onValueChange={venue => this.setState({ venue })}>
                             <Picker.Item label="Select Choice" value="Select Choice" />

                    <Picker.Item label="Hyderabad" value="Hyderabad" />
                    <Picker.Item label="Pune" value="Pune" />
                    <Picker.Item label="Rajkot" value="Rajkot" />
                    <Picker.Item label="Indore" value="Indore" />
                    <Picker.Item label="Bangalore" value="Bangalore" />
                    <Picker.Item label="Mumbai" value="Mumbai" />
                    <Picker.Item label="kolkata" value="Kolkata" />
                    <Picker.Item label="Delhi" value="Delhi" />
                    <Picker.Item label="Jaipur" value="Jaipur" />
                    <Picker.Item label="Chennai" value="Chennai" />

                </Picker>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'#1A1A1A',width:150,fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',margin:15,marginLeft:22}}>Toss Winner</Text>
                <Picker
                    selectedValue={this.state.tossVal}
                    style={{ height: 40, width: 150,marginTop:5}}
                    onValueChange={tossVal => {
                        this.setState({ tossVal })
                    }}>
                     <Picker.Item label="Select Choice" value="Select Choice" />
                     <Picker.Item label="Team-1" value={key[this.state.team1]} />
                     <Picker.Item label="Team-2" value={key[this.state.team2]} />
                </Picker>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                    <Text style={{color:'#1A1A1A',width:150,fontWeight:'bold',fontSize:20,alignItems:'center',justifyContent:'center',margin:15,marginLeft:22}}>Toss Choice</Text>
                <Picker
                    selectedValue={this.state.tosschoice}
                    style={{ height: 50, width: 150,marginTop:5}}
                    onValueChange={tosschoice => this.setState({ tosschoice })}>
                             <Picker.Item label="Select Choice" value="Select Choice" />

                     <Picker.Item label="Field" value="Field" />
                    <Picker.Item label="Bat" value="Bat" />
                </Picker>
                    </View>

                    <View style={{width:350,justifyContent:'center',paddingTop:5}}>
                        <Text style={{textAlign:'center',fontSize:20,backgroundColor:'#ffbbff90',borderRadius:20,marginLeft:7,height:35,color:'#1A1A1A',justifyContent:'center',fontWeight:'bold'}} onPress={this.meraDost}>Submit</Text>
                    </View>
                    <Text style={{textAlign:'center',fontSize:20,borderRadius:20,marginLeft:7,height:35,color:'#1A1A1A',justifyContent:'center',fontWeight:'bold',marginTop:10,marginLeft:5}}>{this.state.data}</Text>
                    

                </View>
                

                </View>
            </ScrollView>
        )
    }
}
