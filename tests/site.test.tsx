import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import App from '../src/App';
describe('Página pública',()=>{
 it('mantém cada parágrafo obrigatório visível no HTML',()=>{
 const html=renderToStaticMarkup(<App/>);
 const source=readFileSync('CONTEUDO.md','utf8').split('## Notas de implementação')[0];
 const paragraphs=source.split('\n\n').filter(p=>/^(Sou |Tenho |Possuo |Considero-me |Realizo |A Gestalt|Atendimentos |Processo de |“)/.test(p));
 expect(paragraphs).toHaveLength(10);
 for(const text of paragraphs) expect(html).toContain(text);
 expect((html.match(/<h1[ >]/g)||[])).toHaveLength(1);
 });
 it('oferece contatos reais e mensagem específica para avaliação',()=>{
 const html=renderToStaticMarkup(<App/>);
 expect(html).toContain('https://wa.me/5591982336647?text=');
 expect(html).toContain(encodeURIComponent('Olá, Alice! Gostaria de informações sobre o processo de avaliação psicológica para cirurgia bariátrica.'));
 expect(html).toContain('https://www.instagram.com/psialicevc/');
 expect(html).not.toContain('<form');
 });
});