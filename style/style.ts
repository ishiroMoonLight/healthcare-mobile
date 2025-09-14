import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        backgroundColor: "#007AFF",
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