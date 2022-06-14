const button = document.querySelector('#button')
const buttonClicked = document.querySelector('.response__waiting')

function getResponse() {
  button.style.visibility = 'hidden'
  buttonClicked.style.visibility = 'visible'
}

const phrases = [
  'É uma das raças mais semelhantes aos lobos',
  'Tem heterocromia que é uma mutação genética',
  'tem fácil adaptação aos ambientes',
  'É uma raça extremamente antiga',
  'São cães da neve',
  'Além de adorar pisar e se esfregar na neve, o Husky também gosta bastante de água e das folhagens que caem das árvores durante o outono.',
  'O Husky Siberiano é um corredor nato',
  'Há vários motivos para esses cães serem responsáveis pela tração dos trenós. O primeiro ponto é a resistência ao frio, mas a força e resistência não podem ser desconsiderados.',
  'Não é difícil encontrar imagens e vídeos de cães da raça Husky Siberiano que são muito fofos e companheiros.',
  'Em geral, o cão é muito sensível e também consegue demonstrar grande afetividade pelos membros da sua família.',
  'A personalidade desses animais pode variar bastante e, é primordial fornecer ao cão estímulos diferentes.',
  'Sendo um cão dotado de muita inteligência, esse cão é relativamente simples de adestrar. Basta ter um pouco de paciência para isso.',
  'Muito alegre e curioso, o Husky se adapta facilmente a diferentes situações e, entra rapidamente no ritmo da casa onde vive.',
  'Durante a Segunda Guerra Mundial, vários exemplares de Husky Siberianos foram utilizados em trabalhos de transporte e comunicação.',
  'Existiu Husky herói. Balto era um cão mestiço de Husky e, se tornou um verdadeiro herói. Até mesmo a Disney contou a sua história por meio de filmes.',
  'Como o nome da raça em si já sugere, o Husky Siberiano é proveniente da região fria da Sibéria, localizada na Rússia.',
  'Muita gente pensa que o Husky Siberiano é um cão de guarda por causa do seu porte grande e imponente.',
  'Desde as suas origens, esses cães eram usados para trabalho, sobretudo para puxar trenó, mas nunca para guarda.',
  'Alopecia (queda acentuada de pelos), hipertireoidismo e atrofia progressiva de retina são alguns dos principais problemas de saúde desses cães.',
  'O Husky Siberiano é um cão considerado de porte grande, que tem exemplares entre 50 e 60 centímetros de altura.',
  'Em relação ao peso, esses cães costumam ter entre 20 e 28 Kg, sendo mais uma vez as fêmeas um pouco mais leves de maneira geral.',
  'O corpo do animal deve ser forte, mas magro. Inclusive, animais acima do peso sofrem penalizações em competições.',
  'O Husky possui também diversos tipos de marcações na cabeça, sendo comum encontrar padrões que não existem em outras raças.',
  'A cor dos olhos do Husky Siberiano também varia bastante, podendo ter tonalidades entre o marrom e o azul.',
  'Semanalmente é necessário também fazer a manutenção da limpeza dos dentes, escovação da pelagem e limpeza das orelhas.',
  'Anualmente é preciso levar o cão a uma consulta de rotina com o veterinário para que seja descartada a presença de qualquer tipo de problema de saúde.',
  'Uma ração Super Premium adequada para a idade do animal é algo fundamental para todos os cães dessa raça.',
  
  
  'Se você já conviveu com um Husky Siberiano, deve ter percebido que ele é muito falador, ou seja, consegue emitir diversos tipos de sons.',
]

function generateChoice() {
  const allPhrases = phrases.length
  const randomChoice = Math.floor(Math.random() * allPhrases)

  const response = document.querySelector('#response')
  const containerresponse = document.querySelector('.container-response')
  setTimeout(function () {
    response.innerHTML = phrases[randomChoice]
    response.style.visibility = 'visible'
    containerresponse.classList.add('clicked');
  }, 1500)  
}

const urugReactions = [
  'Au, Au au auuuuuuuu...!!!',
  'Que xeirinho bom',
  'Me da um cafuné',
  'La vai a lambida',
  'Meu rabinho está ligado no 220'
  
]

function generateReaction() {  
  const allReactions = urugReactions.length
  const randomReaction = Math.floor(Math.random() * allReactions)

  const button = document.querySelector('#button')
  setTimeout(function () {
    document.getElementById("button").disabled = true;
    button.style.visibility = 'visible'
    button.style.background = 'transparent'
    button.style.border = 'none'
    button.style.color = 'white'
    button.style.fontWeight = 'bolder'
    button.style.width = '100%'
    button.style.height = '50px'
    button.style.cursor = 'default'
    buttonClicked.style.visibility = 'hidden'
    button.innerHTML = urugReactions[randomReaction]
  }, 1500)  
}