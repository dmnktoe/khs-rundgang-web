import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Logger } from './logger.service';

import afZA from '../../../translations/af-ZA.json';
import arSA from '../../../translations/ar-SA.json';
import caES from '../../../translations/ca-ES.json';
import csCZ from '../../../translations/cs-CZ.json';
import daDK from '../../../translations/da-DK.json';
import deDE from '../../../translations/de-DE.json';
import elGR from '../../../translations/el-GR.json';
import enUS from '../../../translations/en-US.json';
import esES from '../../../translations/es-ES.json';
import fiFI from '../../../translations/fi-FI.json';
import frFR from '../../../translations/fr-FR.json';
import heIL from '../../../translations/he-IL.json';
import huHU from '../../../translations/hu-HU.json';
import itIT from '../../../translations/it-IT.json';
import jaJP from '../../../translations/ja-JP.json';
import koKR from '../../../translations/ko-KR.json';
import nlNL from '../../../translations/nl-NL.json';
import noNO from '../../../translations/no-NO.json';
import plPL from '../../../translations/pl-PL.json';
import ptBR from '../../../translations/pt-BR.json';
import ptPT from '../../../translations/pt-PT.json';
import roRO from '../../../translations/ro-RO.json';
import ruRU from '../../../translations/ru-RU.json';
import srSP from '../../../translations/sr-SP.json';
import svSE from '../../../translations/sv-SE.json';
import trTR from '../../../translations/tr-TR.json';
import ukUA from '../../../translations/uk-UA.json';
import viVN from '../../../translations/vi-VN.json';
import zhCN from '../../../translations/zh-CN.json';
import zhTW from '../../../translations/zh-TW.json';

const log = new Logger('I18nService');
const languageKey = 'language';

/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param s The string to extract for translation.
 * @return The same string.
 */
export function extract(s: string) {
  return s;
}

@Injectable()
export class I18nService {
  defaultLanguage!: string;
  supportedLanguages!: string[];

  private langChangeSubscription!: Subscription;

  constructor(private translateService: TranslateService) {
    // Embed languages to avoid extra HTTP requests
    translateService.setTranslation('AF', afZA);
    translateService.setTranslation('AR', arSA);
    translateService.setTranslation('CA', caES);
    translateService.setTranslation('CS', csCZ);
    translateService.setTranslation('DA', daDK);
    translateService.setTranslation('DE', deDE);
    translateService.setTranslation('EL', elGR);
    translateService.setTranslation('EN', enUS);
    translateService.setTranslation('ES', esES);
    translateService.setTranslation('FI', fiFI);
    translateService.setTranslation('FR', frFR);
    translateService.setTranslation('HE', heIL);
    translateService.setTranslation('HU', huHU);
    translateService.setTranslation('IT', itIT);
    translateService.setTranslation('JA', jaJP);
    translateService.setTranslation('KO', koKR);
    translateService.setTranslation('NL', nlNL);
    translateService.setTranslation('NO', noNO);
    translateService.setTranslation('PL', plPL);
    translateService.setTranslation('PT', ptBR);
    translateService.setTranslation('PT', ptPT);
    translateService.setTranslation('RO', roRO);
    translateService.setTranslation('RU', ruRU);
    translateService.setTranslation('SR', srSP);
    translateService.setTranslation('SV', svSE);
    translateService.setTranslation('TR', trTR);
    translateService.setTranslation('UK', ukUA);
    translateService.setTranslation('VI', viVN);
    translateService.setTranslation('ZH', zhCN);
    translateService.setTranslation('ZH', zhTW);
  }

  /**
   * Initializes i18n for the application.
   * Loads language from local storage if present, or sets default language.
   * @param defaultLanguage The default language to use.
   * @param supportedLanguages The list of supported languages.
   */
  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    // Warning: this subscription will always be alive for the app's lifetime
    this.langChangeSubscription = this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        localStorage.setItem(languageKey, event.lang);
      }
    );
  }

  /**
   * Cleans up language change subscription.
   */
  destroy() {
    this.langChangeSubscription.unsubscribe();
  }

  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param language The IETF language code to set.
   */
  set language(language: string) {
    language =
      language ||
      localStorage.getItem(languageKey) ||
      this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = this.supportedLanguages.includes(language);

    // If no exact match is found, search without the region
    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language =
        this.supportedLanguages.find((supportedLanguage) =>
          supportedLanguage.startsWith(language)
        ) || '';
      isSupportedLanguage = Boolean(language);
    }

    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    log.debug(`Language set to ${language}`);
    this.translateService.use(language);
  }

  /**
   * Gets the current language.
   * @return The current language code.
   */
  get language(): string {
    return this.translateService.currentLang;
  }
}
