import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Header = ({ cartItems = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navigation = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    { name: 'Форма', path: '/contact' }
  ];

  return (
    <header className="sticky-header">
      <div className="container-centered">
        <div className="header-flex">
          {/* Logo */}
          <Link to="/" className="custom-flex">
            <div className="my-class">
              <Package className="icon-styles" />
            </div>
            <span className="gradient-title">
              ZIPUP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-hidden">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`my-nav ${
                  location.pathname === item.path
                    ? 'my-nav2'
                    : 'my-nav3'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="trash-wrapper">
            {/* Cart Icon */}
            <Link to="/catalog">
              <Button 
                variant="outline" 
                size="sm" 
                className="button-trash"
              >
                <ShoppingCart className="h-5 w-5 text-teal-600" />
                {cartItemsCount > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-teal-500 hover:bg-teal-600 p-0 flex items-center justify-center text-xs"
                  >
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-teal-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-teal-100 z-40">
            <nav className="flex flex-col space-y-1 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    location.pathname === item.path
                      ? 'bg-teal-100 text-teal-700 shadow-sm'
                      : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;