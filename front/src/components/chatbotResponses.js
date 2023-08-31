const responses = [
  {
    keywords: ['hello', 'hi', 'ola', 'oi'],
    text: 'Hello! How can I assist you today?'
  },
  {
    keywords: ['goodbye', 'tchau', 'bye'],
    text: 'Goodbye! Have a great day!'
  },
  {
    keywords: ['good', 'bom'],
    text: 'Good to hear! How can I help?'
  },
  {
    keywords: ['get start'], 
    text: "Hi! I'm gost. How can I help?"
  },
  {
    keywords: ['i want', 'quero'],
    text: 'Sure, I\'m here to help. What do you need?'
  },
  {
    keywords: ['loan', 'empréstimo'],
    text: 'Sure! Here are some options:\n1. Apply for a loan\n2. Loan conditions\n3. Help'
  },
  {
    keywords: ['1', 'Apply for a loan'],
    text: "To apply for a loan, please fill out the application form on our website. You can find the form (https://example.com/loan-application)."
  },
  {
    keywords: ['2', 'Loan conditions'],
    text: "Our loan conditions include competitive interest rates, flexible repayment terms, and quick approval processes."
  },
  {
    keywords: ['3', 'Help'],
    text: "If you need to speak to a representative, please type 'Speak to representative.'"
  },
  {
    keywords: ['falar com atendente', 'speak to representative', 'atendente'],
    text: "Please wait while we connect you with a representative. Your request is important to us."
  },
  {
    keywords: ['account', 'conta'],
    text: 'Are you interested in opening an account? Click on the following link: [Open Account](https://example.com/open-account)'
  },
  {
    keywords: ['investments', 'investimentos'],
    text: 'Interested in investments? We offer a range of investment options. Click [here](https://example.com/investments) for more details.'
  },
  {
    keywords: ['add more credit', 'mais limite', 'increase card limit'],
    text: 'To add more limit to your card, please navigate to the Cards section in your account settings and follow the instructions.'
  },
  {
    keywords: ['check balance', 'ver saldo', 'saldo'],
    text: 'Your balance is $25,000 USD.'
  },
  {
    keywords: ['credit', 'crédito'],
    text: 'We offer a variety of credit options, including credit cards and personal loans. Feel free to explore our credit offerings on our website.'
  },
  {
    keywords: ['loan conditions', 'condições do empréstimo'],
    text: 'Our loan conditions include competitive interest rates, flexible repayment terms, and quick approval processes.'
  },
  {
    keywords: ['transfer money', 'transferência de dinheiro', 'enviar dinheiro'],
    text: 'You can easily transfer money to another account using our online banking platform. Just log in to your account and navigate to the "Transfer" section.'
  },
  {
    keywords: ['mobile banking', 'internet banking', 'banco online'],
    text: 'Our mobile banking app allows you to manage your finances on the go. Download our app from the App Store or Google Play Store.'
  },
  {
    keywords: ['lost card', 'cartão perdido', 'report stolen card'],
    text: 'If your card is lost or stolen, please report it immediately to our customer support at [phone number] or visit your nearest branch.'
  },
  {
    keywords: ['exchange rates', 'taxas de câmbio', 'currency rates'],
    text: 'Our exchange rates are updated daily and can be found on our website or mobile banking app.'
  },
  {
    keywords: ['mortgage', 'hipoteca', 'home loan'],
    text: 'Looking to buy a home? Our mortgage options offer competitive rates and tailored solutions to help you achieve your dream home.'
  },
  {
    keywords: ['savings account', 'conta poupança'],
    text: 'Open a savings account with us and start saving for your future. Our savings accounts offer competitive interest rates.'
  },
  {
    keywords: ['crédito', 'cartão de crédito'],
    text: 'Oferecemos uma variedade de opções de crédito, incluindo cartões de crédito e empréstimos pessoais. Sinta-se à vontade para explorar nossas opções de crédito em nosso site.'
  },
  {
    keywords: ['condições do empréstimo', 'taxas de juros do empréstimo'],
    text: 'As condições do nosso empréstimo incluem taxas de juros competitivas, termos de pagamento flexíveis e processos de aprovação rápidos.'
  },
  {
    keywords: ['transferência de dinheiro', 'enviar dinheiro'],
    text: 'Você pode facilmente transferir dinheiro para outra conta usando nossa plataforma de banco online. Basta fazer login em sua conta e acessar a seção "Transferências".'
  },
  {
    keywords: ['banco online', 'aplicativo móvel', 'internet banking'],
    text: 'Nosso aplicativo de banco móvel permite que você gerencie suas finanças em qualquer lugar. Baixe nosso aplicativo na App Store ou Google Play Store.'
  },
  {
    keywords: ['cartão perdido', 'reportar cartão roubado'],
    text: 'Se o seu cartão foi perdido ou roubado, por favor, reporte imediatamente para o nosso suporte ao cliente no [número de telefone] ou visite a agência mais próxima.'
  },
  {
    keywords: ['taxas de câmbio', 'cotações de moedas'],
    text: 'Nossas taxas de câmbio são atualizadas diariamente e podem ser encontradas em nosso site ou aplicativo de banco móvel.'
  },
  {
    keywords: ['hipoteca', 'empréstimo imobiliário'],
    text: 'Pensando em comprar uma casa? Nossas opções de hipoteca oferecem taxas competitivas e soluções personalizadas para ajudá-lo a realizar o sonho da casa própria.'
  },
  {
    keywords: ['conta poupança', 'poupança'],
    text: 'Abra uma conta poupança conosco e comece a economizar para o futuro. Nossas contas poupança oferecem taxas de juros competitivas.'
  },
];

module.exports = responses;
