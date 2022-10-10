import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { JOKES } from "../../constants/DUMMY";
import Footer from "../../containers/footer";
import Header from "../../containers/header";
import Joke from "./components/joke";
import SectionText from "./components/sectionText";

export interface HomeScreenProps {}

export interface JokeI {
    content: string;
    id: number;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
    const [jokes, setJokes] = React.useState(JOKES);
    const [currentJoke, setCurrentJoke] = React.useState<JokeI | null>(null);

    React.useEffect(() => {
        ranDomJoke();
    }, []);

    function ranDomJoke() {
        const ranDomIndex = Math.floor(Math.random() * Number(jokes.length - 1));
        const exits = jokes[ranDomIndex];

        setCurrentJoke(exits ? exits : null);
        setJokes((prev) => prev.filter((item, index) => index !== ranDomIndex));
    }

    function onPressJoke(isFunny: boolean) {
        ranDomJoke();
    }

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <SectionText />
                {!Boolean(jokes.length === 0 && !currentJoke) ? (
                    <Joke joke={currentJoke} onPressJoke={onPressJoke} />
                ) : (
                    <View style={{ height: 100, backgroundColor: "#FFF", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 23 }}>End game</Text>
                    </View>
                )}
                <Footer />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get("window").height,
        backgroundColor: "#FFF",
    },
});

export default HomeScreen;
