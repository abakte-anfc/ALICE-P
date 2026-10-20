import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import {existsSync} from 'node:fs';
const local=`${process.env.LOCALAPPDATA}/ms-playwright/chromium-1243/chrome-win64/chrome.exe`;
const browser=await chromium.launch({headless:true,...(existsSync(local)?{executablePath:local}:{})});
const results=[],errors=[];
for(const width of [360,390,768,1440]) for(const reducedMotion of ['no-preference','reduce']){
 const page=await browser.newPage({viewport:{width,height:1000},reducedMotion});
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.SITE_URL || 'http://localhost:5173');await page.locator('h1').waitFor();
 await page.locator('.hero-logo').waitFor();
 await page.locator('.hero-logo').evaluate(img=>img.decode());
 if(await page.locator('.team-person').count()!==4)throw Error('Equipe');
 if(await page.locator('a[href*="docs.google.com/forms"]').count()!==4)throw Error('Formulários');
 if(await page.locator('h1').getAttribute('aria-label')!=='Projeto Frida') throw Error('Marca');
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);if(overflow)throw Error('Overflow '+width);
 if(await page.getByText(/Alice Vieira|10\/12527|CLIPSI|Gestalt/).count())throw Error('Dados antigos');
 for(const a of await page.locator('a[target="_blank"]').all()) if(!['https://www.instagram.com/oprojetofrida/','https://docs.google.com/forms/d/e/1FAIpQLSeghwq4MPJxOTiq0EQElt_xVvSvlSM_ftBuBxrkSJOsaGID8A/viewform','https://docs.google.com/forms/d/e/1FAIpQLScUVxCTb3FmLYwfkFMarrYmlvtZQeko9bkcqsiWgI4fr3QPYQ/viewform?usp=send_form'].includes(await a.getAttribute('href')))throw Error('Contato incorreto');
 await page.locator('.flip-button').scrollIntoViewIfNeeded();await page.waitForTimeout(200);
 await page.locator('.flip-button').click();const previous=await page.locator('.flip-button').getAttribute('aria-pressed');await page.locator('.flip-button').click();
 if(await page.locator('.flip-button').getAttribute('aria-pressed')===previous)throw Error('Cartão');
 await page.locator('summary').filter({hasText:'Como conhecer os atendimentos?'}).click();if(!await page.getByText('Entre em contato com @oprojetofrida no Instagram para consultar os atendimentos disponíveis.',{exact:true}).isVisible())throw Error('FAQ');
 if(width<700){await page.evaluate(()=>scrollTo({top:0,behavior:"instant"}));await page.getByRole('button',{name:'Menu ☰'}).click();await page.getByRole('link',{name:'Atendimentos',exact:true}).click();if(await page.locator('.menu-toggle').getAttribute('aria-expanded')!=='false')throw Error('Menu');}
 await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));await page.evaluate(()=>scrollTo({top:0,behavior:"instant"}));await page.waitForTimeout(200);
 if(reducedMotion==='reduce'&&await page.locator('.chapter-transition').first().isVisible())throw Error('Movimento reduzido');
 if(reducedMotion==='no-preference' && [390,1440].includes(width))await page.screenshot({path:`docs/frida-${width}.png`,fullPage:false});
 results.push({width,reducedMotion,overflow,contact:true,menu:true,faq:true,card:true});await page.close();
}
await browser.close();if(errors.length)throw Error(errors.join('\n'));await fs.writeFile('docs/frida-browser-results.json',JSON.stringify(results,null,2));console.log(results);
