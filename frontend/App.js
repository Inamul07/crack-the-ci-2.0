import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "./modules/LoginPage";
import SignupPage from "./modules/SignupPage";
import HomePage from "./modules/HomePage";
import DetailsPage from "./modules/DetailsPage";
import PostPage from "./modules/PostPage";
import AddPostPage from "./modules/AddPostPage";
import SetProfilePage from "./modules/SetProfilePage";
import colors from "./assets/colors";

import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
	const backAction = (navigation) => {
		Alert.alert("Logout?", "Are you sure you want to go logout?", [
			{
				text: "Cancel",
				onPress: () => null,
				style: "cancel",
			},
			{ text: "YES", onPress: () => navigation.popToTop() },
		]);
		return true;
	};

	return (
		<NavigationContainer>
			<StatusBar backgroundColor={colors.primary} style="light" />
			<Stack.Navigator>
				<Stack.Screen
					name="Login"
					component={LoginPage}
					options={{
						headerShown: false,
						title: "Login",
						headerStyle: {
							backgroundColor: colors.secondary,
						},
					}}
				/>
				<Stack.Screen
					name="Signup"
					component={SignupPage}
					options={{
						headerShown: false,
						title: "Signup",
						headerStyle: {
							backgroundColor: colors.secondary,
						},
					}}
				/>
				<Stack.Screen
					name="SetProfile"
					component={SetProfilePage}
					options={{
						title: "Set Profile",
						headerShown: false,
						headerStyle: {
							backgroundColor: colors.secondary,
						},
					}}
				/>
				<Stack.Screen
					name="Home"
					component={HomePage}
					options={({ navigation }) => ({
						title: "Home",
						headerStyle: {
							backgroundColor: colors.secondary,
						},
						headerLeft: () => (
							<TouchableOpacity style={{ marginRight: 30 }}>
								<FontAwesome5
									name="bars"
									size={24}
									color={colors.primary}
								/>
							</TouchableOpacity>
						),
						headerRight: () => (
							<TouchableOpacity
								onPress={() => backAction(navigation)}
							>
								<FontAwesome5
									name="sign-out-alt"
									size={35}
									color={colors.primary}
								/>
							</TouchableOpacity>
						),
					})}
				/>
				<Stack.Screen
					name="Details"
					component={DetailsPage}
					options={{
						title: "Details",
						headerStyle: {
							backgroundColor: colors.secondary,
						},
					}}
				/>
				<Stack.Screen
					name="Post"
					component={PostPage}
					options={{
						title: "Post",
						headerStyle: {
							backgroundColor: colors.secondary,
						},
					}}
				/>
				<Stack.Screen
					name="AddPost"
					component={AddPostPage}
					options={{
						title: "Add Post",
						headerStyle: {
							backgroundColor: colors.secondary,
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
