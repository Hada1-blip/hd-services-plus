import { Card, CardContent } from "@/components/ui/card";

import {  ShoppingCart , Wrench, Search, Video, PenTool, Mail, Monitor, Layout, Layers, Code } from "lucide-react";


const Services = () => {
  const services = [
    {
      title: "Création de sites vitrines",
      image: <Monitor className="w-12 h-12 text-blue-600" />,
      description: "Un site simple et élégant de 1 à 5 pages pour présenter votre activité, vos services ou vos produits, idéal pour être visible en ligne rapidement.",
      features: ["Design moderne", "Mobile-friendly", "Mise en ligne rapide"],
      pricing: "À partir de 499€"
    },
    {
      title: "Création de sites internet",
      image: <Layers className="w-12 h-12 text-green-600" />,
      description: "Un site plus complet, de 6 pages ou plus, conçu sur mesure avec toutes les fonctionnalités nécessaires pour présenter votre entreprise, vos contenus et vos médias de manière professionnelle.",
      features: ["Sur mesure", "Optimisé SEO", "Support inclus"],
      pricing: "À partir de 999€"
    },
    {
      title: "Création de sites e-commerce",
      image: <ShoppingCart className="w-12 h-12 text-pink-600" />,
      description: "Une boutique en ligne complète pour vendre vos produits facilement, avec paiement sécurisé, gestion simplifiée et optimisation pour maximiser vos ventes.Refonte de sites existants : modernisation et optimisation pour améliorer l’expérience utilisateur et la performance globale",
      features: ["Paiement sécurisé", "Gestion facile", "Optimisé pour les ventes"],
      pricing: "À partir de 1499€"
    },
    {
      title: "Maintenance et mises à jour",
      image: <Wrench className="w-12 h-12 text-orange-600" />,
      description: "suivi régulier, corrections de bugs, sécurité et sauvegardes.",
      features: ["Mises à jour régulières", "Sécurité renforcée", "Sauvegardes automatiques"],
      pricing: "À partir de 49€/mois"
    },
    {
      title: "SEO",
      image: <Search className="w-12 h-12 text-indigo-600" />,
      description: "optimisation pour attirer plus de visiteurs et améliorer votre visibilité sur les moteurs de recherche.",
      features: ["Audit SEO", "Optimisation mots-clés", "Rapports mensuels"],
      pricing: "À partir de 299€"
    },
    {
      title: "Montage de vidéos",
      image: <Video className="w-12 h-12 text-red-500" />,
      description: "contenus dynamiques pour vos réseaux sociaux ou présentations professionnelles.",
      features: ["Édition pro", "Effets modernes", "Export multi-formats"],
      pricing: "Sur devis"
    },
    {
      title: "Création de logos",
      image: <PenTool className="w-12 h-12 text-yellow-500" />,
      description: "identité visuelle unique et mémorable.",
      features: ["Logo vectoriel", "Charte graphique", "Fichiers HD"],
      pricing: "À partir de 199€"
    },
    {
      title: "Newsletters et automatisation",
      image: <Mail className="w-12 h-12 text-rose-600" />,
      description: "campagnes efficaces pour fidéliser vos clients et gagner du temps.",
      features: ["Automatisation", "Templates personnalisés", "Suivi des performances"],
      pricing: "À partir de 99€"
    },
  ];

  

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-white/90 mb-3">
            Services
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Des solutions numériques adaptées à vos besoins pour accompagner le développement de votre activité professionnelle et maximiser votre succès grâce à des outils modernes, efficaces et personnalisés.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground font-bold">
              Chez <span className="text-primary font-bold">HD Services Plus</span>,
              nous proposons une gamme complète de services numériques pour aider votre entreprise
              à se démarquer et à développer sa présence en ligne.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-card"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start space-x-5">
                    {/* Icon Size Adjusted */}
                    <div className="text-4xl lg:text-5xl flex-shrink-0 text-primary">
                      {service.image}
                    </div>

                    {/* Text Section */}
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-semibold lg:font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>

                      
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;