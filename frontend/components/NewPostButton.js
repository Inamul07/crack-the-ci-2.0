import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../assets/colors";

function NewPostButton() {
	const navigation = useNavigation();

	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity onPress={() => navigation.navigate("AddPost")}>
				<View style={styles.button}>
					<Image
						style={styles.image}
						source={require("../assets/floatingButtonIcon.png")}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
}

export default NewPostButton;

const styles = StyleSheet.create({
	buttonContainer: {
		position: "absolute",
		bottom: 25,
		right: 20,
		zIndex: 1,
	},
	button: {
		width: 65,
		height: 65,
		backgroundColor: colors.secondary,
		borderRadius: 37,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 50,
		height: 50,
	},
});
