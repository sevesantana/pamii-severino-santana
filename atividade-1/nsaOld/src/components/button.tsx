import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { StyleSheet } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    label : string
}

export function Button({label, ...rest} : ButtonProps){
    return (
        <TouchableOpacity style={styles.button}{...rest}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    button:{
        width: "48%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "#212121",
        height: 60,
        padding: 16,
    },
    label: {
        fontSize: 12,
        fontWeight: 400,
        color: "#fff",
        textAlign: "center",
    }
})