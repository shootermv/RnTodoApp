import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: {
      All: 'All',
      Active: 'Active',
      Done: 'Done',
      NoTodosYet: 'No todos yet, go ahead and add some',
      NoResults: 'No Results...',
      inputPlaceholder: 'new todo...',
    },
  },
  he: {
    translation: {
      All: 'הכל',
      Active: 'פעיל',
      Done: 'גמור',
      NoTodosYet: 'אין משימות עדין, מוזמנים להוסיף',
      NoResults: 'אין משימות...',
      inputPlaceholder: 'משימה חדשה',
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
