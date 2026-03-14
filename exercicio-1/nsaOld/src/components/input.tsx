import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({...rest} : TextInputProps){
    return <TextInput style={styles.input} {...rest} />
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1.3,
        borderRadius: 8,
        fontSize: 12,
        width:"70%",
        borderColor: "#000",
        height: 50,
        paddingLeft: 8,
        fontWeight:400,
        backgroundColor: "#fff"
    },
})