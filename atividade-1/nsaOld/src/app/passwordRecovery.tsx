import { StyleSheet, Text, View } from "react-native";


import { Input } from "@/components/input";


import { OptionsButton } from "@/components/optionsButton";
import { useRouter } from "expo-router";


export default function Index(){
    const router = useRouter();


    return(
        <View style={styles.container} >

                <View style={styles.box}>

                    <View style={styles.form}>
                        <View style={styles.formHeader}>
                            <Text style={styles.formTitle}>SOLICITAR NOVA SENHA</Text>
                        </View>

                        <View style={styles.inputBox}>
                            <View style={styles.formItem}>
                                <Text style={styles.title}>Enviar como: </Text>
                                <Input style={{...styles.inputStyle, ...styles.inputForm}}/>
                            </View>

                            <View style={styles.formItem}>
                                <Text style={styles.title}>Código da Etec: </Text>
                                <Input style={{...styles.inputStyle, ...styles.inputForm}} keyboardType="number-pad"/>
                            </View>

                            <View style={styles.formItem}>
                                <Text style={styles.title}>CPF do aluno:  </Text>
                                <Input style={{...styles.inputStyle, ...styles.inputForm}} keyboardType="number-pad"/>
                            </View>
                            
                            <View style={styles.formItem}>
                                <Text style={styles.title}>Data de nascimento do aluno:</Text>
                                <Input style={{...styles.inputStyle, ...styles.inputForm}} keyboardType="number-pad"/>
                            </View>
                        </View>
                    </View>

                    <View style={styles.options}>
                        <OptionsButton label="ENVIAR" activeOpacity={0.9}/>
                    
                        <Text style={styles.footer}>Sistema NSA - Versão 1.36.65</Text>
                    </View>

                </View>

            </View>
    )
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#eaeaea",
        padding: 12
    },
    box: {
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#ffffff",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    subtitle: {
        fontSize: 32,
        fontWeight: 400,
        color: "#525FE1"
    },
    form: {
        gap: 8,
        alignContent: "center",
        
    },
    options: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 24,
        width: "75%",
        gap: 4,
        textAlign: "center",
    },
    newPassword: {
        fontWeight: 300,
    },
    privacyPolicy: {
        textAlign: "right",
        paddingRight: 8,
        marginTop: -20,
    },
    footer: {
        fontWeight: 700,
        fontSize: 16,
        alignSelf: "center",
        margin: 16,
        color: "grey",
    },
    formHeader: {
        backgroundColor: "#343a40",
        alignSelf: "stretch",
        alignItems: "center",
        padding: 12,
        marginTop: -16,
        marginLeft: -16,
        marginRight: -16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    formTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 400,
    },
    title: {
        fontWeight: 700,
        
    },
    passwordRecovery: {
        fontWeight: 700,
        alignSelf: "center",
        marginBottom: -18,
        marginLeft: -25
    },
    inputStyle: {
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 14,
        borderColor: "#c5c5c5",
        height: 38,
        fontWeight:500,
        width: "60%"
    },
    inputBox: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 12,

    },
    inputForm: {
        
    },
    formItem: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
})