import React, { Component } from 'react'
import { Text, View ,SafeAreaView,ScrollView,Picker,Dimensions} from 'react-native'
import {  Content, Form, Item, Input, Label,Button } from 'native-base'
//const {width,height} =Dimensions.get('window')
import axios from 'react-native-axios';
export default class SchlorshipScreen extends Component {
    state ={ 
          data:[{
            user:'',
            name:'',
            f_name:'',
            address:'',
            batch:'',
            mobile:'',
            email:'',
            percent_marks:'',
            roll_num:'',
            section:''
          }]
      

    }
    updateUser = (user) => {
        this.setState({ user: user })
     }

     onName = (name) =>{
          this.setState({name})
          //console.log(name)
     }
     onF_name = (f_name) =>{
          this.setState({f_name})
     }
     onaddress= (address) =>{
          this.setState({address})
     }
     onBatch = (batch) =>{
          this.setState({batch})
     }
     onMobile = (mobile) =>{
          this.setState({mobile})
     }
     onEmail = (email) =>{
          this.setState({email})
     }
     onMarks = (percent_marks) =>{
          this.setState({percent_marks})
     }
     onRollno = (roll_num) =>{
          this.setState({roll_num})
     }
     onSection= (section) =>{
          this.setState({section})
     }
     
     getData = async()=>{
     //var {name,fathers_name,address,batch,mobile,email,percent_marks,section,roll_num} =this.state;
        const formData = new FormData();
        formData.append('rule', 'schloarform_submit');
        formData.append('name', this.state.name);
        formData.append('f_name',this.state.f_name);
        formData.append('address', this.state.address);
        formData.append('batch', this.state.batch);
        formData.append('mobile',this.state.mobile);
        formData.append('email',this.state.email);
        formData.append('percent_marks', this.state.percent_marks);
        formData.append('roll_num', this.state.roll_num);
        formData.append('section', this.state.section);
       // formData.append('is_admin', 1);
        const that = this;
     axios({
      
        url: `https://shuddhairpurifier.com/mlacademy/api.php`,
        method: 'POST',
        data:formData,
      
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log(formData)
        //console.log(response.data);
       // that.setState({data:response.data.data})
      
        console.log('hello',response.data.data)
      }).catch(function (error) {
        console.log(error);
        
      });
    }
    // componentDidMount(){
    //     this.getData()
    // }
    render() {
       
        return (
            <SafeAreaView style={{flex:1}}>
         <ScrollView style ={{flex:1}}>
      <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}
            style ={{width:'80%',marginHorizontal:30}}>
               <Picker.Item label = "Class X" value = "1000" />
               <Picker.Item label = "Mathematics" value = "2000" />
               <Picker.Item label = "Science" value = "3000" />
               <Picker.Item label = "English" value = "4000" />
               <Picker.Item label = "Hindi" value = "5000" />
               <Picker.Item label = "Sanskrit" value = "6000" />
               <Picker.Item label = "Maithli" value = "7000" />
               <Picker.Item label = "Social Science" value = "8000" />
               <Picker.Item label = "Math and Science" value = "9000" />
               <Picker.Item label = "Merit cum Poverty" value = "10000" />
               <Picker.Item label = "For Class XII" value = "1100" />
               <Picker.Item label = "Topper" value = "1200" />
               <Picker.Item label = "Overall" value = "1300" />
               <Picker.Item label = "Commerce" value = "1400" />
               <Picker.Item label = "Arts" value = "15000" />
               <Picker.Item label = "Physics" value = "1600" />
               <Picker.Item label = "Chemistry" value = "1700" />
               <Picker.Item label = "Biology" value = "1800" />
               <Picker.Item label = "Economic" value = "1900" />
               <Picker.Item label = "Political Science" value = "20000" />
               <Picker.Item label = "NIIT" value = "21000" />
               <Picker.Item label = "JEE" value = "22000" />
               <Picker.Item label = "Sportsman of the year" value = "23000" />
               <Picker.Item label = "Cultural Achievements" value = "24000" />
               <Picker.Item label = "State Acheivers" value = "2505000" />
               <Picker.Item label = "National Achievers" value = "26000" />
               <Picker.Item label = "International Achievers" value = "27000" />
               <Picker.Item label = "Others" value = "28000" />
              
            </Picker>
          
                    <Content style={{marginHorizontal:10}} >
                    <Form>
                        <Item floatingLabel>
                        <Label>Enter name</Label>
                        <Input 
                              onChangeText={this.onName}/>
                        </Item>
                        <Item floatingLabel>
                        <Label>Enter father's name</Label>
                        <Input 
                                 onChangeText={this.onF_name}/>
                        </Item>
                        <Item floatingLabel>
                        <Label>Class</Label>
                        <Input 
                          onChangeText={this.onBatch}/>
                        </Item>
                        <Item floatingLabel>
                        <Label>Address</Label>
                        <Input 
                          onChangeText={this.onaddress}/>
                        </Item>
                        <Item floatingLabel>
                        <Label>Mobile number</Label>
                        <Input 
                           onChangeText={this.onMobile}/>
                        </Item>
                        <Item floatingLabel>
                        <Label>Email</Label>
                        <Input 
                            onChangeText={this.onEmail}/>
                        </Item>
                        <Item floatingLabel>
                        <Label>Roll number</Label>
                        <Input 
                          onChangeText={this.onRollno}/>
                        </Item>
                        <Item floatingLabel>
                        <Label>Mark %</Label>
                        <Input
                          onChangeText={this.onMarks}/>
                        </Item>
                        <Item floatingLabel>
                        <Label>Section</Label>
                        <Input 
                          onChangeText={this.onSection}/>
                        </Item>
                        
    <Button full color style={{marginTop:20,marginHorizontal:20,borderRadius:10,width:160,marginHorizontal:120}}
     
     onPress ={this.getData}>
<Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>APPLYING</Text>
</Button>
                    </Form>
                    
                    </Content>
                    </ScrollView>
            </SafeAreaView>
        )
    }
}
