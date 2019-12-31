import React, { Fragment } from 'react'
import { View, Text, Image } from 'react-native'

const Category = (props) => {
    return (
        <View style={{
            heigth: 130, width: 130,
            marginLeft: 20, borderWidth: 0.4,
            borderColor: '#dddddd'
        }}>

            <View style={{ flex: 2 }}>
                <Image
                    source={props.imageUri}
                    style={{
                        flex: 1,
                        width: 130, height: 80,
                        resizeMode: 'cover'
                    }} />
            </View>
            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                <Text>{props.name}</Text>
            </View>
        </View>
    )
}

export default Category
