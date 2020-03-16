<script>
  import i18n from "/i18n/index";

  let locale = "ru";
  let _;

  $: _ = i18n( locale );
</script>

{_( "hello" )}, друг! <br>
Это {_( "description" )} <br>
Сменить язык:
<button on:click = {() => locale = "ru"}>{_( "lang_ru" )}</button>
<button on:click = {() => locale = "en"}>{_( "lang_en" )}</button>
