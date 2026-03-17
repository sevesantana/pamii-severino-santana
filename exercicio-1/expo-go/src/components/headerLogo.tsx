import { Image, StyleSheet, Text, View } from "react-native";

import { theme } from "@/theme";

export function HeaderLogo(){
    return (
        <View style={styles.container}>
            <Image 
                source={require("../../assets/images/logo.png")}
                style={styles.image}
            />

            <Text style={styles.text}>
                Expo Go
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: "row"
    },
    image: {
        width: 32,
        height: 32,
        marginRight: 8,
    },
    text: {
        color: theme.colors.aWhite,
        fontSize: 22,
        fontWeight: 600,
    }
})