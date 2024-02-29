import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {

  if(window.screen.availWidth <= 500 || window.screen.availHeight <= 500){
    return `
   Summary
   ${config.name}
   <u><a href="${config.resume_url}" target="_blank">resume</a></u>
  爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
  爵 <u><a href="${config.TINotes}" target="_blank">Threat Intel Notes</a></u>
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
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓        <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
▐▓                                 ▐▓       爵 <u><a href="${config.repo}" target="_blank">Github</a></u>
▐▓               S A M             ▐▓       爵 <u><a href="${config.TINotes}" target="_blank">Threat Intel Notes</a></u>
▐▓            M A Y E R S          ▐▓       -----------
▐▓                                 ▐▓        CONTACT 
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://keybase.io/${config.social.keybase}" target="_blank">keybase.io/${config.social.keybase}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
}
};

export default sumfetch;
