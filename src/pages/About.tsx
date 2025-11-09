import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, ShieldCheck, Headphones, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import vision from '../assets/vision.png'

const About = () => {
  const values = [
    {
    title: "Créativité",
    icon: (
      <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-4 shadow-md">
        <Lightbulb className="w-7 h-7 text-yellow-500" />
      </div>
    ),
    desc: "Des solutions innovantes pour donner à votre entreprise un avantage concurrentiel."
  },
  {
    title: "Fiabilité",
    icon: (
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4 shadow-md">
        <ShieldCheck className="w-7 h-7 text-green-600" />
      </div>
    ),
    desc: "Un accompagnement et des services de confiance sur lesquels vous pouvez compter."
  },
  {
    title: "Écoute active",
    icon: (
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 shadow-md">
        <Headphones className="w-7 h-7 text-blue-500" />
      </div>
    ),
    desc: "Comprendre vos besoins afin de vous fournir des solutions véritablement adaptées."
  },
  {
    title: "Excellence",
    icon: (
      <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4 shadow-md">
        <Rocket className="w-7 h-7 text-purple-600" />
      </div>
    ),
    desc: "Nous visons les plus hauts standards dans chacun de nos projets."
  }
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
             <p className="text-xl text-white/90 mb-3">
             Créativité
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
             Votre partenaire digital
            </h1>
            <p className="text-xl text-white/90 mb-8">
             Avec une expertise solide, je transforme vos idées en solutions numériques innovantes et accessibles.
            </p>
          </div>
        </div>
      </section>



      {/* vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Notre vision
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <h5 className="text-lg font-medium ">
                  Des services numériques accessibles et professionnels pour toutes les entreprises.
                </h5>
                <p>
                 Chez <span className="text-primary font-semibold">HD Services Plus</span>, nous croyons fermement que chaque entreprise mérite d'accéder à des solutions numériques de qualité. Notre mission est de rendre ces services non seulement accessibles, mais également rapides et efficaces. Nous nous engageons à fournir un accompagnement personnalisé pour répondre aux besoins spécifiques de nos clients.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
        <img
          src={vision}
          alt="Our Vision"
          className="rounded-2xl w-full max-w-md "
        />
      </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chez HD Services Plus, nous plaçons l'écoute active au cœur de notre relation client. Nous nous engageons à comprendre vos besoins afin de vous fournir des solutions réellement adaptées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.desc}</p>
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

export default About;