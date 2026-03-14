import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({...rest} : TextInputProps){
    return <TextInput style={styles.input} {...rest} />
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderRadius: 16,
        fontSize: 18,
        width:"100%",
        borderColor: "#DCDCDC",
        height: 58,
        paddingLeft: 24,
        fontWeight:300,
    },
})