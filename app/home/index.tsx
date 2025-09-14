import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import {
    Button,
    Modal,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: "100%",
        width: "100%",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 16,
    },
    title: {
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: "#007AFF",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 10,
    },
    addButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    modalContent: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: '#1D3D47'
    },
    itemContainer: {
        padding: 12,
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: "#1D3D47",
    },
    status: {
        fontStyle: "italic",
        color: "gray",
    },
});

export default function Home() {
    const [planning, setPlanning] = useState([
        { id: 1, title: "Rendez-vous chez le médecin", date: "2024-07-01", status: "Pending" },
        { id: 2, title: "Prise de sang", date: "2024-07-10", status: "Pending" },
        { id: 3, title: "Consultation spécialisée", date: "2024-07-15", status: "Pending" },
        { id: 4, title: "Entrainement", date: "2024-07-15", status: "Pending" },
        { id: 5, title: "Méditation", date: "2024-07-15", status: "Pending" },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDate, setNewDate] = useState("");

    const [editModalVisible, setEditModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    // Ajouter un planning
    const addPlanning = () => {
        if (newTitle && newDate) {
            const newItem = {
                id: planning.length + 1,
                title: newTitle,
                date: newDate,
                status: "Pending",
            };
            setPlanning([...planning, newItem]);
            setNewTitle("");
            setNewDate("");
            setModalVisible(false);
        }
    };

    // Mettre à jour le statut
    const updateStatus = (status: string) => {
        if (selectedItem) {
            const updated = planning.map((item) =>
                item.id === selectedItem.id ? { ...item, status } : item
            );
            setPlanning(updated);
            setSelectedItem(null);
            setEditModalVisible(false);
        }
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
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Votre planning du jour:</ThemedText>
            </ThemedView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
            >
                <ThemedText style={styles.addButtonText}>+ Ajouter un planning</ThemedText>
            </TouchableOpacity>

            {/* Liste des plannings */}
            <ScrollView>
                {planning.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.itemContainer}
                        onPress={() => {
                            setSelectedItem(item);
                            setEditModalVisible(true);
                        }}
                    >
                        <ThemedText type="title">{item.title}</ThemedText>
                        <ThemedText>{new Date(item.date).toLocaleDateString()}</ThemedText>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Modal update */}
            <Modal visible={editModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <ThemedText type="title">
                        Modifier le status de : {selectedItem?.title}
                    </ThemedText>
                    <Button title="Marquer comme Terminé" onPress={() => updateStatus("Done")} />
                    <Button title="Marquer comme Skipped" onPress={() => updateStatus("Skipped")} />
                    <Button title="Annuler" color="red" onPress={() => setEditModalVisible(false)} />
                </View>
            </Modal>

            {/* Modal */}
            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <ThemedText type="title">Ajouter un planning</ThemedText>
                    <TextInput
                        placeholder="Titre"
                        style={styles.input}
                        value={newTitle}
                        onChangeText={setNewTitle}
                    />
                    <TextInput
                        placeholder="Date (YYYY-MM-DD)"
                        style={styles.input}
                        value={newDate}
                        onChangeText={setNewDate}
                    />
                    <Button title="Ajouter" onPress={addPlanning} />
                    <Button title="Annuler" color="red" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </ParallaxScrollView>
    );
}
