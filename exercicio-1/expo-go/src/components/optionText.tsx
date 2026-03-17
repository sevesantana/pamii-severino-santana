import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { theme } from "@/theme";

type ButtonProps = TouchableOpacityProps & {
    label: string,
}

export function OptionText( { label , ...rest} : ButtonProps ){
    return (
        <TouchableOpacity>
            <Text style={styles.label}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    label: {
        color: theme.colors.purple,
        fontSize: 12,
        fontWeight: 500
    }
})