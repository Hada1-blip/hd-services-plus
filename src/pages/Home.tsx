  import { Button } from "@/components/ui/button";
  import { Card, CardContent } from "@/components/ui/card";
  import { CheckCircle, Clock, Puzzle, Eye, Palette} from "lucide-react";
  import { Link } from "react-router-dom";
  import chooseus from "../assets/chooseus.png"

  const Home = () => {

    const features = [
      {
        icon: <Puzzle className="w-6 h-6" />,
        title: "Solutions complètes et adaptées",
        description: "Nous proposons des services numériques sur mesure, pensés pour vos besoins spécifiques."
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Gain de temps et efficacité",
        description: "Nous prenons en charge vos projets du début à la fin, pour que vous puissiez vous concentrer sur votre activité"
      },
      {
        icon: <Eye className="w-6 h-6" />,
        title: "Visibilité et performance",
        description: "Sites optimisés, référencement et outils digitaux pour attirer et fidéliser vos clients"
      },
      {
        icon: <Palette className="w-6 h-6" />,
        title: "Design moderne et professionnel",
        description: "Chaque projet reflète l’image et l’identité unique de votre entreprise."
      }
    ];

  



    return (
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Transformez vos idées en solutions numériques performantes
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                Chez HD Services Plus, nous créons des sites internet, logos, vidéos et solutions digitales qui donnent vie à vos projets. Offrez à votre entreprise une présence en ligne moderne, efficace et professionnelle dès aujourd’hui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 shadow-glow"
                  asChild
                >
                  <Link to="/contact">
                    Web Design
                  
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 shadow-glow"
                  asChild
                >
                  <Link to="/contact">
                    Création Visuelle
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 shadow-glow"
                  asChild
                >
                  <Link to="/contact">
                    Marketing Digital
                  </Link>
                </Button>

              </div>
            </div>
          </div>
        </section>



        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Découvrez nos services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Chez HD Services Plus, nous accompagnons les entreprises et indépendants pour renforcer leur présence en ligne et développer leur activité. Sites internet, e-commerce, logos, vidéos, newsletters ou automatisation : nous mettons en place des solutions modernes et adaptées à vos besoins.

              </p>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nos outils et méthodes sont pensés pour attirer plus de clients, fidéliser vos contacts et vous faire gagner du temps, tout en reflétant l’image professionnelle de votre entrepr
              </p>
              <Button
                size="lg"
                className="mt-6 bg-primary text-white hover:bg-white/90 hover:text-primary text-lg px-8 py-3 shadow-glow"
                asChild
              >
                <Link to="/services">
                  Découvrez nos services
                </Link>
              </Button>
            </div>

            <h2 className="text-3xl lg:text-4xl text-center font-bold text-foreground mb-4">
              Nos points forts
            </h2>
            {/* Features Section */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <Card key={index} className="text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
       
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Left Side: Text */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Pourquoi choisir HD Services Plus?
                </h2>

                <p className="text-lg text-muted-foreground mb-8">
                  Chez HD Services Plus, nous ne nous contentons pas de fournir des services numériques :
                  nous vous accompagnons pour transformer vos idées en solutions concrètes et performantes.
                </p>

                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Ce qui nous distingue</p>
                      <p className="text-muted-foreground text-sm">
                        Accompagnement sur mesure : chaque projet est unique, nous adaptons nos solutions à vos besoins et objectifs.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Solutions complètes et modernes</p>
                      <p className="text-muted-foreground text-sm">
                        Sites internet, e-commerce, logos, vidéos, newsletters et automatisations, tous conçus pour maximiser votre impact en ligne.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Visibilité et résultats concrets</p>
                      <p className="text-muted-foreground text-sm">
                        Nous optimisons votre présence digitale pour attirer plus de clients et améliorer vos performances.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Gain de temps et sérénité</p>
                      <p className="text-muted-foreground text-sm">
                        Nous prenons en charge toutes les étapes de vos projets, du concept à la réalisation,
                        pour que vous puissiez vous concentrer sur votre activité.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Fiabilité et professionnalisme</p>
                      <p className="text-muted-foreground text-sm">
                        Des outils et méthodes actuels pour des solutions durables et performantes.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Créativité et identité forte</p>
                      <p className="text-muted-foreground text-sm">
                        Chaque projet reflète votre image et votre marque, pour que vous soyez reconnu et mémorable.
                      </p>
                    </div>
                  </li>
                </ul>

                <p className="text-lg text-muted-foreground mt-8">
                  Avec HD Services Plus, vous bénéficiez d’un partenaire de confiance, engagé pour la réussite de votre
                  entreprise et la croissance continue de votre présence digitale.
                </p>
              </div>

              {/* Right Side: Illustration / Image */}
              <div className="relative">
                <img
                  src={chooseus}
                  alt="Why Choose Us"
                  className="rounded-2xl shadow-elegant"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center max-w-3xl">

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Demandez votre devis personnalisé
            </h2>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-8">
              Donnez vie à vos idées grâce à nos services personnalisés.
              N'hésitez pas à nous contacter dès maintenant pour obtenir
              un devis qui correspond à vos attentes.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary text-white hover:shadow-elegant"
                asChild
              >
                <Link to="/estimate">Devis</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <Link to="/contact">Contact</Link>
              </Button>
            </div>

          </div>
        </section>

        
      </div>
    );
  };

  export default Home;