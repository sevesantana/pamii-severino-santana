import { theme } from "@/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function LoginButton() {
    return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>
                    Log In
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    button: {
        marginRight: 32,
        padding: 10,
        borderWidth: 0.6,
        borderRadius: 32,
        borderColor: theme.colors.beige,

    },
    title: {
        color: theme.colors.icon.unselected,
        marginRight: 12,
        marginLeft: 12,
    },
})