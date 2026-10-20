export const content = {
  "name": "Alice Vieira",
  "identification": "Psicóloga Clínica · CRP 10/12527",
  "phone": "5591982336647",
  "instagram": "https://www.instagram.com/psialicevc/",
  "bio": [
    "Sou psicóloga clínica (CRP 10/12527), formada pela Universidade Federal do Pará e pós-graduanda em Avaliação Psicológica e Psicodiagnóstico.",
    "Tenho como objetivo te auxiliar em demandas voltadas ao autoconhecimento, à autoestima e aos relacionamentos, estando aberta a escutar adolescentes e adultos que queiram iniciar o acompanhamento psicológico de modo responsável e ético.",
    "Possuo capacitação em Avaliação de Transtornos Alimentares e Avaliação Psicológica para Cirurgia Bariátrica. Durante a graduação, pesquisei sobre dança, com enfoque no balé clássico e em suas cobranças relacionadas ao desempenho, ao comportamento alimentar, à autoimagem e à perfeição.",
    "Considero-me uma psicóloga sensível e criativa, tendo minhas vivências artísticas como uma parte importante da minha personalidade. Para mim, autoconhecimento e autoestima caminham juntos e estão diretamente ligados aos relacionamentos que cultivamos, sejam estes de qualquer natureza."
  ],
  "approach": [
    "Realizo meus atendimentos utilizando a Gestalt-terapia como abordagem e acredito em um acompanhamento humano, individualizado e que respeite as singularidades de cada pessoa, acolhendo suas histórias e vivências.",
    "A Gestalt-terapia é uma abordagem psicoterapêutica que valoriza a experiência vivida no momento presente. Seu foco está na ampliação da consciência sobre pensamentos, emoções, sensações corporais e formas de se relacionar. Compreende o indivíduo de maneira integrada, considerando a interação contínua entre pessoa e ambiente. O processo terapêutico busca favorecer a autonomia, a responsabilidade e o contato autêntico. Para isso, utiliza o diálogo e experimentos que promovem novas formas de perceber e enfrentar as dificuldades."
  ],
  "quote": "“Estar no ‘aqui e agora’ é unir a nossa atenção e a nossa consciência.”",
  "services": [
    {
      "title": "Psicoterapia Presencial",
      "description": "Atendimentos em Belém/PA, na CLIPSI Saúde Belém, no bairro da Pedreira.",
      "tag": "Belém, PA",
      "icon": "place"
    },
    {
      "title": "Psicoterapia Online",
      "description": "Atendimentos via Google Meet, para brasileiros em qualquer localidade!",
      "tag": "Onde você estiver",
      "icon": "screen"
    },
    {
      "title": "Avaliação Psicológica",
      "description": "Processo de avaliação psicológica para pré e pós-operatório de cirurgia bariátrica.",
      "tag": "Cuidado em cada etapa",
      "icon": "leaf"
    }
  ]
} as const;
export function whatsapp(evaluation = false) { return 'https://wa.me/'+content.phone+'?text='+encodeURIComponent(evaluation ? 'Olá, Alice! Gostaria de informações sobre o processo de avaliação psicológica para cirurgia bariátrica.' : 'Olá, Alice! Gostaria de informações sobre atendimento.'); }