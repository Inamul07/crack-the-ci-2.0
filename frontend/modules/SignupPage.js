import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import colors from "../assets/colors";
import CustomButton from "../components/CustomButton";

function SignupPage({ navigation }) {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/logos/crackTheCI.png")}
				style={styles.logo}
			/>
			<TextInput
				style={styles.input}
				placeholder="E-mail"
				selectionColor={colors.primary}
			/>
			<TextInput
				secureTextEntry
				placeholder="Password"
				style={styles.input}
				selectionColor={colors.primary}
			/>
			<TextInput
				secureTextEntry={true}
				placeholder="Confirm Password"
				style={styles.input}
				selectionColor={colors.primary}
			/>
			<CustomButton
				title="Submit"
				onPress={() => navigation.replace("SetProfile")}
			/>
			<View style={styles.signupTextContainer}>
				<Text style={styles.signupText}>Already a user? </Text>
				<Text
					style={[
						styles.signupText,
						{
							color: "dodgerblue",
							fontStyle: "italic",
							textDecorationLine: "underline",
						},
					]}
					onPress={() => navigation.navigate("Login")}
				>
					Login
				</Text>
			</View>
		</View>
	);
}

export default SignupPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
		alignItems: "center",
		justifyContent: "center",
		padding: 50,
	},
	logo: {
		width: 200,
		height: 200,
		position: "absolute",
		top: 100,
	},
	input: {
		margin: 20,
		borderWidth: 1,
		padding: 10,
		color: colors.primary,
		borderRadius: 30,
		backgroundColor: colors.secondary,
		width: "100%",
	},
	button: {
		width: "100%",
		backgroundColor: colors.secondary,
		borderRadius: 20,
		margin: 20,
	},
	signupTextContainer: {
		alignSelf: "flex-end",
		flexDirection: "row",
	},
	signupText: {
		fontSize: 16,
		color: colors.secondary,
	},
});
