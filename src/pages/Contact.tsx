import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    projet: "",
    budget: "",
    message: ""
  });



  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [

    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "contact@hdservicesplus.fr",
      subtitle: "Vous pouvez nous écrire à l'adresse suivante :"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      content: "06 11 82 82 41",
      subtitle: "Pour toute question, appelez-nous au numéro suivant :"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Siège",
      content: " Nous sommes situés à l'adresse suivante",
      subtitle: "50 av Champs Elysées, 75008 Paris",
      mapLink: "https://www.bing.com/maps?mepi=127%7E%7EUnknown%7EAddress_Link&ty=18&q=Kandbaz+Champs+Elys%C3%A9es&ss=ypid.YN2000x8890881143367622173&ppois=48.8703727722168_2.3068881034851074_Kandbaz+Champs+Elys%C3%A9es_YN2000x8890881143367622173%7E&cp=48.870389%7E2.306936&v=2&sV=1&FORM=MPSRPL&lvl=16.0"
    },

  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Nous Contacter
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Pour toute demande d'information ou de devis, contactez-nous.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.content}</p>
                  {info.mapLink ? (
                    <a
                      href={info.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black hover:underline cursor-pointer"
                    >
                      {info.subtitle}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div>
            {/* Contact Form */}
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Nous Contacter
                  </h2>

                </div>
                <p className="text-xl max-w-3xl text-primary/90 mb-6">
                  Pour toute demande d'information ou de devis, contactez-nous.
                </p>

                <form
                  action="https://formspree.io/f/mjkebrey"
                  method="POST"
                  className="space-y-6">
                  <div>
                    <div>
                      <Label htmlFor="nom">Nom</Label>
                      <Input
                        id="nom"
                        name="Nom"
                        placeholder="Votre nom et prénom"
                        value={formData.nom}
                        onChange={(e) => handleInputChange('nom', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                 

                  <div className="space-y-2">
                    <Label htmlFor="message">Message*</Label>
                    <Textarea
                      id="message"
                      name="Message"
                      placeholder="Décrivez-nous votre projet en détail : surface, délais souhaités, contraintes particulières..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className=" bg-gradient-primary hover:shadow-elegant" size="lg">
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
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Demandez votre devis personnalisé
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Nous accompagnons nos clients partout pour tous leurs projets numériques et créatifs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-primary text-white hover:shadow-elegant">
              <Link to="/contact">Devis</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"

            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;