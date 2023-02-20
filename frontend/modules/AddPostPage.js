import React, { useState } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import colors from "../assets/colors";
import CustomButton from "../components/CustomButton";

export default function AddPostPage() {
	const [selected, setSelected] = useState("");
	const [display, setDisplay] = useState(false);

	const data = [
		{ key: "1", value: "Meta" },
		{ key: "2", value: "Amazon" },
		{ key: "3", value: "Apple" },
		{ key: "4", value: "Netflix" },
		{ key: "5", value: "Google" },
		{ key: "6", value: "Others" },
	];

	return (
		<View style={styles.container}>
			<ScrollView>
				<View>
					<SelectList
						boxStyles={styles.input}
						dropdownStyles={{
							margin: 20,
							marginTop: 0,
							backgroundColor: colors.secondary,
						}}
						notFoundText="Others"
						placeholder="Select Company"
						search={false}
						setSelected={(val) => {
							setSelected(val);
							val == 6 ? setDisplay(true) : setDisplay(false);
						}}
						data={data}
					/>
					{display && (
						<View>
							<TextInput
								style={styles.input}
								placeholder="Comapny name"
							/>
							<TextInput
								style={styles.input}
								placeholder="Comapny branch"
							/>
						</View>
					)}
					<TextInput
						style={styles.input}
						placeholder="Post title"
						selectionColor={colors.primary}
					/>
					<TextInput
						multiline
						placeholder="Post Description"
						style={styles.input}
						selectionColor={colors.primary}
					/>
					<View style={styles.button}>
						<CustomButton title={"Submit"} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
	},
	input: {
		margin: 20,
		borderWidth: 1,
		padding: 10,
		color: colors.primary,
		borderRadius: 30,
		backgroundColor: colors.secondary,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
	},
});
