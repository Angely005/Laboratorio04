import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { validateName, validateEmail, validatePassword, validateConfirmPassword, validatePhone } from "./Validators";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });

    let errorMsg = "";
    switch (field) {
      case "name":
        errorMsg = validateName(value);
        break;
      case "email":
        errorMsg = validateEmail(value);
        break;
      case "password":
        errorMsg = validatePassword(value);
        break;
      case "confirmPassword":
        errorMsg = validateConfirmPassword(form.password, value);
        break;
      case "phone":
        errorMsg = validatePhone(value);
        break;
    }
    setErrors({ ...errors, [field]: errorMsg });
  };

  const handleSubmit = () => {
    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      confirmPassword: validateConfirmPassword(form.password, form.confirmPassword),
      phone: validatePhone(form.phone),
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((err) => !err);

    if (isValid) {
      Alert.alert("✅ Registro exitoso");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={form.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => handleChange("password", text)}
      />
      {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={(text) => handleChange("confirmPassword", text)}
      />
      {errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(text) => handleChange("phone", text)}
      />
      {errors.phone ? <Text style={styles.error}>{errors.phone}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: "#007bff", padding: 15, borderRadius: 5 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  error: { color: "red", marginBottom: 10 },
});
