import React from 'react';
import { View, StyleSheet, TouchableHighlight, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RecipeItem({ data }) {

	const navigation = useNavigation();

	function openRecipe() {
		navigation.navigate('Recipe', { recipe: data });
	}

	return (
		<TouchableHighlight 
			activeOpacity={0.25}
			onPress={openRecipe}
			underlayColor="#ddd"
		>
			<View style={styles.recipe}>
				<Image source={{ uri: data.image }} style={styles.image} />

				<View style={styles.info}>
					<Text style={styles.recipeTitle}>{data.title}</Text>
					<Text style={styles.recipeAuthor}>{data.author}</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	recipe: {
		flex: 1,
		flexDirection: 'row',
		margin: 8,
	},
	image: {
		width: 180,
		height: 120,
	},
	info: {
		flex: 1,
		flexDirection: 'column',
		marginLeft: 8,
		justifyContent: "center"
	},
	recipeTitle: {
		fontFamily: 'Lato',
		fontWeight: 'bold',
		fontSize: 17,
		marginBottom: 10
	},
	recipeAuthor: {
		fontFamily: 'Lato',
		fontSize: 12,
		color: '#AAA',
		fontWeight: 'bold'
	}
})