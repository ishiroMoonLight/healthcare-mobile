import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    message: {
        padding: 10,
        borderRadius: 8,
        marginVertical: 4,
        maxWidth: '80%',
    },
    userMessage: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
        color: '#1c1c1c',
    },
    coachMessage: {
        backgroundColor: '#E2E2E2',
        alignSelf: 'flex-start',
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    inputMessage: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
    },
    coachItem: {
        padding: 16,
        backgroundColor: '#1D3D47',
        borderRadius: 8,
        marginBottom: 12,
    },
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
        //   bottom: 0,
        //   left: 0,
        //   position: 'absolute',
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
    },
    addButton: {
        // vert foncé
        backgroundColor: "#41830fff",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 10,
    },
    addButtonText: {
        color: "#fff",
        fontWeight: "bold",
    }
});