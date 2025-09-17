import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { styles } from "@/style/style";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//     gap: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 24,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     backgroundColor: "#fff",
//     marginBottom: 12,
//   },
//   linkContainer: {
//     marginTop: 16,
//   },
//   linkText: {
//     color: "#007BFF",
//     fontSize: 16,
//   },
// });

export default function LoginScreen() {
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [password, setPassword] = useState("password123");
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }
    // Alert.alert("Login", `Email: ${email}\nPassword: ${password}`);
    router.push("/home");
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
        <ThemedText type="title">Sign-in Heathcare!</ThemedText>
      </ThemedView>

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

      {/* <Button title="Se connecter" onPress={handleLogin} /> */}

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleLogin}
      >
        <ThemedText style={styles.addButtonText}>Se connecter</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity style={{
        marginTop: 16,
      }}>
        <Link href="/register" style={{
          color: "#007BFF",
          fontSize: 16,
        }}>
          Pas encore de compte ?
        </Link>
      </TouchableOpacity>
    </ParallaxScrollView >
  );
}

