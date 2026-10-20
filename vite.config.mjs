import {defineConfig,loadEnv} from 'vite';

export default defineConfig(({mode})=>{
 const env=loadEnv(mode,process.cwd(),'');
 const configured=env.SITE_URL || process.env.SITE_URL || 'https://projeto-frida.vercel.app';
 const url=new URL(/^https?:\/\//i.test(configured)?configured:`https://${configured}`);
 if(!['https:','http:'].includes(url.protocol))throw new Error('SITE_URL deve ser uma URL HTTP ou HTTPS.');
 const siteUrl=url.origin;
 return {plugins:[{name:'social-preview-url',transformIndexHtml(html){return html.replaceAll('__SITE_URL__',siteUrl);}}]};
});
