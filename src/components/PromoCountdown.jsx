import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tag, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const PromoCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 31,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Устанавливаем дату окончания акции (31 день от текущего момента)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 31);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 5000); // Обновляем каждые 5 секунд вместо каждой секунды

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = React.memo(({ value, label }) => (
    <div className="flex flex-col items-center bg-white rounded-lg p-2 shadow-sm border border-teal-100">
      <div className="text-lg font-bold text-teal-700">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs text-teal-500 font-medium uppercase">
        {label}
      </div>
    </div>
  ));

  return (
    <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200 shadow-lg">
      <CardContent className="text-center py-12">
        {/* Badge */}
        <Badge className="bg-teal-100 text-teal-700 font-semibold text-sm px-4 py-2 rounded-full mb-6">
          <Tag className="h-4 w-4 mr-2" />
          АКЦИЯ
        </Badge>
        
        {/* Main Content */}
        <div className="space-y-4 mb-6">
          <h2 className="text-4xl md:text-6xl font-bold text-teal-800">
            -15%
          </h2>
          <p className="text-lg text-teal-600">
            Скидка на все товары
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-8">
          <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
            <TimeUnit value={timeLeft.days} label="Дни" />
            <TimeUnit value={timeLeft.hours} label="Часы" />
            <TimeUnit value={timeLeft.minutes} label="Мин" />
            <TimeUnit value={timeLeft.seconds} label="Сек" />
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/catalog">
          <Button 
            size="lg" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span className="mr-2">Перейти в каталог</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default React.memo(PromoCountdown);