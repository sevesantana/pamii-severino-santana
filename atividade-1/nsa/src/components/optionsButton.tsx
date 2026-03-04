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
        backgroundColor: "#faf8ff",
        height: 75,
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    label: {
        color: "#1a1b21",
        fontWeight: 600,
        fontSize: 18,
        textAlign: "center"
    }
})