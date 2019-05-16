import React from 'react'

import {Button, View, Text, Image} from 'react-native'

export default class ClickMeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clicks: 0
        }
        this.onClickPressed = this.onClickPressed.bind(this);
    }
    onClickPressed = () => {
        this.setState(
            { clicks : this.state.clicks + 1}
        )
    }
    onClickDecrease = () => {
        this.setState(
            { clicks : this.state.clicks - 1}
        )
    }
    render(){
        let pic = {
           uri:"/Users/zomato/Learning/cruise/components/Images/test_image.jpg"
        }
        return (
            <View>
                <Text>{this.state.clicks}</Text>
                <Button title="Increase Count" onPress={this.onClickPressed}/>
                <Button title="Decrease Count" onPress={this.onClickDecrease}/>
                <Image source={pic} style={{width:100, height:100}}></Image>
            </View>
        )
    }
}