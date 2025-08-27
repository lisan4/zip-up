import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fullName: '', phone: '', email: '', message: '' });
      }, 3000);
    }, 1500);
  };

  const isFormValid = formData.fullName && formData.phone && formData.email;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Есть вопросы или предложения? Мы всегда рады помочь вам!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg border-teal-100">
              <CardHeader>
                <CardTitle className="text-2xl text-teal-800 flex items-center gap-3">
                  <Mail className="h-6 w-6" />
                  Контактная информация
                </CardTitle>
                <CardDescription>
                  Свяжитесь с нами любым удобным способом
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-lg">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-teal-800">Телефон</p>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-cyan-50 rounded-lg">
                  <div className="bg-cyan-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-800">Email</p>
                    <p className="text-gray-600">info@zipup.ru</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Время работы</h3>
                  <div className="space-y-1 text-teal-100">
                    <p>Понедельник - Пятница: 9:00 - 20:00</p>
                    <p>Суббота: 10:00 - 18:00</p>
                    <p>Воскресенье: 12:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-lg border-teal-100">
            <CardHeader>
              <CardTitle className="text-2xl text-teal-800">Форма обратной связи</CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Спасибо за обращение!
                  </h3>
                  <p className="text-green-600">
                    Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-teal-700">
                        ФИО *
                      </label>
                      <Input
                        name="fullName"
                        placeholder="Ваше полное имя"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="border-teal-200 focus:ring-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-teal-700">
                        Номер телефона *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-teal-200 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-teal-700">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your-email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-teal-200 focus:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-teal-700">
                      Сообщение
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Расскажите, чем мы можем вам помочь..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-teal-200 focus:ring-teal-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all disabled:transform-none disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Отправка...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Отправить заявку
                      </div>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    * Поля, обязательные для заполнения
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;