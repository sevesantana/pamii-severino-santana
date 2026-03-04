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
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: "#009FBD",
        height: 58,
    },
    label: {
        fontSize: 18,
        fontWeight: 400,
        color: "#FAFAFA",
    }
})