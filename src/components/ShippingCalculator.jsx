import React, { useState } from 'react';
import { Calculator, Truck, Plane } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { shippingRates } from '../data/mockData';

const ShippingCalculator = () => {
  const [shippingType, setShippingType] = useState('');
  const [productType, setProductType] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const calculateShipping = () => {
    if (!shippingType || !productType) return;
    
    const baseRate = shippingRates[shippingType];
    const coefficient = shippingRates.coefficients[productType];
    const finalPrice = baseRate * coefficient;
    
    setCalculatedPrice(finalPrice);
  };

  const resetCalculator = () => {
    setShippingType('');
    setProductType('');
    setCalculatedPrice(null);
  };

  return (
    <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="bg-teal-100 p-3 rounded-full">
            <Calculator className="h-6 w-6 text-teal-600" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-teal-800">Калькулятор доставки</CardTitle>
        <CardDescription className="text-teal-600">
          Рассчитайте стоимость доставки вашего заказа
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Shipping Type Selection */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-teal-700">
            Тип доставки
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button
              variant={shippingType === 'auto' ? 'default' : 'outline'}
              onClick={() => setShippingType('auto')}
              className={`flex items-center gap-2 p-4 h-auto justify-start ${
                shippingType === 'auto' 
                  ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                  : 'border-teal-200 hover:bg-teal-50 text-teal-700'
              }`}
            >
              <Truck className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Авто доставка</div>
                <div className="text-sm opacity-80">1000₽</div>
              </div>
            </Button>
            
            <Button
              variant={shippingType === 'avia' ? 'default' : 'outline'}
              onClick={() => setShippingType('avia')}
              className={`flex items-center gap-2 p-4 h-auto justify-start ${
                shippingType === 'avia' 
                  ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                  : 'border-teal-200 hover:bg-teal-50 text-teal-700'
              }`}
            >
              <Plane className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Авиа доставка</div>
                <div className="text-sm opacity-80">3000₽</div>
              </div>
            </Button>
          </div>
        </div>

        {/* Product Type Selection */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-teal-700">
            Тип товара
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: 'одежда', label: 'Одежда', coeff: '1.3' },
              { value: 'обувь', label: 'Обувь', coeff: '1.3' },
              { value: 'аксессуары', label: 'Аксессуары', coeff: '1.1' },
              { value: 'разное', label: 'Разное', coeff: '1.0' }
            ].map(item => (
              <Button
                key={item.value}
                variant={productType === item.value ? 'default' : 'outline'}
                onClick={() => setProductType(item.value)}
                className={`p-3 h-auto ${
                  productType === item.value 
                    ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                    : 'border-teal-200 hover:bg-teal-50 text-teal-700'
                }`}
              >
                <div className="text-center">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs opacity-80">коэфф. {item.coeff}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <div className="flex gap-3">
          <Button 
            onClick={calculateShipping} 
            disabled={!shippingType || !productType}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
          >
            <Calculator className="h-4 w-4 mr-2" />
            Рассчитать
          </Button>
          
          {calculatedPrice && (
            <Button 
              onClick={resetCalculator}
              variant="outline"
              className="border-teal-300 text-teal-600 hover:bg-teal-50"
            >
              Сбросить
            </Button>
          )}
        </div>

        {/* Result */}
        {calculatedPrice && (
          <div className="bg-white rounded-lg p-6 border border-teal-200 shadow-sm">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-teal-800 mb-2">Стоимость доставки</h3>
              <div className="text-3xl font-bold text-teal-600 mb-4">
                {calculatedPrice.toLocaleString('ru-RU')} ₽
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                  {shippingType === 'auto' ? 'Авто' : 'Авиа'} доставка
                </Badge>
                <Badge variant="secondary" className="bg-cyan-100 text-cyan-700">
                  {productType}
                </Badge>
              </div>
            </div>
          </div>
        )}
        
        {/* Information */}
        <div className="bg-teal-100/50 rounded-lg p-4 text-sm text-teal-700">
          <p className="font-medium mb-2">Информация о тарифах:</p>
          <ul className="space-y-1 text-xs">
            <li>• Авто доставка: базовая стоимость 1000₽</li>
            <li>• Авиа доставка: базовая стоимость 3000₽</li>
            <li>• Итоговая стоимость рассчитывается с учетом коэффициента товара</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShippingCalculator;