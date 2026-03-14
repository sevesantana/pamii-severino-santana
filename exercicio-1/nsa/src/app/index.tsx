import { StyleSheet, Text, View } from "react-native";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import { Link, useRouter } from "expo-router";

export default function Index(){
    const router = useRouter();

    return(
            <View style={styles.container} >
                
                <Text style={styles.title}>Entre</Text>
                <Text style={styles.subtitle}>Aluno</Text>

                <View style={styles.form}>
                    <Input placeholder="Código da Etec" />
                    <Input placeholder="RM" />
                    <Input placeholder="Senha" />
                
                    <Button label="Entrar" activeOpacity={0.5} onPress={() => router.push("/home/home")}/>
                </View>

                <View style={styles.options}>
                    <Text><Link href="/passwordRecovery"> Clique aqui</Link></Text>
                    <Text style={styles.newPassword}>
                        Esqueceu a senha?
                    </Text>
                    <Text style={styles.privacyPolicy}>Privacidade</Text>
                </View>

                <Text style={styles.footer}>Sistema NSA - Versão 1.36.65</Text>
                
            </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: "center",
        padding: 32,
        backgroundColor: "#F3F9FB"
    },
    title: {
        fontSize: 48,
        fontWeight: 600,
    },
    subtitle: {
        fontSize: 32,
        fontWeight: 400,
        color: "#525FE1"
    },
    form: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
        gap: 16,
    },
    options: {
        marginTop: 32,
        paddingLeft: 8,
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
        paddingLeft: 8,
        fontWeight: 300,
    },
    passwordRecovery: {
        fontWeight: 700,
        alignSelf: "center",
        marginBottom: -18,
        marginLeft: -25
    }
})