import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { styles } from '@/style/style';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

const Setting = () => {
    // 🔹 Données statiques pour l’instant (plus tard tu pourras fetch depuis ton backend)
    const [user, setUser] = useState({
        nom: "Jean Dupont",
        age: 28,
        poids: 72,  // en kg
        taille: 178 // en cm
    });

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/healthcare/healthcare-bg.jpg')}
                    style={styles.reactLogo}
                />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Mon Profil</ThemedText>
                <HelloWave />
            </ThemedView>

            {/* 🔹 Affichage des infos user */}
            <View style={{ padding: 20, gap: 10 }}>
                <ThemedText type="default">👤 Nom : {user.nom}</ThemedText>
                <ThemedText type="default">🎂 Âge : {user.age} ans</ThemedText>
                <ThemedText type="default">⚖️ Poids : {user.poids} kg</ThemedText>
                <ThemedText type="default">📏 Taille : {user.taille} cm</ThemedText>
            </View>

            {/* 🔹 Bouton Déconnexion */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => router.replace('/')}
            >
                <ThemedText style={styles.addButtonText}>Se déconnecter</ThemedText>
            </TouchableOpacity>
        </ParallaxScrollView>
    );
};

export default Setting;
