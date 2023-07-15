var LanguageList = {
  "EN" : "English",
  "DE" : "Deutsch",
};

//languages Objects
var WORDS_EN = {
  "header_home"     : "Home",
  "header_skills"   : "Skills",
  "header_projects" : "Projects",
  "header_contact"  : "Contact",

  "section_backButton"  : "Go back!",

  "section_home_header"       : "Home",
  "section_home_hey"          : "Hey !",
  "section_home_par1"         : "My name is Max and I really enjoy programming.",
  "section_home_par2"         : "I am a computer scientist who is excitd to learn new stuff.",
  "home_picture_description"  : "That's me!",

  "section_aboutme_header" : "About me",

  "section_skills_header"   : "Skills",

  "section_projects_header" : "Projects",

  "section_contact_header"  : "Contact",

  "footer_navigation"       : "Navigation",
  "footer_gettouch"            : "Get in touch",
  "footer_gettouch_github"     : "GitHub",
  "footer_gettouch_linkedin"   : "LinkedIn"
};

var WORDS_DE = {
  "header_home"     : "Home",
  "header_skills"   : "Fähigkeiten",
  "header_projects" : "Projekte",
  "header_contact"  : "Kontakt",

  "section_backButton"  : "Zurück zum Start",

  "section_home_header"       : "Home",
  "section_home_hey"          : "Hey !",
  "section_home_par1"         : "Mein Name ist Max, und ich programmiere sehr gerne.",
  "section_home_par2"         : "Ich bin ein Informatik-Mensch, der gerne neue Dinge lernt.",
  "home_picture_description"  : "Das bin ich!",

  "section_aboutme_header" : "Über mich",

  "section_skills_header"   : "Fähigkeiten",

  "section_projects_header" : "Projekte",

  "section_contact_header"  : "Kontakt",

  "footer_navigation"       : "Navigation",
  "footer_links"            : "In Kontakt treten",
  "footer_links_github"     : "GitHub",
  "footer_links_linkedin"   : "LinkedIn"
};




function loadsLanguage(lang){
  /*fills all the span tags with class=lang pattern*/
  $('span[class^="lang"]').each(function(){
    var LangVar = (this.className).replace('lang-','');
    var Text = window["WORDS_"+lang][LangVar];
    $(this).text(Text);
  });
}
