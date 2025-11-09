export default function EstimateForm() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl font-bold text-black mb-10">Devis</h1>

            <form
                action="https://formspree.io/f/xandwjdj"
                method="POST"
                className="w-full max-w-md space-y-6"
            >
                {/* Full name */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-black">
                       Nom complet
                    </label>
                    <input
                        type="text"
                        name="Full Name"
                        placeholder="Camille Moreau"
                        className="w-full px-4 py-2 rounded-lg bg-gradient-primary text-white placeholder-gray-300 focus:outline-none"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-black">
                        Email
                    </label>
                    <input
                        type="email"
                        name="Email"
                        placeholder="camille.moreau@gmail.com"
                        className="w-full px-4 py-2 rounded-lg bg-gradient-primary text-white placeholder-gray-300 focus:outline-none"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-black">
                        Téléphone
                    </label>
                    <input
                        type="text"
                        name="Phone"
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-2 rounded-lg bg-gradient-primary text-white placeholder-gray-300 focus:outline-none"
                    />
                </div>

                {/* Purpose of request */}
                <div>
                    <label className="block mb-1 text-sm font-medium text-black">
                      Objet de la demande
                    </label>
                    <select
                        name="Purpose"
                        className="w-full px-4 py-2 rounded-lg bg-purple-700 text-white focus:outline-none"
                    >
                        <option>Objet de la demande</option>
                        <option>Création de sites vitrines</option>
                        <option>Création de sites internet</option>
                        <option>Création de sites e-commerce</option>
                        <option>Maintenance et mises à jour</option>
                        <option>SEO</option>
                        <option>Montage de vidéos</option>
                        <option>Création de logos</option>
                        <option>Newsletters et automatisation</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-black text-white font-semibold py-2 rounded-lg"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
}