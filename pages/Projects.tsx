import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight, Eye } from "lucide-react";
import { Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Création de site
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Un site internet professionnel élaboré pour satisfaire les exigences de votre entreprise.
          </p>
        </div>
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
              SEO Optimisé
            </Link>
          </Button>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 shadow-glow"
            asChild
          >
            <Link to="/contact">
              Services Numériques
            </Link>
          </Button>

        </div>
      </section>


      <section className="py-16 bg-white">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Détails du projet et résultats obtenus
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Intro Block */}
        <div className="max-w-4xl mx-auto text-center mb-12 px-6">
          <p className="text-lg text-gray-600">
            Chez <span className="font-semibold">HD Services Plus</span>,
            nous avons développé un site web moderne et professionnel afin de mettre en valeur l’ensemble de nos services numériques. Notre objectif est clair : offrir à nos clients une vitrine complète de nos compétences tout en améliorant notre visibilité en ligne et en facilitant l’accès à l’information.
          </p>
        </div>

        <div>

          {/* Zig-Zag Sections */}
          <div className="space-y-24 py-16 max-w-6xl mx-auto px-6">

            {/* Block 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Nos Prestations</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous proposons désormais une gamme variée de prestations adaptées aux besoins des entreprises : création de sites vitrines, création de sites internet et e-commerce, refonte de sites existants, maintenance et mises à jour, SEO de base, montage de vidéos, création de logos, ainsi que la mise en place de newsletters et d’automatisations pour optimiser la communication et le suivi client.
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg "
                alt="Services"
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* Block 2 (reverse) */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg"
                alt="SEO"
                className="rounded-2xl shadow-lg order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-4">Optimisation SEO</h2>
                <p className="text-gray-700 leading-relaxed">
                  Notre site a été conçu avec une interface intuitive et optimisée pour le référencement, afin d’attirer un maximum de visiteurs. Grâce à une structure claire et des contenus pertinents, il constitue un véritable outil de communication, pensé pour présenter nos services et encourager les demandes de devis.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Résultats Concrets</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les résultats sont concrets : une meilleure visibilité, une navigation plus fluide pour nos visiteurs, et une confiance accrue de nos clients, qui trouvent rapidement les solutions adaptées à leurs besoins.
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                alt="Results"
                className="rounded-2xl shadow-lg"
              />
            </div>


            {/* Block 4 (reverse) */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="SEO"
                className="rounded-2xl shadow-lg order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-4">Axé sur la réussite des clients</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ce projet marque une étape importante dans le développement de HD Services Plus et pose les bases d’une croissance continue, tournée vers l’accompagnement et la réussite de nos clients.
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>


      {/* Highlights Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <Card className="p-6 shadow-lg rounded-2xl border border-gray-100 hover:shadow-xl hover:border-primary transition-all duration-300">
            <CardContent>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Objectifs</h3>
              <p className="text-gray-600">Visibilité en ligne</p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg rounded-2xl border border-gray-100 hover:shadow-xl hover:border-green-500 transition-all duration-300">
            <CardContent>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Résultats</h3>
              <p className="text-gray-600">Augmentation du trafic</p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg rounded-2xl border border-gray-100 hover:shadow-xl hover:border-purple-500 transition-all duration-300">
            <CardContent>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Impact</h3>
              <p className="text-gray-600">Confiance clients</p>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default Projects;