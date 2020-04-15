import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Recipe from './pages/Recipe';

const Stack = createStackNavigator();

export default function Routes() {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name="Home"
					component={Home}
					options={{
						title: 'Receitas',
						headerStyle: {
							backgroundColor: '#FF7F50',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontSize: 20,
							fontFamily: 'Lato-Bold',
						}
					}}
				/>
				<Stack.Screen 
					name="Recipe"
					component={Recipe}
					options={{
						headerShown: false
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
