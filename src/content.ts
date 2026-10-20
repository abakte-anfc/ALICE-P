export const content = {
 name: 'Projeto Frida', identification: 'Histórias, encontros e possibilidades.',
 instagram: 'https://www.instagram.com/oprojetofrida/',
forms: { adult:'https://docs.google.com/forms/d/e/1FAIpQLSeghwq4MPJxOTiq0EQElt_xVvSvlSM_ftBuBxrkSJOsaGID8A/viewform', child:'https://docs.google.com/forms/d/e/1FAIpQLScUVxCTb3FmLYwfkFMarrYmlvtZQeko9bkcqsiWgI4fr3QPYQ/viewform?usp=send_form'},
team: [{name:'Lara Beatriz Mantovani da Costa',crp:'08/42679'},{name:'Marianne Vieira Fernandes Kudo',crp:'08/44963'},{name:'Rafaella G. M. Fernandes',crp:'08/38781'},{name:'Raquel Gonçalves Domingos',crp:'08/39243'}],
 bio: ['Cada história tem seu próprio ritmo. Há espaço para as pausas, para as perguntas e para os caminhos que ainda estão sendo desenhados.', 'Conheça o Projeto Frida. Para informações sobre o projeto e suas possibilidades de atendimento, converse pelo nosso canal oficial.'],
 approach: ['Escolha o formulário para adolescentes e adultos ou o formulário infantil, destinado a crianças de até 14 anos. O preenchimento manifesta seu interesse e não confirma um agendamento.', 'Consulte diretamente com o Projeto Frida as informações sobre profissionais, modalidades, horários e valores. Assim, você pode decidir com clareza e no seu tempo.'],
 quote: 'Há muitas formas de florescer. A sua também tem espaço.',
 services: [
 {title:'Adolescentes e adultos',description:'Preencha o formulário de interesse para adolescentes e adultos.',tag:'Informação para começar',icon:'leaf',destination:'adult'},
 {title:'Infantil · até 14 anos',description:'Preencha o formulário infantil para crianças de até 14 anos.',tag:'Cuidado desde o começo',icon:'screen',destination:'child'},
 {title:'Vamos conversar?',description:'Consulte os horários e as orientações para agendar diretamente pelo canal oficial do projeto.',tag:'Um passo de cada vez',icon:'place',destination:'instagram'}
 ]
} as const;
export function contactUrl() { return content.instagram; }
