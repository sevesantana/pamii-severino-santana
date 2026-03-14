import { StyleSheet, Text, View } from "react-native"

type TextBoxProps = {
    text : string,
    title: string,
}

export function TextBox({text, title}  : TextBoxProps){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.textBox}>{text}</Text> 
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 64,
    },
    textBox: {
        padding: 32,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#DCDCDC",
        fontWeight: 300,
        fontSize: 16,
    },
    title: {
        fontWeight: 600,
        fontSize: 16,
        marginBottom: 16,
        color: "#525FE1",
    }
})