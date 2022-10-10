import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.description}>
                This apps created as part of Hlsolutions program. The materials contained on this website are provided for general information only and do not
                constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular state meant and accepts no liability for any
                loss or damage which may arise from reliance on the information contained on this site.
            </Text>
            <Text style={styles.copyRight}>Copyright 2021 HLS</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 10,
        borderTopWidth: 0.3,
        borderTopColor: "#646464",
    },

    description: {
        color: "#646464",
        textAlign: "center",
    },

    copyRight: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: "400",
    },
});

export default Footer;
