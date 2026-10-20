import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {describe,it,expect} from 'vitest';
import App from '../src/App';
import {content} from '../src/content';
describe('Projeto Frida',()=>{
 it('apresenta a nova marca sem reutilizar dados da Alice',()=>{
  const html=renderToStaticMarkup(<App/>);
  expect(html).toContain('Projeto Frida');
  for(const old of ['Alice Vieira','10/12527','5591982336647','psialicevc','alice-vieira-foto','CLIPSI','Gestalt','Fritz Perls']) expect(html).not.toContain(old);
  expect((html.match(/<h1[ >]/g)||[])).toHaveLength(1);
  for(const p of [...content.bio,...content.approach]) expect(html).toContain(p);
 });
 it('preserva navegação, cartões, FAQ e contato oficial sem confirmação fictícia',()=>{
  const html=renderToStaticMarkup(<App/>);
  for(const id of ['inicio','sobre','atendimentos','processo','contato','duvidas']) expect(html).toContain(`id="${id}"`);
  expect(html).toContain(content.instagram);
  expect(html).toContain(content.forms.adult);
  expect(html).toContain(content.forms.child.replaceAll('&','&amp;'));
  for(const person of content.team){expect(html).toContain(person.name);expect(html).toContain(person.crp);}
  expect(content.team).toHaveLength(4);
  expect((html.match(/<details>/g)||[])).toHaveLength(4);
  expect(html).toContain('O contato não confirma uma reserva.');
  expect(html).not.toContain('wa.me');
 });
});
