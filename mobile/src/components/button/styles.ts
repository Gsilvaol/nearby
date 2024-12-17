import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        height: 56,
        maxHeight: 56,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.green.base,
        flexDirection: "row",
        gap: 14,
    },
    title: {
        color: colors.gray[100],
        fontFamily: fontFamily.bold,
        fontSize: 16,
    }
})
