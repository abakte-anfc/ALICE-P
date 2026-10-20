# Redesign — Projeto Frida

Implementação do briefing Redesign.md, com a logo original e os dados enviados durante a execução.

## Entrega

Paleta rosa antigo, pêssego, coral, creme e preto suave; títulos editoriais serifados, desenhos lineares, estrelas de quatro pontas e textura discreta. Cinco capítulos preservados, incluindo rasgos por rolagem, cartão com virada, cartões de atendimento e rota animada. Conteúdo essencial em fluxo normal, com alternativa de movimento reduzido.

Equipe: Lara Beatriz Mantovani da Costa (08/42679), Marianne Vieira Fernandes Kudo (08/44963), Rafaella G. M. Fernandes (08/38781), Raquel Gonçalves Domingos (08/39243). Não foram atribuídas especializações ou abordagens às profissionais.

Formulários fornecidos pelo usuário integrados nos cartões de atendimento e no contato: adolescente/adulto e infantil até 14 anos. Instagram @oprojetofrida mantido para dúvidas. Nenhum contato pessoal, retrato ou serviço de Alice aparece na interface. A foto antiga foi retirada da pasta pública, preservando o arquivo fonte histórico da raiz.

## Validação técnica

TypeScript 5.9.3: verificação sem erros. Build Vite 8.3.4 concluído. Dois testes Vitest passaram, cobrindo marca, remoção dos dados antigos, equipe e CRPs, destinos dos formulários e estrutura da página.

A instalação exata com npm ci foi impedida por restrições de rede e ausência de alguns pacotes no cache. Para validar localmente foram extraídos pacotes do cache, sem alterar package.json ou package-lock.json. A execução usou Vitest 5.0.3 e Playwright 1.63.0; Rolldown 1.2.13 com seu binding correspondente, tipos OXC 0.153.0 e obug 2.2.1. Esses substitutos existem apenas em node_modules local. Repetir npm ci, npm run build e npm test com as versões do lockfile em um ambiente com acesso ao registro antes da publicação.

Resultados de navegador em frida-browser-results.json; capturas frida-390.png e frida-1440.png. Verificações em 360, 390, 768 e 1440 px, com movimento normal e reduzido: transbordamento horizontal, menu mobile, FAQ, virada manual, carregamento da logo, equipe e destinos externos.

## Limites

Os formulários foram usados exatamente como enviados, sem envio de respostas de teste. Não foi possível ler o conteúdo externo pelo navegador de pesquisa. Não foram presumidos valores, endereço, modalidade ou disponibilidade. Não houve publicação.
