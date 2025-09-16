export default function Legal() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col pb-16">
      {/* Header */}
      <header className="py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Mentions légales – HD Services Plus
        </h1>
      </header>

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 md:px-12 lg:px-24 space-y-8">
        
        {/* Éditeur du site */}
        <section>
          <h2 className="font-bold text-xl mb-2 text-primary">Éditeur du site</h2>
          <p className="text-md leading-relaxed">
            HD Services Plus <br />
            Micro-entreprise <br />
            SIRET : 943 718 791 00016 <br />
            Adresse : 50 avenue des Champs-Élysées, 75008 Paris, France <br />
            E-mail : contact@hdservicesplus.fr
          </p>
        </section>

        {/* Hébergement */}
        <section>
          <h2 className="font-bold text-xl mb-2 text-primary">Hébergement</h2>
          <p className="text-md leading-relaxed">
            Nom : LWS (Ligne Web Services) <br />
            Adresse : 10 rue Penthièvre, 75008 Paris, France <br />
            Site web :{" "}
            <a
              href="https://www.lws.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.lws.fr
            </a>
          </p>
        </section>

        {/* Propriété intellectuelle */}
        <section>
          <h2 className="font-bold text-xl mb-2 text-primary">Propriété intellectuelle</h2>
          <p className="text-md leading-relaxed">
            Tous les éléments présents sur ce site (textes, images, graphismes, logo, icônes, structure, etc.)
            sont la propriété exclusive de HD Services Plus, sauf mention contraire. Toute reproduction,
            distribution, modification ou utilisation, même partielle, est interdite sans autorisation écrite préalable.
          </p>
        </section>

        {/* Responsabilité */}
        <section>
          <h2 className="font-bold text-xl mb-2 text-primary">Responsabilité</h2>
          <p className="text-md leading-relaxed">
            HD Services Plus met tout en œuvre pour fournir des informations fiables et à jour sur ce site.
            Cependant, elle ne peut être tenue responsable d’éventuelles erreurs, omissions ou conséquences
            liées à l’usage des informations fournies.
          </p>
        </section>

        {/* Données personnelles */}
        <section>
          <h2 className="font-bold text-xl mb-2 text-primary">Données personnelles</h2>
          <p className="text-md leading-relaxed">
            Les informations collectées via le formulaire de contact ou tout autre moyen sont destinées uniquement à HD Services Plus
            et ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de
            suppression de vos données personnelles en écrivant à :
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="font-bold text-xl mb-2 text-primary">Cookies</h2>
          <p className="text-md leading-relaxed">
            Ce site utilise des cookies pour améliorer votre expérience. Avant que tout cookie non essentiel
            (statistiques, marketing, préférences) ne soit déposé sur votre terminal, vous devez cliquer sur l’emoji 🍪
            de la bannière de cookies pour :
          </p>
          <ul className="list-disc pl-6 text-md leading-relaxed text-gray-700">
            <li>Accepter tous les cookies</li>
            <li>Refuser tous les cookies</li>
            <li>Personnaliser vos préférences</li>
          </ul>
          <p className="text-md leading-relaxed mt-2">
            Tant que vous n’avez pas fait de choix via ce bouton, aucun cookie non essentiel n’est déposé.
          </p>
        </section>

        {/* Droit applicable */}
        <section>
          <h2 className="font-bold text-xl mb-2 text-primary">Droit applicable</h2>
          <p className="text-md leading-relaxed">
            Les présentes mentions légales sont régies par le droit français. Tout litige sera porté devant
            les juridictions compétentes de Paris.
          </p>
        </section>
      </main>
    </div>
  );
}
