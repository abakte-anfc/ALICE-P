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
