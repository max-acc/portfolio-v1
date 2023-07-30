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
  "section_home_par1"           : "My name is Max, and I enjoy programming.",
  "section_home_par2"           : "I am a computer scientist who is excited to learn new stuff.",
  "home_picture_description"    : "That's me!",

  "section_aboutme_header"      : "About me",

  "section_skills_header"       : "Skills",
  "section_skills_development"  : "Development",
  "section_skills_pythonCat"    : "Python",
  "section_skills_pythonDes"    : "I'm develping in Python",
  "section_skills_javaCat"      : "Java",
  "section_skills_javaDes"      : "Even though I am not liking Java (I don't know why;), I am developing a lot with this language due to working with it in school. Java was required by my teachers because the projects planned by them were all in Java. In my later school years, I continued programming in Java because of the simplicity of running the code on any device. Some of my worth-mentioning programs in Java are an explicitly programmed face recognition (I don't know what drove thinking this was a good idea) and my first self-coded Machine Learning program that can classify flowers. My current project is about programming a neural network for image classification in a peculiar way for feature engineering.",
  "section_skills_cCat"         : "C++/C#",
  "section_skills_cDes"         : "As already written above I started my coding journey with programming microcontrollers especially on the Arduino platform. As the Arduino is usually programmed in C++, I do know the basics of C++. There are a lot of projects I've done in the past, most of them were just for fun and are not worth mentioning. C++ helped me understand the basic concepts of programming and later also of object-oriented programming. During the covid pandemic, I also learned C# just for fun.",
  "section_skills_webdevCat"    : "Web Development",
  "section_skills_webdevDes"    : "As you can see, I know some of the basics of web development in HTML5, CSS3, and JavaScript, as this website is hardcoded in those script languages. I know my designs are not as aesthetically pleasing as the websites of UI or UX developers, but the worse my design skills are, the better my written code is. At least, I guess so.",
  "section_skills_otherCat"     : "Other languages",
  "section_skills_otherDes"     : "There are a lot of other programming languages I learned over the past few years, like SQL, PHP, and R, but I am not as familiar with those languages as I am with, for example, Python. But I still think the learning process helped me understand programming concepts better and deeper, and I got an outlook on other languages and their field of use.",

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
