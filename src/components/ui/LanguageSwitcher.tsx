import { useI18n } from '@/i18n/I18nProvider';

export function LanguageSwitcher() {
  const { lang, setLanguage } = useI18n();
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        className={`px-2 py-1 rounded-full text-sm ${lang === 'id' ? 'bg-primary text-white' : 'bg-gray-100 text-black-200'}`}
        onClick={() => setLanguage('id')}
      >
        ID
      </button>
      <button
        type="button"
        className={`px-2 py-1 rounded-full text-sm ${lang === 'en' ? 'bg-primary text-white' : 'bg-gray-100 text-black-200'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}
