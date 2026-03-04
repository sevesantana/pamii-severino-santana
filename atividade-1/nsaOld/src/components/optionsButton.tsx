import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type OptionsButtonProps = TouchableOpacityProps & {
    label : string,
}

export function OptionsButton({label, ...rest} : OptionsButtonProps){
    return(
            <TouchableOpacity style={styles.button}{...rest}>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    button: {
        backgroundColor: "#212121",
        height: 60,
        width: "48%",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderRadius: 8,
    },
    label: {
        color: "#fff",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
    }
})