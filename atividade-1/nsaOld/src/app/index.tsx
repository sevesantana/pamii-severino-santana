import { Image, StyleSheet, Text, View } from "react-native";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import { OptionsButton } from "@/components/optionsButton";
import { useRouter } from "expo-router";

export default function Index(){
    const router = useRouter();

    return(
            <View style={styles.container} >
                
                <Image source={require("@/assets/images/nsalogo.png")} style={styles.illustration}/>

                <View style={styles.form}>
                    <Input placeholder="Código da Etec (ex: 031)" />
                    <Input placeholder="Digite seu RM" />
                    <Input placeholder="Digite sua senha" />
                
                    <Button label="ENTRAR" activeOpacity={0.5} onPress={() => router.push("/home/home")}/>
                </View>

                <View style={styles.options}>
                    <OptionsButton label="NOVA SENHA" onPress={() => router.push("/passwordRecovery")}/>
                    <OptionsButton label="PRIVACIDADE"/>
                    <OptionsButton label="CÓDIGO DE ENTRADA"/>
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
        backgroundColor: "#e0e0e0"
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
        alignItems: "center",
        gap: 8,
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
        paddingLeft: 8,
        fontWeight: 700,
        alignSelf: "center",
    },
    passwordRecovery: {
        fontWeight: 700,
        alignSelf: "center",
        marginBottom: -18,
        marginLeft: -25
    },
    illustration: {
        justifyContent: "center",
        alignSelf: "center",
        width: "50%",
        height: 150,
        bottom: -20
    }
})