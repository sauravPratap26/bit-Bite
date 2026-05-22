import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { LoginScreen } from './src/screens/LoginScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const { isLoggedIn, logout, user } = useAuth();
  const insets = useSafeAreaInsets();

  if (!isLoggedIn) {
    return (
      <>
        <LoginScreen />
        <StatusBar style="dark" />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.homeContent,
          {
            paddingTop: insets.top + 24,
            paddingBottom: insets.bottom + 24,
          },
        ]}
      >
        <Text style={styles.kicker}>Logged in</Text>
        <Text style={styles.heading}>Hi, {user?.name}</Text>
        <Text style={styles.body}>
          Your dummy login is working. Next we can turn this into a restaurant dashboard or a
          customer food browsing screen.
        </Text>
        <Pressable
          accessibilityRole="button"
          onPress={logout}
          style={({ pressed }) => [styles.secondaryButton, pressed && styles.secondaryPressed]}
        >
          <Text style={styles.secondaryButtonText}>Log out</Text>
        </Pressable>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F1',
  },
  homeContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  kicker: {
    color: '#E85D04',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  heading: {
    color: '#1F2937',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 12,
  },
  body: {
    color: '#6B7280',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
  },
  secondaryButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderColor: '#E85D04',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  secondaryPressed: {
    opacity: 0.75,
  },
  secondaryButtonText: {
    color: '#E85D04',
    fontSize: 15,
    fontWeight: '800',
  },
});
