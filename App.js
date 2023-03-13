// Import React
import React, { Fragment } from "react";

// Import Expo
import { StatusBar } from "expo-status-bar";

// Import Router
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Import Pages
import Scanner from "./src/screens/Scanner";
import Home from "./src/screens/Home";

// Init Stack
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Fragment>
			<StatusBar style="auto" networkActivityIndicatorVisible />
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Scanner" component={Scanner} />
				</Stack.Navigator>
			</NavigationContainer>
		</Fragment>
	);
}
