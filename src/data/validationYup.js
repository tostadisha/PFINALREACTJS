import { object, string, mixed } from "yup";

let userSchema = object({
  nombre: string("Nombre sólo debe contener letras").required(
    "Nombre es requerido"
  ),
  telefono: mixed().required("Teléfono es requerido"),
  email: string()
    .email("Email no tiene el formato correcto")
    .required("Email es requerido"),
});

const validateForm = async (formData) => {
  try {
    await userSchema.validate(formData);
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;
