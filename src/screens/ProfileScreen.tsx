import React, { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useAuth } from "../context/AuthContext";

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const { user, logout, changeUserName, changePassword } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [password, setPassword] = useState("");
  const handleUpdate = () => {
    changeUserName(name);

    if (password.trim()) {
      changePassword(password);
    }

    Alert.alert(
      "Profile Updated",
      "Your information has been updated successfully.",
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom + 30,
          },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Profile</Text>
        <Text style={styles.subHeading}>Manage your account settings</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.readOnlyBox}>
            <Text style={styles.readOnlyText}>{user?.email}</Text>
          </View>

          <Text style={styles.label}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter new password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            style={styles.input}
          />

          <Pressable
            onPress={handleUpdate}
            style={({ pressed }) => [
              styles.updateButton,
              pressed && {
                opacity: 0.8,
              },
            ]}
          >
            <Text style={styles.updateButtonText}>Update Info</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={logout}
          style={({ pressed }) => [
            styles.logoutButton,
            pressed && {
              opacity: 0.8,
            },
          ]}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF8F1",
  },

  content: {
    paddingHorizontal: 20,
  },

  heading: {
    color: "#1F2937",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 8,
  },

  subHeading: {
    color: "#6B7280",
    fontSize: 15,
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#F2D7C2",
    marginBottom: 24,
  },

  label: {
    color: "#1F2937",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10,
    marginTop: 16,
  },

  input: {
    backgroundColor: "#FFF8F1",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#F2D7C2",
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 16,
    color: "#1F2937",
  },

  readOnlyBox: {
    backgroundColor: "#F9FAFB",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
    paddingVertical: 15,
  },

  readOnlyText: {
    color: "#6B7280",
    fontSize: 15,
    fontWeight: "600",
  },

  updateButton: {
    backgroundColor: "#E85D04",
    borderRadius: 14,
    alignItems: "center",
    paddingVertical: 16,
    marginTop: 28,
  },

  updateButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  logoutButton: {
    borderWidth: 1,
    borderColor: "#E85D04",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 16,
    marginBottom: 20,
  },

  logoutText: {
    color: "#E85D04",
    fontSize: 16,
    fontWeight: "800",
  },
});
