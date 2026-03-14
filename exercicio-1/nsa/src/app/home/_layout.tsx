import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from "expo-router/drawer";
import { StyleSheet } from 'react-native';

export default function Layout(){
    return (
        <Drawer>
            <Drawer.Screen name="home" options={{
                title:"Aluno",
                headerRight: () => (
                    <Ionicons name="qr-code" size={24} color="white" style={styles.headerButton} />
                ),
                headerStyle: {
                    backgroundColor: "#48B3AF",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: 700,
                }
                }} />
        </Drawer>
    )
}

const styles = StyleSheet.create ({
    headerButton: {
        flex: 0.1,
    }
})