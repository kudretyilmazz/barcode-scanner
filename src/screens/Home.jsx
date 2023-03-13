// Import React
import React from "react";
import { View, Button, StyleSheet } from "react-native";

// Import React Navigation
import { useNavigation } from "@react-navigation/native";

function Home() {
	// Variables
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Button title="New Scan" onPress={() => navigation.navigate("Scanner")} />
		</View>
	);
}

export default Home;

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
