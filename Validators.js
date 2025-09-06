export const validateName = (name) => {
  if (!name) return "El nombre es obligatorio";
  if (name.length < 3) return "El nombre debe tener al menos 3 caracteres";
  return "";
};

export const validateEmail = (email) => {
  if (!email) return "El correo es obligatorio";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Formato de correo inválido";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "La contraseña es obligatoria";
  if (password.length < 6) return "Debe tener al menos 6 caracteres";
  if (!/[A-Z]/.test(password)) return "Debe contener una letra mayúscula";
  if (!/[0-9]/.test(password)) return "Debe contener un número";
  return "";
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return "Debe confirmar la contraseña";
  if (password !== confirmPassword) return "Las contraseñas no coinciden";
  return "";
};

export const validatePhone = (phone) => {
  if (!phone) return "El teléfono es obligatorio";
  const regex = /^[0-9]{9}$/; // formato de 9 dígitos
  if (!regex.test(phone)) return "El teléfono debe tener 9 dígitos numéricos";
  return "";
};
