import i18next from 'i18next'
import zhCn from './lang/zh-cn';
import enUS from './lang/en-us'
import slateConfig from '~@/slate.config';

await i18next.init({
  lng: slateConfig.lang,
  fallbackLng: 'es-US',
  resources: {
    'zh-CN': {
      translation: zhCn
    },
    'en-US': {
      translation: enUS
    }
  }
})

export default i18next;