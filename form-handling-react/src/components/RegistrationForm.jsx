import React, { useState } from "react";

const RegistrationForm = () => {
  // État pour gérer les valeurs des champs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // État pour gérer les erreurs
  const [errors, setErrors] = useState({});

  // Validation des champs
  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    return newErrors;
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Met à jour les erreurs
      return;
    }

    // Si aucune erreur, traitement de la soumission
    console.log("Form submitted:", { username, email, password });

    // Réinitialiser le formulaire après soumission
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Champ Username */}
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>

      {/* Champ Email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      {/* Champ Password */}
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      {/* Bouton de soumission */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
