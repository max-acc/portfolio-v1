var LanguageList = {
  "EN" : "English",
  "DE" : "Deutsch",
};

//languages Objects
var WORDS_EN = {
  "header_home"                 : "Home",
  "header_skills"               : "Skills",
  "header_projects"             : "Projects",
  "header_contact"              : "Contact",

  "section_backButton"          : "Go back!",

  "section_home_header"         : "Home",
  "section_home_hey"            : "Hey !",
  "section_home_par1"           : "My name is Max and I really enjoy programming.",
  "section_home_par2"           : "I am a computer scientist who is excitd to learn new stuff.",
  "home_picture_description"    : "That's me!",

  "section_aboutme_header"      : "About me",

  "section_skills_header"       : "Skills",
  "section_skills_development"  : "Development",
  "section_skills_pythonCat"    : "Python",
  "section_skills_pythonDes"    : "I'm develping in Python",
  "section_skills_javaCat"      : "Java",
  "section_skills_javaDes"      : "I'm developing in Java",
  "section_skills_cCat"         : "C++/C#",
  "section_skills_cDes"         : "I'm developing in C++ and C#",
  "section_skills_webdevCat"    : "Web Development",
  "section_skills_webdevDes"    : "as you might can see, i know some of the basics of web develpment in html css and javascript as this website is hardcoded. i know my design is not astetically pleasing but my written code is",
  "section_skills_otherCat"     : "Other languages",
  "section_skills_otherDes"     : "I know the basics of other languages",
  "section_skills_otherDes"     : "I know the basics of other languages",
  "section_skills_otherDes"     : "I know the basics of other languages",

  "section_skills_knowledge"    : "Knowledge",
  "section_skills_mlCat"        : "Machine Learning",
  "section_skills_mlDes"        : "I know the basics of other languages",
  "section_skills_gitCat"       : "Git and GitHub",
  "section_skills_gitDes"       : "I know the basics of other languages",

  "section_projects_header"     : "Projects",

  "section_contact_header"      : "Contact",

  "footer_navigation"           : "Navigation",
  "footer_gettouch"             : "Get in touch",
  "footer_gettouch_github"      : "GitHub",
  "footer_gettouch_linkedin"    : "LinkedIn"
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
