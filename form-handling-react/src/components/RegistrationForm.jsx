import React, { useState } from "react";

const RegistrationForm = () => {
  // État pour gérer les valeurs des champs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      alert("Username is required");
      return;
    }

    if (!email) {
      alert("Email is required");
      return;
    }

    if (!password) {
      alert("Password is required");
      return;
    }

    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Champ Username */}
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username} // Correction ici
          onChange={(e) => setUsername(e.target.value)} // Mise à jour de l'état
        />
      </div>

      {/* Champ Email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email} // Correction ici
          onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'état
        />
      </div>

      {/* Champ Password */}
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password} // Correction ici
          onChange={(e) => setPassword(e.target.value)} // Mise à jour de l'état
        />
      </div>

      {/* Bouton de soumission */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
