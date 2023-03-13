// Import React
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Button } from "react-native";

// Import Scanner
import { BarCodeScanner } from "expo-barcode-scanner";

function Scanner() {
	// useStates
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	// Actions
	const handleBarCodeScanned = ({ data, type }) => {
		setScanned(true);
		Alert.alert("Tarama başarılı!", `Barkod Tipi: ${type} \n Barkod Numarası: ${data}`);
	};

	// useEffects
	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	return (
		<View style={styles.container}>
			{hasPermission === null && <Text>Requesting for camera permission</Text>}
			{hasPermission === false && <Text>No access to camera</Text>}
			{hasPermission && (
				<BarCodeScanner
					style={StyleSheet.absoluteFillObject}
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				/>
			)}
			{scanned && <Button title="New Scan" onPress={() => setScanned(false)} />}
		</View>
	);
}

export default Scanner;

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
