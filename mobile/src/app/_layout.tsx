import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { colors } from "@/styles/theme"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { useFonts, Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from "@expo-google-fonts/rubik"
import { Loading } from "@/components/loading";
import React from "react";

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content" // Mude para "light-content" se o texto da StatusBar for claro
            />

            <GestureHandlerRootView style={{ flex: 1 }}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        contentStyle: { backgroundColor: colors.gray[100] },
                    }}
                />
            </GestureHandlerRootView>
        </>
    )
}