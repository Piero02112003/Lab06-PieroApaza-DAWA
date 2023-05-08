function validateForm(formData, requiredFields, optionalFields) {
    const errors = {};
    let hasErrors = false;
  
    // Verificar campos obligatorios
    for (const field of requiredFields) {
      if (!formData[field]) {
        errors[field] = "Este campo es obligatorio";
        hasErrors = true;
      }
    }
  
    // Verificar campos opcionales
    for (const field of optionalFields) {
      if (formData[field] && !isValidValue(formData[field])) {
        errors[field] = "Este campo no es válido";
        hasErrors = true;
      }
    }
  
    return {
      success: !hasErrors,
      errors,
    };
  }
  
  function isValidValue(value) {
    // Validar email
    if (typeof value === "string" && value.includes("@")) {
      return isValidEmail(value);
    }
  
    // Validar fecha
    if (value instanceof Date) {
      return isValidDate(value);
    }
  
    // Agregar más validaciones aquí, según sea necesario
  
    return true;
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidDate(date) {
    return !isNaN(date.getTime());
  }
  
  module.exports = {
    validateForm,
  };
  