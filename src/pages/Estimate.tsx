import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function EstimateForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    objet: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-20 bg-gradient-subtle min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Demande de devis</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pour toute demande de devis, contactez-nous en remplissant ce formulaire.
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-0 shadow-elegant max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Demande de devis</h2>
            </div>

            <form
              action="https://formspree.io/f/xandwjdj"
              method="POST"
              className="space-y-6"
            >
              {/* Nom */}
              <div>
                <Label htmlFor="nom">Nom complet</Label>
                <Input
                  id="nom"
                  name="Full Name"
                  placeholder="Camille Moreau"
                  value={formData.nom}
                  onChange={(e) => handleInputChange("nom", e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="camille.moreau@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              {/* Téléphone */}
              <div>
                <Label htmlFor="telephone">Téléphone</Label>
                <Input
                  id="telephone"
                  name="Phone"
                  placeholder="06 12 34 56 78"
                  value={formData.telephone}
                  onChange={(e) => handleInputChange("telephone", e.target.value)}
                />
              </div>

              {/* Objet de la demande */}
              <div>
                <Label htmlFor="objet">Objet de la demande</Label>
                <select
                  id="objet"
                  name="Purpose"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                  value={formData.objet}
                  onChange={(e) => handleInputChange("objet", e.target.value)}
                  required
                >
                  <option value="">Sélectionnez un objet</option>
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

              {/* Message */}
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="Message"
                  placeholder="Décrivez-nous votre projet en détail : surface, délais souhaités, contraintes particulières..."
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="bg-gradient-primary hover:shadow-elegant w-full flex items-center justify-center"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Envoyer
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              * Champs obligatoires. Vos données sont protégées et ne seront jamais transmises à des tiers.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
