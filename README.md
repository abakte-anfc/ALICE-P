# Projeto Frida

Redesign institucional em React, TypeScript e Vite, implementado a partir de `../Redesign.md`.

## Desenvolvimento

```sh
npm ci
npm run dev
```

## Verificação

```sh
npm run build
npm test
node tests/browser-check.mjs
```

O teste de navegador usa a aplicação em `http://localhost:5173`. Defina `SITE_URL` para usar outra porta e instale o Chromium do Playwright caso necessário.

## Conteúdo e identidade

- `src/content.ts`: equipe, CRPs, formulários oficiais, textos e Instagram.
- `src/styles.css`: tokens de cores, composição editorial, responsividade e movimento reduzido.
- `public/projeto-frida-logo.jpg`: logo original fornecida pelo usuário.
- `src/App.tsx`: navegação, capítulos, cartões, perguntas e chamadas para contato.

O formulário infantil atende crianças de até 14 anos. O segundo formulário é destinado a adolescentes e adultos. Os links abrem os formulários externos; o site não coleta respostas nem confirma agendamentos.

O material anterior de Alice Vieira permanece apenas nos documentos históricos e no arquivo fonte da fotografia na raiz. A interface, os metadados e os arquivos públicos usam a identidade do Projeto Frida. Não publicar dados antigos desses documentos.

Não foi realizada publicação automática. Detalhes de validação em `docs/REDESIGN-FRIDA.md`.

## Prévia ao compartilhar links

O HTML contém Open Graph e Twitter Card, com imagem JPEG de 1200 × 630 px em `public/projeto-frida-social.jpg`. Os metadados são entregues no HTML inicial, sem depender do React.

Defina `SITE_URL` com o endereço público final do site, por exemplo `https://seu-dominio.com`, nas variáveis de ambiente do deploy. O endereço padrão confirmado é `https://projeto-frida.vercel.app`. URLs temporárias de preview não substituem esse domínio. A configuração está em `vite.config.mjs`.

Após o build, `node tests/social-preview-check.mjs` verifica os metadados e a presença da imagem. A prévia só pode ser validada nos aplicativos após a publicação; alguns aplicativos mantêm versões anteriores em cache.
