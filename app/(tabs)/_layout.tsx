import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'

export default function TabsLayout(){
    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#ffff",
            tabBarInactiveTintColor: "#4b4b4bff",
            tabBarStyle:{
                backgroundColor: "rgb(0, 0, 0)",
                borderColor: "rgb(48, 48, 48)",
            },
        }}>
            <Tabs.Screen 
            name="home"
            options={{
                title: "Início",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" color={color} size={size}/>
                )
            }}/>

            <Tabs.Screen 
            name="canais"
            options={{
                title: "Canais",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="tv" color={color} size={size}/>
                )
            }}/>
            <Tabs.Screen 
            name="filmes"
            options={{
                title: "Filmes",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="film" color={color} size={size}/>
                )
            }}/>
            <Tabs.Screen 
            name="series"
            options={{
                title: "Series",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="play" color={color} size={size}/>
                )
            }}/>
        </Tabs>
    )
}