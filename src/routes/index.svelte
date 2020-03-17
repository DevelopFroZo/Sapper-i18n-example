<script>
  import { stores } from "@sapper/app";
  import i18n from "/i18n/index";

  const { session } = stores();
  let { locale } = $session;
  let _;

  $: _ = i18n( locale );

  async function changeLocale( locale_ ){
    const response = await fetch( `/api/locales/${locale_}`, {
      method: "PUT"
    } );

    if( response.status === 204 )
      return locale = locale_;

    alert( "Передана неверная локаль" );
  }
</script>

{_( "hello" )}, друг! <br>
Это {_( "description" )} <br>
Сменить язык:
<button on:click = {() => changeLocale( "ru" )}>{_( "lang_ru" )}</button>
<button on:click = {() => changeLocale( "en" )}>{_( "lang_en" )}</button>
