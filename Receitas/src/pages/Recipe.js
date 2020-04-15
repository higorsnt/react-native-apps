import React, { useContext } from 'react';
import { View, StatusBar, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute, useNavigation } from '@react-navigation/native';

import Resume from '../components/Resume';
import Method from '../components/Method';
import Ingredients from '../components/Ingredients';
import NavigationContext from '../components/NavigationContext';

const Tab = createMaterialTopTabNavigator();

export default function Recipe() {

	const route = useRoute();
	const navigation = useNavigation();
	const { recipe } = route.params;

	function goBack() {
		navigation.goBack();
	}

	return (
		<View style={styles.container}>
			<TouchableHighlight
				underlayColor="transparent"
				onPress={goBack}
				style={styles.backButton}
			>
				<Image
					resizeMode="center"
					source={require('../../assets/icons/back.png')}
					style={styles.backImage}
				/>
			</TouchableHighlight>

			<Image source={{ uri: recipe.image }} style={styles.recipeImage} />
			<NavigationContext.Provider value={recipe}>
				<Tab.Navigator
					screenOptions={{
						showIcon: false,
						style: {
							backgroundColor: '#eeeeee',
						},
						labelStyle: {
							fontFamily: 'Lato-Light',
							fontSize: 14,
							height: 47,
							lineHeight: 47,
						},
						activeTintColor: '#333333',
						inactiveTintColor: '#CCCCCC',
					}}
				>
					<Tab.Screem name="Resume" component={Resume} />
					<Tab.Screen name="Ingredients" component={Ingredients} />
					<Tab.Screen name="Method" component={Method} />
				</Tab.Navigator>
			</NavigationContext.Provider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	recipeImage: {
		height: 250,
		marginTop: -75
	},
	backButton: {
		width: 40,
		height: 40,
		zIndex: 1,
		marginTop: 35,
		marginLeft: 10,
	},
	backImage: {
		width: 40,
		height: 40,
	},
});