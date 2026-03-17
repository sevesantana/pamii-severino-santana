import { StyleSheet, Text, View } from "react-native";

import { Button } from "@/components/button";
import { OptionText } from "@/components/optionText";

import { theme } from "@/theme";

export default function Index() {
    return(
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>
                    Development servers
                </Text>

                <View style={styles.optionText}>
                    <OptionText label="HELP"/>
                </View>
            </View>

            <View style={styles.buttonBox}>
                <Button label="exp://10.0.2.2:8081"/>

                <View style={styles.separator} />

                <Button label="Enter URL" />

                <View style={styles.separator} />

                <Button label="Scan QR" />
            </View>

            <View style={styles.titleBox}>
                <Text style={styles.title}>
                    Recent History
                </Text>

                <View style={styles.optionText}>
                    <OptionText label="CLEAR" />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black,
        padding: 16,
    },
    title: {
        color: theme.colors.aWhite,
        fontWeight: 500,
        fontSize: 14,
        marginLeft: 32,
        marginTop: 12,
    },
    titleBox: {
        flexDirection: "row",
    },
    optionText: {
        flex: 1,
        alignItems: "flex-end",
        marginTop: 12,
        marginRight: 32,
    },
    buttonBox: {
        marginTop: 24,
        backgroundColor: theme.colors.gray,
        borderRadius: 12,
        borderWidth: 0.6,
        overflow: "hidden",
        borderColor: theme.colors.beige
    },
    separator: {
        height: 0.6,
        backgroundColor: theme.colors.beige,
    }
})