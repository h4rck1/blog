<script lang="ts">
  import { i18n } from "@i18n/translation"
  import I18nKey from "@i18n/i18nKey"
  import Icon from "@iconify/svelte"

  import {
    getStoredLanguage,
    setLanguage,
    setLanguageAPI,
  } from "@utils/setting-utils.ts"
  import type { LANGUAGE } from "@/types/config"
  import { EN_en, ES_es } from "@constants/constants"

  async function swichLang(lang: LANGUAGE) {
    await setLanguageAPI(lang)
  }
</script>

<div
  id="display-lang"
  class="absolute transition float-panel-closed top-11 -right-0 pt-8 pr-20 md:pr-8"
>
  <div class="card-base float-panel p-2">
    <button
      class="flex transition whitespace-nowrap items-center justify-start w-full btn-plain h-9 rounded-lg px-3 font-medium mb-0.5"
      on:click={() => swichLang(EN_en)}
    >
      English
    </button>
    <button
      class="flex transition whitespace-nowrap items-center justify-start w-full btn-plain h-9 rounded-lg px-3 font-medium mb-0.5"
      on:click={() => swichLang(ES_es)}
    >
      Español
    </button>
  </div>
</div>

<style lang="stylus">
    #display-lang
      input[type="range"]
        -webkit-appearance: none;
        height: 1.5rem;
        background-image: var(--color-selection-bar)
        transition: background-image 0.15s ease-in-out
  
      /* Input Thumb */
      ::-webkit-slider-thumb
        -webkit-appearance: none;
        height: 1rem;
        width: 0.5rem;
        border-radius: 0.125rem;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: none;
        &:hover
          background: rgba(255, 255, 255, 0.8);
        &:active
          background: rgba(255, 255, 255, 0.6);
  
      ::-moz-range-thumb
        -webkit-appearance: none;
        height: 1rem;
        width: 0.5rem;
        border-radius: 0.125rem;
        border-width: 0
        background: rgba(255, 255, 255, 0.7);
        box-shadow: none;
        &:hover
          background: rgba(255, 255, 255, 0.8);
        &:active
          background: rgba(255, 255, 255, 0.6);
  
      &::-ms-thumb
        -webkit-appearance: none;
        height: 1rem;
        width: 0.5rem;
        border-radius: 0.125rem;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: none;
        &:hover
          background: rgba(255, 255, 255, 0.8);
        &:active
          background: rgba(255, 255, 255, 0.6);
</style>
