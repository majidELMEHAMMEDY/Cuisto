import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, StyleSheet,TouchableOpacity } from 'react-native';

import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import { RecipeCard } from '../../AppStyles';

export default class Welcome extends React.Component {
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

    onPressBTn = item => {
        this.props.navigation.navigate('Home', { item });
    };



    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
               <Text>welcome home</Text>
                <TouchableOpacity onPress={this.onPressBTn}>
                    <Text>recipes</Text>
                </TouchableOpacity>
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
