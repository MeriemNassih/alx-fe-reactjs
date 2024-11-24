import React, { useState } from "react";

const RegistrationForm = () => {
  // État pour les données du formulaire
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // État pour gérer les erreurs
  const [errors, setErrors] = useState({});

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation des champs
  const validate = () => {
    const { username, email, password } = formData;
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return newErrors;
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Champ Username */}
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username} // Correction ici
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>

      {/* Champ Email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email} // Correction ici
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      {/* Champ Password */}
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password} // Correction ici
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      {/* Bouton de soumission */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
