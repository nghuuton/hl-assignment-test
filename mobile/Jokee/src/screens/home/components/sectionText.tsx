import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface SectionTextProps {}

const SectionText: React.FC<SectionTextProps> = () => {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>A joke a day keeps the doctor away</Text>
            <Text style={styles.subTitle}>If you joke wrong way, your teeth have to pay. (Serious)</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        backgroundColor: "#29B363",
        height: 180,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "500",
        color: "#FFF",
        marginBottom: 20,
    },
    subTitle: {
        color: "#FFF",
        fontSize: 13.5,
        fontWeight: "500",
    },
});

export default SectionText;
