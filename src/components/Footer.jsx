import React from 'react';
import { Package, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTelegram, FaVk } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <Package className="h-8 w-8 text-teal-600" />
              </div>
              <span className="text-3xl font-bold">ZIPUP</span>
            </div>
            <p className="text-teal-100 leading-relaxed">
              Ваш надежный партнер в мире моды. Качественная одежда, обувь и аксессуары с быстрой доставкой.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-teal-100">
                <Phone className="h-5 w-5 text-teal-300" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3 text-teal-100">
                <Mail className="h-5 w-5 text-teal-300" />
                <span>info@zipup.ru</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-teal-800 hover:bg-teal-700 p-3 rounded-full transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-teal-800 hover:bg-teal-700 p-3 rounded-full transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-teal-800 hover:bg-teal-700 p-3 rounded-full transition-colors transform hover:scale-110"
                aria-label="Telegram"
              >
                <FaTelegram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-teal-800 hover:bg-teal-700 p-3 rounded-full transition-colors transform hover:scale-110"
                aria-label="VKontakte"
              >
                <FaVk className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-700 mt-8 pt-8 text-center">
          <p className="text-teal-200">
            © 2025 ZIPUP. Все права защищены. Создано с любовью к моде.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;