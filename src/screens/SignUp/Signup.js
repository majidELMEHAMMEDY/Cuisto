import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, StyleSheet,TouchableOpacity } from 'react-native';

import MenuImage from '../../components/MenuImage/MenuImage';
import { RecipeCard } from '../../AppStyles';

export default class Signup extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Welcome',
        headerLeft: () => <MenuImage
            onPress={() => {
                navigation.openDrawer();
            }}
        />
    });

    constructor(props) {
        super(props);
    }





    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>welcome Signup</Text>

            </View>
        );
    }
}





const styles = StyleSheet.create({
    container: RecipeCard.container,
    photo: RecipeCard.photo,
    title: RecipeCard.title,
    category: RecipeCard.category
});
