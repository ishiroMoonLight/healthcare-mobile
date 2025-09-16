import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { styles } from '@/style/style';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Button, ScrollView, TextInput, View } from 'react-native';

interface MessageItem {
    id: number;
    sender: 'user' | 'coach';
    text: string;
}

const initialMessages: MessageItem[] = [
    { id: 1, sender: 'coach', text: 'Bonjour !' },
    { id: 2, sender: 'user', text: 'Salut !' },
];

const CoachChat = () => {
    const { coachId } = useLocalSearchParams<{ coachId: string }>();
    const [messages, setMessages] = useState<MessageItem[]>(initialMessages);
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = () => {
        if (newMessage.trim() === '') return;

        const message: MessageItem = {
            id: messages.length + 1,
            sender: 'user',
            text: newMessage,
        };

        setMessages([...messages, message]);
        setNewMessage('');
    };

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

            <View style={{ flex: 1, padding: 20 }}>
                <ThemedText type="title">Discussion avec le coach #{coachId}</ThemedText>
                <ScrollView style={{ flex: 1, marginVertical: 12 }}>
                    {messages.map((msg) => (
                        <View
                            key={msg.id}
                            style={[
                                styles.message,
                                msg.sender === 'user' ? styles.userMessage : styles.coachMessage,
                            ]}
                        >
                            <ThemedText darkColor={'#1c1c1c'}>{msg.text}</ThemedText>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Écrire un message..."
                        value={newMessage}
                        onChangeText={setNewMessage}
                        style={styles.inputMessage}
                    />
                    <Button title="Envoyer" onPress={sendMessage} />
                </View>
            </View>
        </ParallaxScrollView>
    );
};

export default CoachChat;
