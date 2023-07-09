var LanguageList = {
  "EN" : "English",
  "DE" : "Deutsch",
};

//languages Objects
var WORDS_EN = {
  "header_home"     : "Home",
  "header_skills"   : "Skills",
  "header_projects" : "Projects",
  "header_contact"  : "Contact"
};

var WORDS_DE = {
  "header_home"     : "Home",
  "header_skills"   : "Fähigkeiten",
  "header_projects" : "Projekte",
  "header_contact"  : "Kontakt"
};




function loadsLanguage(lang){
  /*fills all the span tags with class=lang pattern*/
  $('span[class^="lang"]').each(function(){
    var LangVar = (this.className).replace('lang-','');
    var Text = window["WORDS_"+lang][LangVar];
    $(this).text(Text);
  });
}
