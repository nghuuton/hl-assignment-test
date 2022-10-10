import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Images } from "../constants/images";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <View style={styles.header}>
            <Image style={[styles.avatar, { borderWidth: 1, width: 45, height: 45 }]} resizeMode="cover" source={Images.ic_gamecenter} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginRight: 10 }}>
                    <Text style={[styles.text, { color: "#646464" }]}>Username</Text>
                    <Text style={styles.text}>Subtitle</Text>
                </View>
                <Image style={styles.avatar} resizeMode="cover" source={Images.ic_user} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 4.5,
        paddingHorizontal: 10,
    },

    avatar: {
        height: 40,
        width: 40,
        borderRadius: 100,
        backgroundColor: "red",
    },

    text: {
        textAlign: "right",
    },
});

export default Header;
