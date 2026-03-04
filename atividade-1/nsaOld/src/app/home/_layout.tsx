import { Drawer } from "expo-router/drawer";
import { StyleSheet } from 'react-native';

export default function Layout(){
    return (
        <Drawer>
            <Drawer.Screen name="home" options={{
                title:"NSA - ALUNO",
                headerStyle: {
                    backgroundColor: "#404040"
                },
                headerTintColor: "#fff",
                }} />
        </Drawer>
    )
}

const styles = StyleSheet.create ({
    headerButton: {
        flex: 0.1,
    }
})