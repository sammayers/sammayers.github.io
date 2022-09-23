import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {

  if(window.screen.availWidth <= 500 || window.screen.availHeight <= 500){
    return `
   Summary
   ${config.name}
   <u><a href="${config.resume_url}" target="_blank">resume</a></u>
  爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
  爵 altwebsite
  -----------
   CONTACT 
   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>

`;

  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                 
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄            
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            Summary
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           ${config.name}
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓        <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓                                 ▐▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓          S A M A N T H A        ▐▓       爵 altwebsite
▐▓            M A Y E R S          ▐▓       -----------
▐▓                                 ▐▓        CONTACT 
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
}
};

export default sumfetch;
