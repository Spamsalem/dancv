interface Bio {
  firstName: string;
  lastName: string;
  title: string;
  intro: string;
  achievements: string[];
  aboutMe: string[];
  closing: string;
}

interface Translations {
  en: {
    language: string;
    switchLanguage: string;
    bio: Bio;
    contactMe: string;
    linkedin: string;
    email: string;
  };
  he: {
    language: string;
    switchLanguage: string;
    bio: Bio;
    contactMe: string;
    linkedin: string;
    email: string;
  };
}

export const translations: Translations = {
  en: {
    language: "English",
    switchLanguage: "עברית",
    bio: {
      firstName: "Dan",
      lastName: "Amsalem",
      title: "Team Lead | Project Manager | Visual Media Production Specialist",
      intro: "Over the past two years, I've served as an officer in the IDF Spokesperson's Unit, where I led high-pressure media operations across video production, live broadcasts, and visual content creation.",
      achievements: [],
      aboutMe: [
        "Experienced manager with expertise in leading media production teams in fast-paced, high-stakes environments.",
        "Proven track record in leading large-scale live broadcast operations and managing studio environments.",
        "Strong technical orientation across AI tools, broadcast systems, and operational workflows, with a focus on efficiency and innovation.",
        "Skilled in client-side tender processes and technical specification writing, with a strong ability to align operational requirements with system capabilities.",
        "Experienced with managing social media content, with a good understanding of platform optimization and trends.",
        "A motivated fast learner, with strong leadership and organizational skills, strategic thinking and problem-solving mindset."
      ],
      closing: "As I prepare to finish my military service this June, I'm looking for my next challenge.\n\nIf you're working on something ambitious and need someone who can combine operational capability and technical knowledge, with leadership and creative problem-solving, lets connect! 😁"
    },
    contactMe: "Lets connect",
    linkedin: "LinkedIn",
    email: "Email"
  },
  he: {
    language: "עברית",
    switchLanguage: "English",
    bio: {
      firstName: "דן",
      lastName: "אמסלם",
      title: "מנהל צוותים, מנהל פרויקטים, הפקת תוכן ויזואלי ושידורים חיים",
      intro: "אני דן, לקראת שחרור לאחר שירות ארוך כקצין בדובר צה״ל. בעל ניסיון מוכח בניהול צוותים גדולים, והובלת תהליכים מקצה לקצה באחת מסביבות העבודה המאתגרות ביותר בישראל בשנתיים האחרונות:",
      achievements: [
        "הובלתי את ההקמה של חדר השידור של דובר צה״ל, ששימש לשידור הצהרות דובר צה״ל במהלך המלחמה. עמדתי באתגר שהיה כרוך בשילוב תעשיית הטלוויזיה האזרחית (שהכרתי לעומק בשנתיים האחרונות) בתוך תורת העבודה הישנה והממוסדת של צה״ל.",
        "ניהלתי צוותי פוסט-פרודקשן מתחומים מגוונים (וידאו, גרפיקה, אנימציה ותלת-ממד). התוויתי את המדיניות העיצובית ועבדתי על אלפי תוצרים תקשורתיים שהגיעו למיליוני צופים בארץ ובעולם, במהלך אחד המאבקים התקשורתיים המורכבים שידעה מדינת ישראל.",
        "תוך למידה עצמאית של התחום, הובלתי תהליכי התייעלות ביחידה, הטמעתי כלי בינה מלאכותית ופיתחתי מוצרים טכנולוגיים חדשים, על מנת להגדיל את התפוקה ואיכות התוצרים של המערך כולו - שנמצא בלב זירת ההסברה הישראלית כולה."
      ],
      aboutMe: [
        "יש לי יכולת למידה עצמאית גבוהה וכישורים טכניים מעולים.",
        "אני מביא איתי שילוב של יכולות ניהול, הפקה, חשיבה יצירתית ואוריינטציה טכנולוגית.",
        "ובסופו של דבר, אני איש קריאייטיב בנשמה. לא משנה באיזה תחום עבדתי, תמיד ידעתי להשתמש בכל המוחות בחדר כדי לפתור בעיות, להוביל תהליכים, ולהביא את התוצר הכי טוב - במהירות ויעילות."
      ],
      closing: "מחפש את ההזדמנות הבאה! אשמח לדבר"
    },
    contactMe: "צור קשר",
    linkedin: "לינקדאין",
    email: "אימייל"
  }
};

export default translations;
