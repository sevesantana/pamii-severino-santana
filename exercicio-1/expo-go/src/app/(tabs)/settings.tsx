import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Button } from "@/components/button";

import { theme } from "@/theme";

export default function Settings() {
    return(
        <View style={styles.container}>
            <View style={styles.titleBox}>

                <Text style={styles.title}>
                   Theme
                </Text>

            </View>

            <View style={styles.buttonBox}>

                <Button label="Automatic"/>

                <View style={styles.separator} />

                <Button label="Light" />

                <View style={styles.separator} />

                <Button label="Dark" />

            </View>
            
            <View style={styles.titleBox}>

                <Text style={styles.title2}>
                    Automatic is only supported on operating systems that allow you to control the system-wide color scheme.
                </Text>

            </View>

                <Text style={styles.title}>
                        App Info
                </Text>

                <View style={styles.buttonBox}>
                    <View style={styles.infoBox}>
                        <Button label="Client version" />
                        <Text style={styles.infoText}>55.0.5</Text>
                    </View>

                    <View style={styles.separator} />
                    
                    <View style={styles.infoBox}>
                        <Button label="Supported SDK" />
                        <Text style={styles.infoText}>55</Text>
                    </View>

                </View>

            
            
            <Text style={styles.title}>
                    Delete Account
            </Text>

            <View style={styles.buttonBox}>

             <Text style={styles.title3}>
                This action is irreversible. It will delete your personal account, projects, and activity.
             </Text>                                                            

            <View style={styles.deleteButtonBox}>
                <TouchableOpacity style={styles.deleteButton}>

                    <Text style={styles.deleteButtonLabel}>Delete Account</Text>

                </TouchableOpacity>
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
        fontWeight: 600,
        fontSize: 14,
        marginLeft: 8,
    },
    title2: {
        color: "#8d8d8d",
        fontWeight: 500,
        fontSize: 14,
        marginLeft: 8,
        marginRight: 42,
        marginBottom: 24,
    },
    title3: {
        color: theme.colors.icon.selected,
        fontWeight: 500,
        fontSize: 13,
        marginLeft: 16,
        marginTop: 16,
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
        marginBottom: 24,
        backgroundColor: theme.colors.gray,
        borderRadius: 12,
        borderWidth: 1,
        overflow: "hidden",
        borderColor: theme.colors.beige,
    },
    infoBox: {
        flexDirection: "row",
    },
    infoText: {
        flex: 1,
        textAlign: "right",
        alignSelf: "center",
        marginRight: 16,
        color: theme.colors.icon.unselected,
        fontWeight: 400,
    },
    deleteButtonBox: {
        alignItems: "flex-end",
        marginTop: 16,
        marginRight: 12,
        marginBottom: 10
    },
    deleteButton: {
        backgroundColor: theme.colors.red,
        borderColor: theme.colors.lightRed,
        borderWidth: 0.8,
        borderRadius: 4,
        height: 38,
        width: 128,
        justifyContent: "center",
        alignItems: "center",
        
    },
    deleteButtonLabel: {
        color: theme.colors.lightRed, 
        fontSize: 14,
        fontWeight: "600",
    },
    separator: {
        height: 1,
        backgroundColor: theme.colors.beige,
    }
})