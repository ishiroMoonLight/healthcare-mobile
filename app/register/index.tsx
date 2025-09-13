import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function RegisterScreen() {
    const [name, setName] = useState("DOE John");
    const [email, setEmail] = useState("john.doe@gmail.com");
    const [password, setPassword] = useState("password123");

    const handleRegister = () => {
        if (!name || !email || !password) {
            Alert.alert("Erreur", "Veuillez remplir tous les champs");
            return;
        }
        // Appel API backend pour créer un compte
        Alert.alert("Inscription", `Nom: ${name}\nEmail: ${email}\nPassword: ${password}`);
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/healthcare/healthcare-bg.jpg')}
                    style={{
                        height: '100%', width: '100%',
                    }}
                />
            }
        >
            <ThemedView >
                <ThemedText type="title">Sign-up Heathcare!</ThemedText>
            </ThemedView>

            <TextInput
                style={styles.input}
                placeholder="Nom"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title="S'inscrire" onPress={handleRegister} />

            {/* Lien vers inscription */}
            <TouchableOpacity style={styles.linkContainer}>
                <Link href="/" style={styles.linkText}>
                    Deja un compte ?
                </Link>
            </TouchableOpacity>
        </ParallaxScrollView>

    );
}

export const unstable_settings = {
    headerShown: false, // pas de navbar
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
        gap: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        marginBottom: 12,
    },
    linkContainer: {
        marginTop: 16,
    },
    linkText: {
        color: "#007BFF",
        fontSize: 16,
    },
});
