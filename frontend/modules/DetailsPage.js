import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

import colors from "../assets/colors";
import NewPostButton from "../components/NewPostButton";
import PostCard from "../components/PostCard";

function DetailsPage({ navigation, route }) {
	const handlePress = () => {
		navigation.navigate("Post");
	};

	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={() => handlePress()}>
				<PostCard
					image={require("../assets/avatar.jpeg")}
					title="Meta Work Experience | California"
					description="by 07_inamul"
				/>
			</TouchableHighlight>
			<TouchableHighlight onPress={() => handlePress()}>
				<PostCard
					image={require("../assets/avatar.jpeg")}
					title="Meta SDE"
					description="by 07_inamul"
				/>
			</TouchableHighlight>
			<NewPostButton />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: colors.primary,
	},
});

export default DetailsPage;
