import { StyleSheet, Text, View } from "react-native";

import { OptionsButton } from "@/components/optionsButton";

export default function Home(){
    return(
            <View style={styles.container}>
                <Text style={styles.title}>Habilitação</Text>

                <View style={styles.textBox}>
                    <Text style={styles.text}>Ensino médio com desenvolvimento de sistemas</Text>
                </View>

                <Text style={styles.title}>Dados da classe selecionada</Text>

                <View style={styles.textBox}>
                    <Text style={styles.text}>RM: 2401234</Text>
                    <Text style={styles.text}>Ano OC: 2024</Text>
                    <Text style={styles.text}>Módulo/Série Atual: 3 Serie</Text>
                    <Text style={styles.text}>Turma: Turma A</Text>
                    <Text style={styles.text}>Grupo do Componente: Grupo B</Text>
                    <Text style={styles.text}>Situação da Matrícula: Cursando</Text>
                    <Text style={styles.text}>Data da situação: 16/01/2024</Text>
                </View>

                <View style={styles.options}>
                    <OptionsButton label="Aulas e faltas" activeOpacity={0.5}/>
                    <OptionsButton label="Horários das aulas" activeOpacity={0.5}/>
                    <OptionsButton label="Boletim" activeOpacity={0.5}/>
                    <OptionsButton label="Mensagens" activeOpacity={0.5}/>
                    <OptionsButton label="Declarações" activeOpacity={0.5}/>
                    <OptionsButton label="Foto" activeOpacity={0.5}/>
                </View>

            </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f4f3fa"
    },
    textBox: {
        padding: 24,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: "#DCDCDC",
        width: "90%",
        backgroundColor: "#faf8ff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    text: {
        fontWeight: 300,
        fontSize: 16,
        color: "#1a1b21"
    },
    title: {
        fontWeight: 600,
        fontSize: 16,
        marginTop: 16,
        marginBottom: 8,
        color: "#1a1b21",
    },
    options: {
        justifyContent: "center",
        flexWrap: "wrap",
        alignContent: "center",
        marginTop: 36,
        gap: 16,
        width: "100%",
        flexDirection: "row",
    },
})