# Alice Vieira — site institucional

Implementação própria em React, TypeScript e Vite, autorizada após a indisponibilidade do registro do template. Não utiliza o código compilado nem os assets externos da referência.

## Rodar

```sh
npm install
npm run dev -- --port 5173
```

Endereço: http://localhost:5173

## Verificações

```sh
npm test
npm run build
node tests/browser-check.mjs
```

O teste de navegador usa o Chromium local indicado no script; ajustar executablePath em outro computador. Textos e contatos: src/content.ts. Cores e composição: src/styles.css. Componentes: src/App.tsx. Foto original preservada na raiz e copiada em public. Fontes de sistema, sem downloads externos.

Sem publicação automática, analytics, formulários ou confirmação fictícia de agendamento.
