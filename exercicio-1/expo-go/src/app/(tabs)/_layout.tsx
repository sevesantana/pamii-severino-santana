import { Tabs } from "expo-router";

import { Ionicons, Octicons } from '@expo/vector-icons';

import { HeaderLogo } from "@/components/headerLogo";
import { LoginButton } from "@/components/loginButton";
import { theme } from "@/theme";
import { View } from "react-native";

export default function Layout(){
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: theme.colors.gray,
                height: 105,
                borderTopColor: theme.colors.gray,
            },

            tabBarItemStyle: {
                paddingVertical: 10,
            },

            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 700,
                marginTop: 4,
            },

            tabBarActiveTintColor: theme.colors.icon.selected,
            tabBarInactiveTintColor: theme.colors.icon.unselected,

            headerStyle: {
                backgroundColor: theme.colors.gray
            },

            headerTitle: () => <HeaderLogo />,

            headerRight: () => <LoginButton />,
            
        }}>
            <Tabs.Screen name="index" options={{
                
                tabBarIcon: ({focused}) => 
                    <View style = {{
                        backgroundColor: focused ? theme.colors.icon.selectedBackground : "transparent",
                        borderRadius: 16,
                        height: 28,
                        width: 56,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Octicons 
                        name="home" 
                        color={focused ? theme.colors.icon.selected : theme.colors.icon.unselected} 
                        size={18}
                        />

                    </View>,

                tabBarLabel: "Home",
            }}/>
            <Tabs.Screen name="settings" options={{
                tabBarIcon: ({focused}) =>
                     <View style={{
                        backgroundColor: focused ? theme.colors.icon.selectedBackground : "transparent",
                        borderRadius: 16,
                        height: 28,
                        width: 56,
                        justifyContent: "center",
                        alignItems: "center",
                     }}>
                        <Ionicons 
                        name="settings-sharp" 
                        color={focused ? theme.colors.icon.selected : theme.colors.icon.unselected} 
                        size={20} />
                     </View>,

                tabBarLabel: "Settings",
            }}/>
        </Tabs>
    )
}