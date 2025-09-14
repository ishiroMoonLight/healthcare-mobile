import { Tabs, useRouter } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme ?? 'light'].background,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Planning',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar" color={color} />,
                }}
            />
            <Tabs.Screen
                name="message"
                options={{
                    title: 'Messages',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="message" color={color} />,
                }}
            />
            <Tabs.Screen
                name="setting"
                options={{
                    title: 'Setting',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color} />,
                }}
            />
            {/* <Tabs.Screen
                name="planning"
                options={{
                    title: 'Planning',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar" color={color} />,
                }}
            /> */}
            {/* Onglet Logout */}
            {/* <Tabs.Screen
                name="logout"
                options={{
                    title: "Logout",
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="arrow.right.square.fill" color={color} />,
                    // Au clic, on intercepte et déconnecte
                    tabBarButton: (props) => (
                        <HapticTab
                            {...props}
                            onPress={() => {
                                // Ici tu peux vider ton token / session
                                Alert.alert("Déconnexion", "Vous allez être redirigé vers le login.");
                                router.replace("/"); // retourne vers le login
                            }}
                        />
                    ),
                }}
            /> */}
        </Tabs>
    );
}
