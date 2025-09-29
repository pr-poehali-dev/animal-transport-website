import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 to-soft-peach">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-warm-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="w-8 h-8 text-primary" />
              <span className="text-2xl font-heading font-bold text-gray-900">ЗооТрансфер</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'main', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'prices', label: 'Цены' },
                { id: 'about', label: 'О нас' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 font-medium">
              Заказать перевозку
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-accent text-accent-foreground mb-6" variant="secondary">
                🚀 Безопасные перевозки с 2019 года
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Перевозим <span className="text-primary">ваших любимцев</span> между городами
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональная транспортировка животных Санкт-Петербург ↔ Москва. 
                Комфорт, безопасность и забота о ваших питомцах в пути.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 font-medium"
                  onClick={() => scrollToSection('contact')}
                >
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Заказать сейчас
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => scrollToSection('prices')}
                >
                  <Icon name="Calculator" className="w-5 h-5 mr-2" />
                  Узнать цены
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-warm-200">
                {[
                  { icon: 'Shield', label: '100% безопасность', desc: 'Застрахованные поездки' },
                  { icon: 'Clock', label: '24/7 поддержка', desc: 'Всегда на связи' },
                  { icon: 'Star', label: '500+ довольных клиентов', desc: 'Проверенный сервис' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <Icon name={item.icon} className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-warm-200">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Car" className="w-24 h-24 text-primary mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-700">Комфортные перевозки для ваших питомцев</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг для безопасной транспортировки животных
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Truck',
                title: 'Перевозка животных',
                description: 'Профессиональная транспортировка собак, кошек и других питомцев в специально оборудованных автомобилях',
                features: ['Климат-контроль', 'Просторные переноски', 'Регулярные остановки']
              },
              {
                icon: 'FileText',
                title: 'Документооборот',
                description: 'Помощь в оформлении всех необходимых документов для транспортировки животных',
                features: ['Ветеринарные справки', 'Разрешения', 'Страховка']
              },
              {
                icon: 'Phone',
                title: 'Сопровождение 24/7',
                description: 'Постоянная связь во время поездки. Отчеты о состоянии питомца каждые 2 часа',
                features: ['GPS-отслеживание', 'Фото-отчеты', 'Круглосуточная поддержка']
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 border-warm-200 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" className="w-4 h-4 text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 bg-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Тарифы
            </h2>
            <p className="text-xl text-muted-foreground">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Стандарт',
                price: '8 000',
                description: 'Для одного питомца до 15 кг',
                features: [
                  'Переноска входит в стоимость',
                  'Остановки каждые 3 часа',
                  'Базовая страховка',
                  'SMS-уведомления'
                ],
                popular: false
              },
              {
                name: 'Комфорт',
                price: '12 000',
                description: 'Премиум-обслуживание',
                features: [
                  'Премиум переноска',
                  'Остановки каждые 2 часа',
                  'Расширенная страховка',
                  'Фото/видео отчеты',
                  'Индивидуальный график',
                  'Корм в дорогу'
                ],
                popular: true
              },
              {
                name: 'VIP',
                price: 'от 15 000',
                description: 'Максимальная забота',
                features: [
                  'Люкс-переноска',
                  'Персональный курьер',
                  'Полная страховка',
                  'Онлайн трансляция',
                  'Ветеринарное сопровождение',
                  'Доставка до двери'
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : 'hover:shadow-lg'} transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{plan.price} ₽</div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => scrollToSection('contact')}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                О нас
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ЗооТрансфер — это команда профессионалов, которая с 2019 года специализируется 
                на безопасной транспортировке животных между Санкт-Петербургом и Москвой.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы понимаем, как важны для вас ваши питомцы, поэтому обеспечиваем максимальный 
                комфорт и безопасность в каждой поездке. Наши водители проходят специальную 
                подготовку для работы с животными.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '500+', label: 'Перевезенных питомцев' },
                  { number: '5', label: 'Лет опыта' },
                  { number: '99%', label: 'Довольных клиентов' },
                  { number: '0', label: 'Инцидентов' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-warm-50 rounded-xl">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'Shield', title: 'Безопасность', desc: 'Полная страховка каждой поездки' },
                { icon: 'Heart', title: 'Забота', desc: 'Любим животных как собственных' },
                { icon: 'Clock', title: 'Пунктуальность', desc: 'Всегда в срок без опозданий' },
                { icon: 'Award', title: 'Качество', desc: 'Лицензированные специалисты' }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon name={item.icon} className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы помочь с перевозкой вашего питомца
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-heading text-2xl">Заявка на перевозку</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами в течение 30 минут</CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Петров" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Откуда</label>
                    <Input placeholder="Санкт-Петербург" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Куда</label>
                    <Input placeholder="Москва" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">О питомце</label>
                  <Textarea placeholder="Кот Барсик, 5 лет, 4 кг. Спокойный характер." />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { icon: 'Phone', title: 'Телефон', content: '+7 (812) 123-45-67\n+7 (495) 987-65-43', desc: 'Работаем 24/7' },
                  { icon: 'Mail', title: 'Email', content: 'info@zootransfer.ru\nsupport@zootransfer.ru', desc: 'Ответим в течение часа' },
                  { icon: 'MapPin', title: 'Офисы', content: 'СПб: ул. Невская, 25\nМск: ул. Тверская, 12', desc: 'Можете приехать к нам' }
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line mb-1">{contact.content}</p>
                      <p className="text-sm text-secondary">{contact.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Zap" className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-gray-900">Экстренная связь</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Если ваш питомец уже в пути, вы можете связаться с водителем напрямую
                </p>
                <Button variant="outline" className="w-full border-primary text-primary">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  Позвонить водителю
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Heart" className="w-8 h-8 text-primary" />
              <span className="text-2xl font-heading font-bold">ЗооТрансфер</span>
            </div>
            <p className="text-gray-400 mb-4">
              Безопасная перевозка животных Санкт-Петербург ↔ Москва
            </p>
            <p className="text-sm text-gray-500">
              © 2024 ЗооТрансфер. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;