import React, { useState, useMemo } from 'react';
import { Search, Filter, ShoppingCart, Plus, Minus, CheckCircle, Package } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '../components/ui/drawer';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { useToast } from '../hooks/use-toast';
import { catalogItems, categories } from '../data/mockData';

const CatalogPage = ({ cartItems = [], setCartItems = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const { toast } = useToast();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = catalogItems;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    toast({
      title: "Товар добавлен в корзину!",
      description: `${product.name} успешно добавлен в вашу корзину.`,
    });
  };

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + change);
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const processOrder = () => {
    // Генерируем номер заказа
    const orderNum = 'ZU-' + Date.now().toString().slice(-6);
    setOrderNumber(orderNum);
    
    // Показываем окно успешного заказа
    setIsOrderSuccessOpen(true);
    
    // Очищаем корзину
    setCartItems([]);
    
    // Закрываем корзину
    setIsCartOpen(false);
    
    toast({
      title: "Заказ успешно оформлен!",
      description: `Ваш заказ №${orderNum} принят в обработку.`,
    });
  };

  const closeOrderSuccess = () => {
    setIsOrderSuccessOpen(false);
    setOrderNumber('');
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-teal-800 mb-2">Каталог товаров</h1>
          <p className="text-gray-600">Найдите идеальные товары для себя</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-teal-200 focus:ring-teal-500"
              />
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-teal-200">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">По названию</SelectItem>
                <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-high">Цена: по убыванию</SelectItem>
              </SelectContent>
            </Select>

            {/* Cart Button */}
            <Drawer open={isCartOpen} onOpenChange={setIsCartOpen}>
              <DrawerTrigger asChild>
                <Button className="bg-teal-600 hover:bg-teal-700 relative">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина
                  {cartItemsCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-cyan-500 text-white">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]">
                <DrawerHeader>
                  <DrawerTitle>Ваша корзина</DrawerTitle>
                  <DrawerDescription>
                    {cartItemsCount} товаров на сумму {cartTotal.toLocaleString('ru-RU')} ₽
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 pb-4 overflow-y-auto">
                  {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">Корзина пуста</p>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.price.toLocaleString('ru-RU')} ₽</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => removeFromCart(item.id)}
                              className="ml-2"
                            >
                              Удалить
                            </Button>
                          </div>
                        </div>
                      ))}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-semibold">
                          <span>Итого:</span>
                          <span>{cartTotal.toLocaleString('ru-RU')} ₽</span>
                        </div>
                        <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700" onClick={processOrder}>
                          Оформить заказ
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Category Filter Buttons */}
          <div className="mb-4">
            <label className="text-sm font-medium text-teal-700 mb-3 block">
              Категории товаров
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id 
                      ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                      : 'border-teal-200 hover:bg-teal-50 text-teal-700'
                  } transition-all`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Найдено товаров: <span className="font-semibold text-teal-600">{filteredProducts.length}</span>
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white">
              <CardHeader className="p-4">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Badge className="bg-teal-100 text-teal-700 mb-2">
                  {product.category}
                </Badge>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{product.name}</h3>
                <div className="text-2xl font-bold text-teal-600 mb-2">
                  {product.price.toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-sm text-gray-600">
                  <p>Размеры: {product.sizes.join(', ')}</p>
                  <p>Цвета: {product.colors.join(', ')}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full bg-teal-600 hover:bg-teal-700"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Товары не найдены</h3>
            <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>

      {/* Order Success Dialog */}
      <Dialog open={isOrderSuccessOpen} onOpenChange={setIsOrderSuccessOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-green-800">
              Заказ успешно оформлен!
            </DialogTitle>
            <DialogDescription className="text-gray-600 space-y-2">
              <p>Спасибо за ваш заказ!</p>
              <p className="font-semibold">Номер заказа: <span className="text-teal-600">{orderNumber}</span></p>
            </DialogDescription>
          </DialogHeader>
          
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-3 text-teal-700">
              <Package className="h-5 w-5" />
              <span className="font-medium">Что дальше?</span>
            </div>
            <div className="text-sm text-teal-600 space-y-2">
              <p>• Мы свяжемся с вами в течение 30 минут для подтверждения</p>
              <p>• Заказ будет собран и отправлен в течение 1-2 дней</p>
              <p>• Вы получите трек-номер для отслеживания доставки</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              onClick={closeOrderSuccess}
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
            >
              Продолжить покупки
            </Button>
            <Button 
              variant="outline" 
              onClick={closeOrderSuccess}
              className="flex-1 border-teal-300 text-teal-700 hover:bg-teal-50"
            >
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CatalogPage;