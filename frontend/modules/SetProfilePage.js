import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import colors from "../assets/colors";
import CustomButton from "../components/CustomButton";

function SetProfilePage({ navigation }) {
	const [image, setImage] = useState(null);

	const pickImage = async () => {
		try {
			const { status } =
				await ImagePicker.requestCameraPermissionsAsync();
			if (status !== "granted") {
				alert(
					"Sorry, we need camera roll permissions to make this work!"
				);
				return;
			}

			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: false,
			});

			if (!result.canceled) {
				console.log(result.assets);
				setImage(result.assets[0].uri);
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<TouchableOpacity onPress={pickImage}>
					<Image
						style={styles.image}
						source={
							image == null
								? require("../assets/avatar.jpeg")
								: { uri: image }
						}
					/>
				</TouchableOpacity>
			</View>
			<TextInput
				style={styles.input}
				placeholder="Enter Username"
				selectionColor={colors.primary}
			/>
			<CustomButton
				title="Continue"
				onPress={() => navigation.replace("Home")}
			/>
		</View>
	);
}

export default SetProfilePage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
		alignItems: "center",
		padding: 50,
	},
	imageContainer: {
		marginVertical: 20,
		marginTop: 75,
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 75,
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
});
