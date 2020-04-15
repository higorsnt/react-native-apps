import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'expo-linear-gradient';
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
			<LinearGradient 
				colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
				style={styles.gradientArea}
			>
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
			</LinearGradient>
			<Image source={{ uri: recipe.image }} style={styles.recipeImage} />

			<NavigationContext.Provider value={recipe}>
				<Tab.Navigator
					screenOptions={{
						showIcon: false,
						style: {
							backgroundColor: '#EEEEEE',
						},
						labelStyle: {
							fontFamily: 'Lato',
							fontSize: 14,
							height: 47,
							lineHeight: 47,
						},
						activeTintColor: '#333333',
						inactiveTintColor: '#CCCCCC',
					}}
				>
					<Tab.Screen name="Resume" component={Resume} options={{ tabBarLabel: 'Resumo' }} />
					<Tab.Screen name="Ingredients" component={Ingredients} options={{ tabBarLabel: 'Ingredientes' }} />
					<Tab.Screen name="Method" component={Method} options={{ tabBarLabel: 'Modo de Preparo' }} />
				</Tab.Navigator>
			</NavigationContext.Provider>
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	gradientArea: {
		zIndex: 1,
	},
	recipeImage: {
		height: 250,
		marginTop: -68
	},
	backButton: {
		width: 40,
		height: 40,
		marginTop: 25,
		marginLeft: 10,
	},
	backImage: {
		width: 40,
		height: 40,
	},
});