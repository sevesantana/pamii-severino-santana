import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { theme } from "@/theme";

type ButtonProps = TouchableOpacityProps & {
    label: string,
}

export function Button( {label, ...rest} : ButtonProps ){
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    button: {
        padding: 16,
    },
    label: {
        color: theme.colors.aWhite,
        fontSize: 16,
    }
})