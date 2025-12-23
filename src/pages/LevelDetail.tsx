import { useParams, Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const levelData = {
  "1": {
    title: "Neon District",
    category: "Sci-Fi",
    image: "https://cdn.poehali.dev/projects/23f1cb18-8367-4f38-808a-2eaccb1d4bb1/files/ff19b749-ba80-43d1-adbf-4169cf8ef4cd.jpg",
    description: "Футуристический городской уровень с неоновым освещением и индустриальной атмосферой.",
    details: [
      "Площадь уровня: 2000x2000 метров",
      "Время разработки: 3 месяца",
      "Движок: Unreal Engine 5",
      "Стиль: Киберпанк"
    ],
    features: [
      "Динамическая система освещения",
      "Интерактивные объекты окружения",
      "Вертикальный геймплей на нескольких уровнях",
      "Оптимизированная производительность"
    ],
    process: "Уровень разрабатывался с акцентом на вертикальный геймплей. Использовал процедурную генерацию для размещения мелких деталей, что значительно ускорило процесс. Особое внимание уделил освещению - каждый неоновый знак создавался вручную для достижения нужной атмосферы."
  },
  "2": {
    title: "Ancient Citadel",
    category: "Fantasy",
    image: "https://cdn.poehali.dev/projects/23f1cb18-8367-4f38-808a-2eaccb1d4bb1/files/d6b3d1f0-b911-46f4-b0b1-7c441e0e5069.jpg",
    description: "Средневековая крепость с магической атмосферой и детализированной архитектурой.",
    details: [
      "Площадь уровня: 1500x1500 метров",
      "Время разработки: 4 месяца",
      "Движок: Unreal Engine 5",
      "Стиль: Dark Fantasy"
    ],
    features: [
      "Динамическая погода",
      "Разрушаемые элементы",
      "Секретные проходы и комнаты",
      "Атмосферные звуковые эффекты"
    ],
    process: "Вдохновлялся средневековыми замками Европы. Создал модульную систему стен и башен, что позволило быстро итерировать дизайн. Магические элементы добавлялись постепенно, чтобы не перегрузить сцену."
  },
  "3": {
    title: "Forgotten City",
    category: "Post-Apocalyptic",
    image: "https://cdn.poehali.dev/projects/23f1cb18-8367-4f38-808a-2eaccb1d4bb1/files/ea7aa30f-567b-44a0-927e-c9ec894cba0a.jpg",
    description: "Заброшенный город после апокалипсиса с разросшейся растительностью.",
    details: [
      "Площадь уровня: 3000x3000 метров",
      "Время разработки: 5 месяцев",
      "Движок: Unity",
      "Стиль: Post-Apocalyptic"
    ],
    features: [
      "Открытый мир с исследованием",
      "Система погоды день/ночь",
      "Разнообразные здания и руины",
      "Процедурная растительность"
    ],
    process: "Самый масштабный проект в портфолио. Использовал фотограмметрию для создания реалистичных текстур. Растительность размещалась процедурно с ручной корректировкой. Много внимания уделил оптимизации для открытого мира."
  }
};

const LevelDetail = () => {
  const { id } = useParams();
  const level = id ? levelData[id as keyof typeof levelData] : null;

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Уровень не найден</h1>
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline">
            <Icon name="ArrowLeft" size={20} />
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Icon name="ArrowLeft" size={20} />
            <span className="font-medium">Назад</span>
          </Link>
          <h1 className="text-2xl font-bold">Level Designer</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fade-in space-y-4 mb-8">
              <p className="text-sm text-accent font-medium uppercase tracking-wider">
                {level.category}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold">{level.title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {level.description}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-lg aspect-video mb-16 animate-scale-in">
              <img 
                src={level.image} 
                alt={level.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Info" size={24} className="text-primary" />
                    Детали проекта
                  </h2>
                  <ul className="space-y-3">
                    {level.details.map((detail, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <Icon name="ChevronRight" size={18} className="text-accent mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Sparkles" size={24} className="text-primary" />
                    Ключевые особенности
                  </h2>
                  <ul className="space-y-3">
                    {level.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-accent mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6 bg-card/30 p-8 rounded-lg">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Icon name="Lightbulb" size={24} className="text-primary" />
                Процесс разработки
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {level.process}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Заинтересовались?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Смотреть другие работы
                <Icon name="ArrowRight" size={20} />
              </Link>
              <a 
                href="/#about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border text-foreground rounded-lg hover:bg-card/80 transition-all hover:scale-105"
              >
                Узнать больше обо мне
                <Icon name="User" size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">© 2024 Level Designer Portfolio</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Github" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LevelDetail;
