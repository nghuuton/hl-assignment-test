import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { JokeI } from "../home";
import ActionJoke from "./actionJoke";

export interface JokeProps {
    joke: JokeI | null;
    onPressJoke: (isFunny: boolean) => void;
}

const Joke: React.FC<JokeProps> = ({ joke, onPressJoke }) => {
    return (
        <View style={styles.content}>
            <Text style={styles.text}>{joke ? joke.content : ""}</Text>
            <ActionJoke onPressJoke={onPressJoke} />
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 22,
        paddingTop: 60,
        paddingBottom: 30,
    },

    text: {
        fontSize: 15,
        fontWeight: "400",
        color: "#646464",
    },
});

export default Joke;
