const respostas = {
    "1. Para mim, é difícil entender com clareza aquilo que sinto.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "2. Eu me sinto seguro(a) de mim mesmo(a) na maioria das situações.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "3. Eu evito machucar os sentimentos de outras pessoas.": {
        "unca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "4. Nos últimos anos, tive poucas conquistas na vida.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "5. Eu prefiro um trabalho onde alguém me diga praticamente tudo o que preciso fazer.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },

    "6. Eu tento aproveitar ao máximo as coisas que trazem satisfação em minha vida": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "7. Parece que eu preciso mais das outras pessoas do que elas precisam de mim.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "8. Para superar dificuldades, minha abordagem é dar um passo de cada vez.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "9. Quando estou enfrentando um problema, a primeira coisa que faço é parar para pensar.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "10. Para mim é difícil dizer 'não' quando quero.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "11. Para mim é relativamente fácil dizer aos outros aquilo que penso.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "12. Nas situações da vida, eu geralmente espero pelo melhor.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "13. Eu sou otimista em relação à maioria das coisas que faço.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "14. Eu sou uma pessoa consideravelmente alegre.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "15. Meus relacionamentos próximos significam muito para mim e para meus amigos.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "16. Para mim é difícil compartilhar meus sentimentos profundos com outras pessoas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "17. Eu sei como lidar com os problemas que me incomodam.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "18. Eu sou sensível aos sentimentos de outras pessoas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "19. Falta autoconfiança em mim.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "20. Eu tenho um temperamento explosivo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "21. Eu tento tornar minha vida o mais significativa possível.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "22. Para mim é difícil ver outras pessoas sofrendo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "23. Eu tenho a tendência de me apegar excessivamente aos outros.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "24. Minha impulsividade cria problemas em minha vida.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "25. Eu tenho a tendência de me desligar e perder contato com o que está acontecendo ao meu redor.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "26. Eu geralmente acredito que tudo ficará bem, apesar dos contratempos que acontecem de vez em quando.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "27. Tenho uma boa compreensão e clareza sobre minha própria vida emocional.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "28. Para mim é fácil me ajustar a novas situações e condições.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "29. Eu não consigo compreender como as outras pessoas se sentem.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "30. Para mim, é difícil mudar o meu jeito de ser.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "31. Quando discordo de alguém, sou capaz de dizer isso à pessoa.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "32. Eu me preocupo com o que acontece com outras pessoas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "33. Gosto de ter uma visão geral de um problema antes de tentar resolvê-lo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "34. Eu tenho a tendência de ficar ansioso.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "35. As pessoas não entendem meu jeito de pensar.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "36. Eu sei como manter a calma em situações difíceis.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "37. Mesmo quando tenho clareza do que estou sentindo, tenho dificuldade de expressar isso para outras pessoas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "38. Sou mais um seguidor do que um líder.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "39. Eu tento dar continuidade e desenvolver as coisas que gosto de fazer em minha vida.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "40. Eu tento ver as coisas como elas realmente são sem fantasiar ou sonhar acordado sobre elas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "41. Para mim, é difícil me aceitar do jeito que eu sou.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "42. Eu sou impaciente.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "43. Eu não costumo ficar tão empolgado com as coisas que interessam.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "44. Quando começo a falar, é difícil parar.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "45. Não consigo entender com clareza as coisas que sinto.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "46. Não sei explicar com clareza as coisas que sinto.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "47. Para mim, seria difícil me adaptar se eu fosse forçado a mudar a vida que levo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "48. Eu tenho boas relações com as outras pessoas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "49. Quando sinto raiva em situações que envolvem outras pessoas, sou capaz de comunicar isso a elas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "50. Eu consigo lidar com o estresse sem ficar muito nervoso.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "51. Para mim é difícil defender os meus desejos e direitos perante outras pessoas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "52. Para mim, é difícil descrever minhas emoções e sentimentos.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "53. Eu tenho um bom respeito por mim mesmo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "54. Sou uma pessoa consciente das emoções que sinto.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "55. Estou feliz com minha aparência.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "56. Se eu pudesse sair impune ao quebrar a lei em certas situações, eu o faria.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "57. Eu não mantenho contato com amigos.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "58. Estou feliz com o tipo de pessoa que sou.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "59. Quando tento resolver um problema, eu olho para cada possibilidade, e só então decido o melhor caminho.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "60. Eu não lido bem com as coisas quando estou sob estresse.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "61. Sou bom/boa em compreender como as outras pessoas estão se sentindo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "62. Em discussões, as pessoas dizem para eu abaixar a minha voz.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "63. Eu pararia e ajudaria uma criança chorando a encontrar seus pais, mesmo que eu estivesse atrasado para chegar em outro lugar.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "64. Eu gosto de ajudar outras pessoas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "65. Para mim é difícil manter as coisas na perspectiva correta.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "66. Eu sou capaz de mudar velhos hábitos.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "67. Eu não consigo demonstrar afeto.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "68. Eu realmente não sei no que sou bom/boa.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "69. Para mim, sinto que é difícil controlar minha ansiedade.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "70. Para mim é difícil começar novas coisas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "71. As outras pessoas costumam achar difícil depender de mim para as coisas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "72. Meus amigos se sentem confortáveis em me contar coisas íntimas a respeito deles mesmos.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "73. Para mim, é difícil decidir a melhor solução quando estou resolvendo problemas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "74. Eu não me dou bem com os outros.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "75. Eu estou em contato e tenho intimidade com as minhas emoções.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "76. As pessoas acham que sou sociável.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "77. Antes de começar algo novo, eu geralmente sinto que fracassarei.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "78. Para mim é fácil fazer amigos.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "79. Para mim geralmente é difícil fazer mudanças no meu dia a dia.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "80. Para mim é difícil tomar decisões sozinho.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "81. Eu geralmente fico preso, paralisado ou 'empacado' quando estou tentando pensar em diferentes maneiras de resolver problemas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "82. Quando enfrento uma situação difícil, gosto de coletar todas as informações possíveis sobre ela.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "83. Para mim, é difícil expressar meus sentimentos íntimos.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "84. Minha vida emocional é um mistério para mim.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "85. Os outros acham que eu sou uma pessoa pouco assertiva.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "86. Eu não me sinto bem comigo mesmo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "87. Em minha vida, eu tive experiências estranhas que não são possíveis de explicar.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "88. Eu consigo facilmente parar de sonhar acordado e me sintonizar com a realidade concreta das situações.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "89. Eu não obtenho satisfação naquilo que faço.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "90. Eu tenho tendência a explodir de raiva facilmente.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "91. Eu acredito na minha capacidade de lidar com a maioria dos problemas desagradáveis e preocupantes que enfrento.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "92. Em geral, tenho motivação para continuar, mesmo quando as coisas ficam difíceis.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "93. Para mim, é difícil enfrentar situações desconfortáveis e/ou desagradáveis.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "94. Sou uma pessoa divertida de se conviver.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "95. Olhando para meus pontos positivos e negativos, eu me sinto bem comigo mesmo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "96. Eu acredito que é importante ser um cidadão que respeita a lei.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "97. Eu não me sinto incomodado em tirar vantagem de outras pessoas, especialmente se elas merecerem.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "98. Para mim é difícil mudar minha opinião sobre as coisas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "99. De maneira geral, para mim, é difícil me adaptar às situações.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "100. Para mim, é relativamente fácil expressar minhas emoções e sentimentos.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "101. Quando trabalho com outras pessoas, tenho a tendência de confiar mais nas ideias delas do que nas minhas próprias ideias.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "102. Mesmo quando não estou me sentindo bem, tenho clareza daquilo que estou sentindo e do que está acontecendo comigo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "103. Eu acredito que tenho a capacidade de superar situações difíceis.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "104. Ao lidar com situações que surgem, eu tento pensar no máximo possível de abordagens diferentes para lidar com elas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "105. Eu tendo a exagerar as coisas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "106. Eu realmente obtenho satisfação nas coisas que me interessam na vida.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "107. Eu me deixo levar pela minha imaginação e fantasias.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "108. Eu sou capaz de respeitar as outras pessoas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "109. Controlar a minha raiva é um problema em minha vida.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "110. Tenho facilidade para colocar aquilo que sinto em palavras.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "111. Eu me sinto confortável com meu corpo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "112. Eu sou impulsivo.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "113. Eu não tenho uma ideia clara daquilo que desejo fazer em minha vida.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "114. Eu tenho fortes impulsos que são difíceis de controlar.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "115. Eu não consigo expressar minhas ideias para outras pessoas.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },
    "116. Eu prefiro que as outras pessoas tomem decisões por mim.": {
        "Nunca ou muito raramente sou assim": 0,
        "Raramente sou assim": 1,
        "Às vezes sou assim": 2,
        "Muitas vezes sou assim": 3,
        "Sempre ou quase sempre sou assim": 4
    },

    // Adicione mais respostas aqui
};
