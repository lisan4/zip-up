// Mock data for ZIPUP clothing website

export const sliderImages = [
  {
    id: 1,
    title: "Одежда",
    description: "Стильная и качественная одежда",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
  },
  {
    id: 2,
    title: "Обувь", 
    description: "Комфортная обувь на любой случай",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
  },
  {
    id: 3,
    title: "Аксессуары",
    description: "Модные аксессуары и украшения",
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
  }
];

export const catalogItems = [
  // Одежда
  {
    id: 1,
    name: "Белая рубашка",
    category: "одежда",
    price: 2500,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["S", "M", "L", "XL"],
    colors: ["белый", "синий", "черный"]
  },
  {
    id: 2,
    name: "Джинсы классические",
    category: "одежда",
    price: 3500,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["синий", "черный", "серый"]
  },
  {
    id: 3,
    name: "Платье летнее",
    category: "одежда",
    price: 4200,
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["XS", "S", "M", "L"],
    colors: ["розовый", "желтый", "белый"]
  },
  {
    id: 4,
    name: "Свитер вязаный",
    category: "одежда",
    price: 3800,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["S", "M", "L", "XL"],
    colors: ["серый", "бежевый", "черный"]
  },

  // Обувь
  {
    id: 5,
    name: "Кроссовки Nike Red",
    category: "обувь",
    price: 8500,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
    colors: ["красный", "белый", "черный"]
  },
  {
    id: 6,
    name: "Nike Air Force",
    category: "обувь",
    price: 9200,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
    colors: ["белый", "синий", "черный"]
  },
  {
    id: 7,
    name: "Ботинки кожаные",
    category: "обувь",
    price: 12000,
    image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["37", "38", "39", "40", "41", "42", "43", "44"],
    colors: ["коричневый", "черный", "темно-синий"]
  },
  {
    id: 8,
    name: "Спортивные кроссовки",
    category: "обувь",
    price: 7800,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    colors: ["белый", "серый", "черный"]
  },

  // Аксессуары
  {
    id: 9,
    name: "Золотые украшения",
    category: "аксессуары",
    price: 15000,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["универсальный"],
    colors: ["золотой", "серебряный"]
  },
  {
    id: 10,
    name: "Кожаная сумка",
    category: "аксессуары", 
    price: 8900,
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["универсальный"],
    colors: ["коричневый", "черный", "бежевый"]
  },
  {
    id: 11,
    name: "Серебряное ожерелье",
    category: "аксессуары",
    price: 6500,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["универсальный"],
    colors: ["серебряный", "золотой"]
  },
  {
    id: 12,
    name: "Технические аксессуары",
    category: "аксессуары",
    price: 4200,
    image: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=400&h=400&fit=crop&crop=entropy&auto=format&q=75",
    sizes: ["универсальный"],
    colors: ["черный", "белый", "серый"]
  }
];

export const categories = [
  { id: "all", name: "Все товары" },
  { id: "одежда", name: "Одежда" },
  { id: "обувь", name: "Обувь" },
  { id: "аксессуары", name: "Аксессуары" }
];

// Тарифы доставки согласно требованиям пользователя
export const shippingRates = {
  auto: 1000, // базовая стоимость авто доставки
  avia: 3000, // базовая стоимость авиа доставки
  coefficients: {
    "обувь": 1.3,
    "одежда": 1.3,
    "аксессуары": 1.1,
    "разное": 1.0
  }
};