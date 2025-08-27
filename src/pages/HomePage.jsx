import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Heart, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import HeroSlider from '../components/HeroSlider';
import ShippingCalculator from '../components/ShippingCalculator';
import PromoCountdown from '../components/PromoCountdown';

const HomePage = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Широкий выбор",
      description: "Тысячи товаров от ведущих мировых брендов"
    },
    {
      icon: Truck,
      title: "Быстрая доставка",
      description: "Авиа и авто доставка в любую точку России"
    },
    {
      icon: Heart,
      title: "Качество",
      description: "Только оригинальные товары высшего качества"
    },
    {
      icon: Shield,
      title: "Гарантия",
      description: "100% гарантия возврата в течение 30 дней"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Добро пожаловать в ZIPUP
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ваш идеальный магазин модной одежды, обуви и аксессуаров с доставкой по всей России
          </p>
        </div>
        
        <HeroSlider />
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-teal-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
            Почему выбирают ZIPUP?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-teal-100"
              >
                <CardHeader>
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-teal-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Calculator Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800 mb-4">
            Рассчитайте стоимость доставки
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте точную стоимость доставки вашего заказа в зависимости от типа товара и способа доставки
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <ShippingCalculator />
        </div>
      </section>

      {/* Promo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <PromoCountdown />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы начать покупки?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Откройте для себя мир стильной моды в нашем каталоге
          </p>
          <Link to="/catalog">
            <Button 
              size="lg" 
              className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
            >
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;