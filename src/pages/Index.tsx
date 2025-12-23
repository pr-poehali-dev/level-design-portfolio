import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const levels = [
  {
    id: 1,
    title: "Lakeview Breach",
    image: "https://cdn.poehali.dev/files/screenshot1.jpg",
    category: ""
  },
  {
    id: 2,
    title: "Level 2",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23333'/%3E%3Cg transform='translate(400,225)'%3E%3Cpath d='M-50,-50 L50,-50 L50,50 L-50,50 Z M-40,-40 L-40,40 L40,40 L40,-40 Z M-30,-50 L-30,50 M30,-50 L30,50 M-50,-30 L50,-30 M-50,30 L50,30' stroke='%23666' stroke-width='2' fill='none'/%3E%3C/g%3E%3Ctext x='400' y='240' text-anchor='middle' fill='%23999' font-family='monospace' font-size='16'%3EDEV PLACEHOLDER%3C/text%3E%3C/svg%3E",
    category: ""
  },
  {
    id: 3,
    title: "Level 3",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23333'/%3E%3Cg transform='translate(400,225)'%3E%3Cpath d='M-50,-50 L50,-50 L50,50 L-50,50 Z M-40,-40 L-40,40 L40,40 L40,-40 Z M-30,-50 L-30,50 M30,-50 L30,50 M-50,-30 L50,-30 M-50,30 L50,30' stroke='%23666' stroke-width='2' fill='none'/%3E%3C/g%3E%3Ctext x='400' y='240' text-anchor='middle' fill='%23999' font-family='monospace' font-size='16'%3EDEV PLACEHOLDER%3C/text%3E%3C/svg%3E",
    category: ""
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Level Designer</h1>
          <div className="flex gap-6">
            <a href="#portfolio" className="text-foreground/70 hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
              О себе
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-6xl font-bold mb-4">
              Создаю игровые миры
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Level Designer с опытом работы над AAA и инди проектами. 
              Специализируюсь на создании атмосферных уровней с продуманным геймплеем.
            </p>
            <a 
              href="#portfolio" 
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Смотреть работы
              <Icon name="ArrowDown" size={20} />
            </a>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Мои уровни</h2>
            
            <div className="space-y-32">
              {levels.map((level, index) => (
                <Link 
                  key={level.id}
                  to={`/level/${level.id}`}
                  className="block group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
                    <div className="text-center space-y-2">
                      {level.category && (
                        <p className="text-sm text-accent font-medium uppercase tracking-wider">
                          {level.category}
                        </p>
                      )}
                      <h3 className="text-4xl font-bold group-hover:text-primary transition-colors">
                        {level.title}
                      </h3>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-lg aspect-video">
                      <img 
                        src={level.image} 
                        alt={level.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                        <span className="flex items-center gap-2 text-lg font-medium">
                          Подробнее
                          <Icon name="ArrowRight" size={20} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-32 px-6 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">О себе</h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Привет! Я level designer с 5+ годами опыта в игровой индустрии. 
                  Работал над проектами разных жанров — от шутеров до RPG.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Моя специализация — создание уровней, которые не только красиво выглядят, 
                  но и обеспечивают интересный геймплей. Уделяю большое внимание деталям, 
                  освещению и атмосфере.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <Icon name="Wrench" size={24} className="text-primary" />
                    Навыки
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-accent" />
                      Unreal Engine 5
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-accent" />
                      Unity
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-accent" />
                      3D моделирование (Blender)
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-accent" />
                      Game Design Documents
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <Icon name="Trophy" size={24} className="text-primary" />
                    Опыт
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Briefcase" size={18} className="text-accent" />
                      AAA проекты (3 года)
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Briefcase" size={18} className="text-accent" />
                      Инди студии (2 года)
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Briefcase" size={18} className="text-accent" />
                      Фриланс проекты
                    </li>
                  </ul>
                </div>
              </div>
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

export default Index;