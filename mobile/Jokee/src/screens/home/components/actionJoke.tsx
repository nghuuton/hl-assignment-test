import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ActionJokeProps {
    onPressJoke: (isFunny: boolean) => void;
}

const ActionJoke: React.FC<ActionJokeProps> = ({ onPressJoke }) => {
    return (
        <View style={styles.action}>
            <TouchableOpacity style={styles.button} onPress={() => onPressJoke(true)}>
                <Text style={styles.buttonText}>This is Funny!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#29B363" }]} onPress={() => onPressJoke(false)}>
                <Text style={styles.buttonText}>This is not Funny.</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    action: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "20%",
    },

    button: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: "#2C7EDB",
    },

    buttonText: {
        color: "#FFF",
    },
});

export default ActionJoke;
