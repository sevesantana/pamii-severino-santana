import { StyleSheet, Text, View } from "react-native";

import { OptionsButton } from "@/components/optionsButton";

export default function Home(){
    return(
            <View style={styles.container}>
                <Text style={styles.title}>SELECIONE A HABILITAÇÃO</Text>

                <View style={styles.textBox}>
                    <Text style={styles.text}>ENSINO MÉDIO COM DESENVOLVIMENTO DE SISTEMAS - NOVOTEC</Text>
                </View>

                <Text style={styles.title}>DADOS DA CLASSE SELECIONADA</Text>

                <View style={styles.textBox}>
                    <Text style={styles.text}>RM: 2401234</Text>
                    <Text style={styles.text}>Semestre OC:     Ano OC: 2024</Text>
                    <Text style={styles.text}>Módulo/Série Atual: 3 SERIE</Text>
                    <Text style={styles.text}>Turma: TURMA A</Text>
                    <Text style={styles.text}>Grupo do Componente: GRUPO B</Text>
                    <Text style={styles.text}>Situação da Matrícula: CURSANDO</Text>
                    <Text style={styles.text}>Data da situação: 16/01/2024</Text>
                </View>

                <Text style={styles.title}>MENU DE NAVEGAÇÃO</Text>

                <View style={styles.options}>
                    <OptionsButton label="Aulas e faltas" activeOpacity={0.9}/>
                    <OptionsButton label="Mensagens" activeOpacity={0.9}/>
                    <OptionsButton label="Horários das aulas" activeOpacity={0.9}/>
                    <OptionsButton label="Declarações" activeOpacity={0.9}/>
                    <OptionsButton label="Boletim" activeOpacity={0.9}/>
                    <OptionsButton label="Foto" activeOpacity={0.9}/>
                    <OptionsButton label="Código de Entrada" activeOpacity={0.9}/>
                </View>

                <View  style={styles.footer}>
                    <Text style={styles.footerText}> Sistema NSA</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#e1e1e1",
        paddingBottom: 60,
    },
    textBox: {
        padding: 8,
        borderWidth: 1.5,
        borderRadius: 8,
        borderColor: "#000",
        width: "95%",
        backgroundColor: "#fff"
    },
    text: {
        fontWeight: 600,
        fontSize: 15,
    },
    title: {
        fontWeight: 800,
        fontSize: 14,
        marginTop: 4,
        color: "#000",
    },
    options: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 4,
        marginTop: 4,
        width: "65%",
    },
    footer : {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#404040",
        borderTopWidth: 2,
        borderTopColor: "#7f7f7f"
    },
    footerText: {
        color: "#fff",
    }
})