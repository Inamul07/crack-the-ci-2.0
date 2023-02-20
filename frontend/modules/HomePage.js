import React, { useEffect } from "react";
import {
	View,
	StyleSheet,
	TouchableHighlight,
	BackHandler,
	Alert,
} from "react-native";

import Card from "../components/Card";
import NewPostButton from "../components/NewPostButton";

function HomePage({ navigation }) {
	const cardData = [
		["Meta", require("../assets/logos/meta.png")],
		["Apple", require("../assets/logos/apple.png")],
		["Amazon", require("../assets/logos/amazon.png")],
		["Netflix", require("../assets/logos/netflix.png")],
		["Google", require("../assets/logos/google.png")],
	];

	return (
		<View style={styles.container}>
			{cardData.map((item, key) => {
				return (
					<TouchableHighlight
						key={key}
						onPress={() =>
							navigation.navigate("Details", {
								company: item[0],
							})
						}
					>
						<Card image={item[1]} title={item[0]} />
					</TouchableHighlight>
				);
			})}
			<NewPostButton />
		</View>

		/* <TouchableHighlight onPress={() => alert("Pressed")}>
				<Card
					image={require("../assets/logos/meta.png")}
					title="Meta"
				/>
			</TouchableHighlight>
			<TouchableHighlight>
				<Card
					image={require("../assets/logos/apple.png")}
					title="Apple"
				/>
			</TouchableHighlight>
			<TouchableHighlight>
				<Card
					image={require("../assets/logos/amazon.png")}
					title="Amazon"
				/>
			</TouchableHighlight>
			<TouchableHighlight>
				<Card
					image={require("../assets/logos/netflix.png")}
					title="Netflix"
				/>
			</TouchableHighlight>
			<TouchableHighlight>
				<Card
					image={require("../assets/logos/google.png")}
					title="Google"
				/>
			</TouchableHighlight> */
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2D2D2D",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		flexDirection: "row",
		flexWrap: "wrap",
	},
});

export default HomePage;
