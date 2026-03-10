import { Stack } from "expo-router"

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="passwordRecovery" options={{ 
                title: "SENHAS",
                headerStyle: {
                    backgroundColor: "#404040",
                },
                headerTintColor: "#fff",
                }}/>
            <Stack.Screen name="home" options={{ headerShown: false}}/>
        </Stack>

    )
}