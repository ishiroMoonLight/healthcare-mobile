import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { styles } from '@/style/style';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

const Message = () => {
    const coaches = [
        { id: 1, name: 'Coach Alice' },
        { id: 2, name: 'Coach Bob' },
        { id: 3, name: 'Coach Charlie' },
    ];
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
                <ThemedText type="title">Nos coachs sont là pour vous aider!</ThemedText>
            </ThemedView>
            <ScrollView style={{ flex: 1, padding: 20 }}>
                {coaches.map((coach) => (
                    <TouchableOpacity
                        key={coach.id}
                        style={styles.coachItem}
                        onPress={() => router.push(`/messages/${coach.id}`)}
                    >
                        <ThemedText type="title">{coach.name}</ThemedText>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ParallaxScrollView>
    );
};

export default Message;