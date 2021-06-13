import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="ACCEUIL"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Welcome');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="CATÉGORIES"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="RECHERCHER"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
           <MenuButton
            title="MON PROFIL"
            source={require('../../../assets/icons/profil.png')}
            onPress={() => {
              navigation.navigate('Profile');
              navigation.closeDrawer();
            }}
          />
<MenuButton
            title="INSCRIPTION"
            source={require('../../../assets/icons/pencil.png')}
            onPress={() => {
              navigation.navigate('Signup');
              navigation.closeDrawer();
            }}
          />
          
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};



const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20
  }
});