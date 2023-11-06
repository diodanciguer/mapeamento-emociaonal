const perguntas = [
    {
        categoria: "Consciência Emocional",
        pergunta: "1. Para mim, é difícil entender com clareza aquilo que sinto.",
    },
    {
        categoria: "Auto Confiança",
        pergunta: "2. Eu me sinto seguro(a) de mim mesmo(a) na maioria das situações.",
    },
    {
        categoria: "Empatia e Compaixão",
        pergunta: "3. Eu evito machucar os sentimentos de outras pessoas.",
    },
    {
        categoria: "Assertividade",
        pergunta: "4. Nos últimos anos, tive poucas conquistas na vida."
    },
    {
        categoria: "Resolução de Problemas",
        pergunta: "5. Eu prefiro um trabalho onde alguém me diga praticamente tudo o que preciso fazer."
    },
    {
        categoria: "Otimismo",
        pergunta: "6. Eu tento aproveitar ao máximo as coisas que trazem satisfação em minha vida"
    },
    {
        categoria: "Relacionamento",
        pergunta: "7. Parece que eu preciso mais das outras pessoas do que elas precisam de mim."
    },
    {
        categoria: "Resolução de Problemas",
        pergunta: "8. Para superar dificuldades, minha abordagem é dar um passo de cada vez."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "9. Quando estou enfrentando um problema, a primeira coisa que faço é parar para pensar."
    },
    {
        categoria: "Assertividade",
        pergunta: "10. Para mim é difícil dizer 'não' quando quero."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "11. Para mim é relativamente fácil dizer aos outros aquilo que penso."
    },
    {
        categoria: "Otimismo",
        pergunta: "12. Nas situações da vida, eu geralmente espero pelo melhor."
    },
    {
        categoria: "Otimismo",
        pergunta: "13. Eu sou otimista em relação à maioria das coisas que faço."
    },
    {
        categoria: "Otimismo",
        pergunta: "14. Eu sou uma pessoa consideravelmente alegre."
    },    
    {
        categoria: "Relacionamento",
        pergunta: "15. Meus relacionamentos próximos significam muito para mim e para meus amigos."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "16. Para mim é difícil compartilhar meus sentimentos profundos com outras pessoas."
    },
    {
        categoria: "Resolução de Problemas",
        pergunta: "17. Eu sei como lidar com os problemas que me incomodam."
    },
    {
        categoria: "Empatia e Compaixão",
        pergunta: "18. Eu sou sensível aos sentimentos de outras pessoas."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "19. Falta autoconfiança em mim."
    },
    {
        categoria: "Tolerância ao Estresse",
        pergunta: "20. Eu tenho um temperamento explosivo."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "21. Eu tento tornar minha vida o mais significativa possível."
    },
    {
        categoria: "Empatia e Compaixão",
        pergunta: "22. Para mim é difícil ver outras pessoas sofrendo."
    },
    {
        categoria: "Relacionamento",
        pergunta: "23. Eu tenho a tendência de me apegar excessivamente aos outros."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "24. Minha impulsividade cria problemas em minha vida."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "25. Eu tenho a tendência de me desligar e perder contato com o que está acontecendo ao meu redor."
    },
    {
        categoria: "Otimismo",
        pergunta: "26. Eu geralmente acredito que tudo ficará bem, apesar dos contratempos que acontecem de vez em quando."
    },
    {
        categoria: "Consciência Emocional",
        pergunta: "27. Tenho uma boa compreensão e clareza sobre minha própria vida emocional."
    },
    {
        categoria: "Resolução de Problemas",
        pergunta: "28. Para mim é fácil me ajustar a novas situações e condições."
    },
    {
        categoria: "Relacionamento",
        pergunta: "29. Eu não consigo compreender como as outras pessoas se sentem."
    },
    {
        categoria: "Flexibilidade",
        pergunta: "30. Para mim, é difícil mudar o meu jeito de ser."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "31. Quando discordo de alguém, sou capaz de dizer isso à pessoa."
    },
    {
        categoria: "Empatia e Compaixão",
        pergunta: "32. Eu me preocupo com o que acontece com outras pessoas."
    },
    {
        categoria: "Alinhamento com a Realidade",
        pergunta: "33. Gosto de ter uma visão geral de um problema antes de tentar resolvê-lo."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "34. Eu tenho a tendência de ficar ansioso."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "35. As pessoas não entendem meu jeito de pensar."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "36. Eu sei como manter a calma em situações difíceis."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "37. Mesmo quando tenho clareza do que estou sentindo, tenho dificuldade de expressar isso para outras pessoas."
    },
    {
        categoria: "Resolução de Problemas",
        pergunta: "38. Sou mais um seguidor do que um líder."
    },
    {
        categoria: "Resolução de Problemas",
        pergunta: "39. Eu tento dar continuidade e desenvolver as coisas que gosto de fazer em minha vida."
    },
    {
        categoria: "Alinhamento com a Realidade",
        pergunta: "40. Eu tento ver as coisas como elas realmente são sem fantasiar ou sonhar acordado sobre elas."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "41. Para mim, é difícil me aceitar do jeito que eu sou."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "42. Eu sou impaciente."
    },
    {
        categoria: "Alinhamento com a Realidade",
        pergunta: "43. Eu não costumo ficar tão empolgado com as coisas que interessam."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "44. Quando começo a falar, é difícil parar."
    },
    {
        categoria: "Consciência Emocional",
        pergunta: "45. Não consigo entender com clareza as coisas que sinto."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "46. Não sei explicar com clareza as coisas que sinto."
    },
    {
        categoria: "Flexibilidade",
        pergunta: "47. Para mim, seria difícil me adaptar se eu fosse forçado a mudar a vida que levo."
    },
    {
        categoria: "Relacionamento",
        pergunta: "48. Eu tenho boas relações com as outras pessoas."
    },
    {
        categoria: "Assertividade",
        pergunta: "49. Quando sinto raiva em situações que envolvem outras pessoas, sou capaz de comunicar isso a elas."
    },
    {
        categoria: "Tolerância ao Estresse",
        pergunta: "50. Eu consigo lidar com o estresse sem ficar muito nervoso."
    },
    {
        categoria: "Assertividade",
        pergunta: "51. Para mim é difícil defender os meus desejos e direitos perante outras pessoas."
    },
    {
        categoria: "Consciência Emocional",
        pergunta: "52. Para mim, é difícil descrever minhas emoções e sentimentos."
    },
    {
        categoria: "Consciência Emocional",
        pergunta: "53. Eu tenho um bom respeito por mim mesmo."
    },
    {
        categoria: "Consciência Emocional",
        pergunta: "54. Sou uma pessoa consciente das emoções que sinto."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "55. Estou feliz com minha aparência."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "56. Se eu pudesse sair impune ao quebrar a lei em certas situações, eu o faria."
    },
    {
        categoria: "Relacionamento",
        pergunta: "57. Eu não mantenho contato com amigos."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "58. Estou feliz com o tipo de pessoa que sou."
    },
    {
        categoria: "Resolução de Problemas",
        pergunta: "59. Quando tento resolver um problema, eu olho para cada possibilidade, e só então decido o melhor caminho."
    },
    {
        categoria: "Tolerância ao Estresse",
        pergunta: "60. Eu não lido bem com as coisas quando estou sob estresse."
    },
    {
        categoria: "Empatia e Compaixão",
        pergunta: "61. Sou bom/boa em compreender como as outras pessoas estão se sentindo."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "62. Em discussões, as pessoas dizem para eu abaixar a minha voz."
    },
    {
        categoria: "Empatia e Compaixão",
        pergunta: "63. Eu pararia e ajudaria uma criança chorando a encontrar seus pais, mesmo que eu estivesse atrasado para chegar em outro lugar."
    },
    {
        categoria: "Empatia e Compaixão",
        pergunta: "64. Eu gosto de ajudar outras pessoas."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "65. Para mim é difícil manter as coisas na perspectiva correta."
    },
    {
        categoria: "Flexibilidade",
        pergunta: "66. Eu sou capaz de mudar velhos hábitos."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "67. Eu não consigo demonstrar afeto."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "68. Eu realmente não sei no que sou bom/boa."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "69. Para mim, sinto que é difícil controlar minha ansiedade."
    },
    {
        categoria: "Flexibilidade",
        pergunta: "70. Para mim é difícil começar novas coisas."
    },
    {
        categoria: "Relacionamento",
        pergunta: "71. As outras pessoas costumam achar difícil depender de mim para as coisas."
    },
    {
        categoria: "Relacionamento",
        pergunta: "72. Meus amigos se sentem confortáveis em me contar coisas íntimas a respeito deles mesmos."
    },
    {
        categoria: "Resolução de Problemas",
        pergunta: "73. Para mim, é difícil decidir a melhor solução quando estou resolvendo problemas."
    },
    {
        categoria: "Relacionamento",
        pergunta: "74. Eu não me dou bem com os outros."
    },
    {        
        categoria: "Consciência Emocional",
        pergunta: "75. Eu estou em contato e tenho intimidade com as minhas emoções."
    },
    {
        categoria: "Relacionamento",
        pergunta: "76. As pessoas acham que sou sociável."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "77. Antes de começar algo novo, eu geralmente sinto que fracassarei."
    },
    {
        categoria: "Relacionamento",
        pergunta: "78. Para mim é fácil fazer amigos."
    },
    {
        categoria: "Flexibilidade",
        pergunta: "79. Para mim geralmente é difícil fazer mudanças no meu dia a dia."
    },
    {
        categoria: "Resolução de Problemas",
        pergunta: "80. Para mim é difícil tomar decisões sozinho."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "81. Eu geralmente fico preso, paralisado ou 'empacado' quando estou tentando pensar em diferentes maneiras de resolver problemas."
    },
    {
        categoria: "Alinhamento com a Realidade",
        pergunta: "82. Quando enfrento uma situação difícil, gosto de coletar todas as informações possíveis sobre ela."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "83. Para mim, é difícil expressar meus sentimentos íntimos."
    },
    {
        categoria: "Consciência Emocional",
        pergunta: "84. Minha vida emocional é um mistério para mim."
    },
    {
        categoria: "Assertividade",
        pergunta: "85. Os outros acham que eu sou uma pessoa pouco assertiva."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "86. Eu não me sinto bem comigo mesmo."
    },
    {
        categoria: "Consciência Emocional",
        pergunta: "87. Em minha vida, eu tive experiências estranhas que não são possíveis de explicar."
    },
    {
        categoria: "Alinhamento com a Realidade",
        pergunta: "88. Eu consigo facilmente parar de sonhar acordado e me sintonizar com a realidade concreta das situações."
    },
    {
        categoria: "Realização Pessoal",
        pergunta: "89. Eu não obtenho satisfação naquilo que faço."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "90. Eu tenho tendência a explodir de raiva facilmente."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "91. Eu acredito na minha capacidade de lidar com a maioria dos problemas desagradáveis e preocupantes que enfrento."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "92. Em geral, tenho motivação para continuar, mesmo quando as coisas ficam difíceis."
    },
    {
        categoria: "Tolerância ao Estresse",
        pergunta: "93. Para mim, é difícil enfrentar situações desconfortáveis e/ou desagradáveis."
    },
    {
        categoria: "Otimismo",
        pergunta: "94. Sou uma pessoa divertida de se conviver."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "95. Olhando para meus pontos positivos e negativos, eu me sinto bem comigo mesmo."
    },
    {
        categoria: "Responsabilidade Social",
        pergunta: "96. Eu acredito que é importante ser um cidadão que respeita a lei."
    },
    {
        categoria: "Empatia e Compaixão",
        pergunta: "97. Eu não me sinto incomodado em tirar vantagem de outras pessoas, especialmente se elas merecerem."
    },
    {
        categoria: "Flexibilidade",
        pergunta: "98. Para mim é difícil mudar minha opinião sobre as coisas."
    },
    {
        categoria: "Flexibilidade",
        pergunta: "99. De maneira geral, para mim, é difícil me adaptar às situações."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "100. Para mim, é relativamente fácil expressar minhas emoções e sentimentos."
    },
    {
        categoria: "Consciência Emocional",
        pergunta: "101. Quando trabalho com outras pessoas, tenho a tendência de confiar mais nas ideias delas do que nas minhas próprias ideias."
    },
    {
        categoria: "Consciência Emocional",
        pergunta: "102. Mesmo quando não estou me sentindo bem, tenho clareza daquilo que estou sentindo e do que está acontecendo comigo."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "103. Eu acredito que tenho a capacidade de superar situações difíceis."
    },
    {
        categoria: "Resolução de Problemas",
        pergunta: "104. Ao lidar com situações que surgem, eu tento pensar no máximo possível de abordagens diferentes para lidar com elas."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "105. Eu tendo a exagerar as coisas."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "106. Eu realmente obtenho satisfação nas coisas que me interessam na vida."
    },
    {
        categoria: "Consciência Emocional",
        pergunta: "107. Eu me deixo levar pela minha imaginação e fantasias."
    },
    {
        categoria: "Empatia e Compaixão",
        pergunta: "108. Eu sou capaz de respeitar as outras pessoas."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "109. Controlar a minha raiva é um problema em minha vida."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "110. Tenho facilidade para colocar aquilo que sinto em palavras."
    },
    {
        categoria: "Auto Confiança",
        pergunta: "111. Eu me sinto confortável com meu corpo."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "112. Eu sou impulsivo."
    },
    {
        categoria: "Realização Pessoal",
        pergunta: "113. Eu não tenho uma ideia clara daquilo que desejo fazer em minha vida."
    },
    {
        categoria: "Controle de Impulsos",
        pergunta: "114. Eu tenho fortes impulsos que são difíceis de controlar."
    },
    {
        categoria: "Expressão Emocional",
        pergunta: "115. Eu não consigo expressar minhas ideias para outras pessoas."
    },
    {
        categoria: "Independência",
        pergunta: "116. Eu prefiro que as outras pessoas tomem decisões por mim."
    },
    
    // Adicione mais perguntas aqui
];