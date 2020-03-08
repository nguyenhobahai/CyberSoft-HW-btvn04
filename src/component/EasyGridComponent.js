import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';

export default class EasyGridComponent extends Component {

    data = [
        { index: 1, img: require('../img/e1.png') },
        { index: 2, img: require('../img/e2.png') },
        { index: 3, img: require('../img/e3.png') },
        { index: 4, img: require('../img/e4.png') },
        { index: 5, img: require('../img/e5.png') },
    ]

    state = {
        img: require('../img/e5.png')
    }

    imgSelection = (index) => {
        this.setState({
            img: this.data[index].img
        })
    }

    renderIcon = () => {
        return this.data.map((emotion, index) => {
            return (
                <TouchableOpacity onPress={() => { this.imgSelection(index) }} key={index} style={{ margin: 5 }}>
                    <Image source={emotion.img} style={{ width: 60, height: 60 }} />
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <Grid style={{ flex: 1, marginTop: 20 }}>
                <Row style={{ justifyContent: "center", height: 100 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Bạn đang cảm thấy?</Text>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <Image style={{ height: 150, width: 150, margin: 20 }} source={(this.state.img)}></Image>
                </Row>
                <Row style={{ flexWrap: 'wrap' }} style={{ justifyContent: 'center' }}>
                    {this.renderIcon()}
                </Row>
            </Grid>
        )
    }
}

