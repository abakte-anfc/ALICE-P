import {chromium} from 'playwright';
import {existsSync} from 'node:fs';
const local=`${process.env.LOCALAPPDATA}/ms-playwright/chromium-1243/chrome-win64/chrome.exe`;
const browser=await chromium.launch({headless:true,...(existsSync(local)?{executablePath:local}:{})});
try {
 for(const width of [360,390,482,768,1440]) for(const fontSize of [16,24,32]) {
  const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
  await page.goto(process.env.SITE_URL||'http://localhost:3000');
  await page.locator('.hero-logo').evaluate(img=>img.decode());
  await page.addStyleTag({content:`html{font-size:${fontSize}px!important}`});
  const layout=await page.evaluate(()=>{
   const content=document.querySelector('.hero-content').getBoundingClientRect();
   const cue=document.querySelector('.scroll-cue').getBoundingClientRect();
   const hero=document.querySelector('.hero').getBoundingClientRect();
   return {gap:cue.top-content.bottom,bottom:hero.bottom-cue.bottom,overflow:document.querySelector('.hero').scrollWidth>innerWidth};
  });
  if(layout.gap<39||layout.bottom<100||layout.overflow)throw Error(JSON.stringify({width,fontSize,...layout}));
  if(width===482&&fontSize===16){
   await page.setViewportSize({width,height:360});
   await page.evaluate(()=>scrollTo({top:document.querySelector('.hero').getBoundingClientRect().bottom+scrollY-360,behavior:'instant'}));
   await page.screenshot({path:'docs/hero-scroll-cue-fixed.png'});
  }
  console.log({width,fontSize,...layout});await page.close();
 }
}finally{await browser.close();}
