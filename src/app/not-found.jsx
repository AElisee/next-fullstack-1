import Link from "next/link.js";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Page introuvable</h2>
      <p>Désolé, La page que que vous recherchez est introuvable !</p>
      <Link href="/">Retournez à l'Accueil</Link>
    </div>
  );
};

export default NotFound;
