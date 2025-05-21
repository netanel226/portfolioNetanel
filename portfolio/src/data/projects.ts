import { Section } from '../types/types';

export const projectSections: Section[] = [
  {
    id: 'games',
    title: 'משחקים',
    projects: [
      {
        id: 'santafit-game',
        title: 'SantaFit',
        description: 'משחק כושר אינטראקטיבי המשלב אימון גופני עם חוויית משחק מהנה',
        technologies: ['Unity', 'C#', 'Game Design', 'Animation'],
        media: [
          {
            type: 'image',
            url: '/media/images/SantaFitGame.png',
            alt: 'SantaFit Game Screenshot'
          }
        ],
        githubUrl: 'https://github.com/yourusername/santafit-game',
        liveUrl: 'https://santafit-game.com',
        buildProcess: 'פיתוח משחק אינטראקטיבי בסביבת Unity, המשלב מערכת תנועה מתקדמת עם מכניקות משחק מעניינות. המשחק כולל מערכת ניקוד, שלבים מתקדמים ומעקב אחר התקדמות המשתמש.'
      }
    ]
  },
  {
    id: 'generators',
    title: 'מחוללים',
    projects: [
      {
        id: 'santafit',
        title: 'SANTAFIT',
        description: 'מחולל אימונים חכם המותאם אישית למשתמש',
        technologies: ['React', 'Node.js', 'AI', 'Machine Learning'],
        media: [
          {
            type: 'image',
            url: '/media/images/gameWeb.png',
            alt: 'SANTAFIT interface preview'
          }
        ],
        githubUrl: 'https://github.com/yourusername/santafit',
        liveUrl: 'https://santafit.com',
        buildProcess: 'פיתוח מערכת חכמה המשלבת בינה מלאכותית ליצירת תוכניות אימון מותאמות אישית. המערכת מתחשבת בנתוני המשתמש, מטרותיו ומגבלותיו.'
      }
    ]
  },
  {
    id: 'ai-websites',
    title: 'אתרי AI',
    projects: [
      {
        id: 'chat-guide',
        title: 'צ\'אט הדרכה',
        description: 'מערכת צ\'אט חכמה המספקת הדרכה מותאמת אישית',
        technologies: ['OpenAI', 'React', 'Node.js', 'MongoDB'],
        media: [
          {
            type: 'image',
            url: '/media/images/HadrachaChat.png',
            alt: 'Chat Guide interface'
          }
        ],
        githubUrl: 'https://github.com/yourusername/chat-guide',
        liveUrl: 'https://chat-guide.com',
        buildProcess: 'פיתוח ממשק צ\'אט אינטואיטיבי המשתמש ב-AI לספק מענה מדויק ומותאם אישית לשאלות משתמשים.'
      },
      {
        id: 'accessibot',
        title: 'AccessiBot',
        description: 'בוט לבדיקת נגישות אתרים אוטומטית',
        technologies: ['AI', 'Accessibility', 'Node.js', 'Puppeteer'],
        media: [
          {
            type: 'image',
            url: '/media/images/accsesibot.png',
            alt: 'AccessiBot dashboard'
          }
        ],
        githubUrl: 'https://github.com/yourusername/accessibot',
        liveUrl: 'https://accessibot.com',
        buildProcess: 'פיתוח כלי אוטומטי לבדיקת נגישות אתרים, המשלב טכנולוגיות AI לזיהוי בעיות נגישות ומתן המלצות לתיקון.'
      },
      {
        id: 'probot',
        title: 'ProBot',
        description: 'בוט חכם לניהול פרויקטים ומשימות',
        technologies: ['AI', 'Project Management', 'React', 'Node.js'],
        media: [
          {
            type: 'image',
            url: '/media/images/probot-preview.jpg',
            alt: 'ProBot interface'
          }
        ],
        githubUrl: 'https://github.com/yourusername/probot',
        liveUrl: 'https://probot.com',
        buildProcess: 'פיתוח מערכת ניהול פרויקטים חכמה המשתמשת ב-AI לאופטימיזציה של תהליכי עבודה ותזמון משימות.'
      }
    ]
  },
  {
    id: 'ux-design',
    title: 'אפיון',
    projects: [
      {
        id: 'amdocs',
        title: 'Amdocs',
        description: 'אפיון ועיצוב מערכות ניהול לקוחות',
        technologies: ['UX Design', 'UI Design', 'Figma', 'User Research'],
        media: [
          {
            type: 'image',
            url: '/media/images/devmentorAi.png',
            alt: 'Amdocs UX design'
          }
        ],
        githubUrl: undefined,
        liveUrl: 'https://amdocs.com',
        buildProcess: 'אפיון ועיצוב ממשקי משתמש מורכבים למערכות ניהול לקוחות, כולל מחקר משתמשים, יצירת פרוטוטייפים ובדיקות שמישות.'
      }
    ]
  }
]; 