document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const perguntasContainer = document.getElementById("perguntas");
    const calcularBotao = document.getElementById("calcular");
    const resultadoParagrafo = document.getElementById("resultado");

    // Crie um objeto para rastrear a pontuação por categoria
    const pontuacaoPorCategoria = {};

    // Inicialize as categorias
    perguntas.forEach(function (pergunta) {
        pontuacaoPorCategoria[pergunta.categoria] = 0;
    });

    // Função para criar opções de rádio com base nas perguntas e respostas
    function criarOpcoesRadio(pergunta) {
        const perguntaDiv = document.createElement("div");
        perguntaDiv.className = "pergunta";

        const perguntaTitulo = document.createElement("h3");
        perguntaTitulo.textContent = pergunta.pergunta;

        const respostasDiv = document.createElement("div");
        respostasDiv.className = "respostas";

        for (const resposta in respostas[pergunta.pergunta]) {
            const respostaDiv = document.createElement("div");
            respostaDiv.className = "resposta";

            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = pergunta.pergunta;
            radioInput.value = resposta;
            radioInput.required = true;

            const respostaLabel = document.createElement("label");
            respostaLabel.textContent = resposta;

            respostaDiv.appendChild(radioInput);
            respostaDiv.appendChild(respostaLabel);

            respostasDiv.appendChild(respostaDiv);
        }

        perguntaDiv.appendChild(perguntaTitulo);
        perguntaDiv.appendChild(respostasDiv);
        perguntasContainer.appendChild(perguntaDiv);
    }

    // Carregar perguntas
    perguntas.forEach(criarOpcoesRadio);

    // Função para calcular a soma das respostas em uma categoria específica
    function calcularSomaCategoria(categoria) {
        let soma = 0;
        perguntas.forEach(function (pergunta) {
            if (pergunta.categoria === categoria) {
                const respostaSelecionada = document.querySelector(`input[name="${pergunta.pergunta}"]:checked`);
                if (respostaSelecionada) {
                    soma += respostas[pergunta.pergunta][respostaSelecionada.value];
                }
            }
        });
        return soma;
    }

    // Calcular a pontuação por categoria com base nas respostas
    calcularBotao.addEventListener("click", function () {
        // Calcular as somas individuais para Auto Percepção
        const somaAutoconfianca = calcularSomaCategoria("Auto Confiança");
        const somaConscienciaEmocional = calcularSomaCategoria("Consciência Emocional");
        const somaRealizacaoPessoal = calcularSomaCategoria("Realização Pessoal");

        // Calcular a soma das categorias para "Auto Percepção"
        const somaAutoPercepcao = somaAutoconfianca + somaConscienciaEmocional + somaRealizacaoPessoal;

        // Calcular as somas individuais para Autoexpressão
        const somaAssertividade = calcularSomaCategoria("Assertividade");
        const somaExpressaoEmocional = calcularSomaCategoria("Expressão Emocional");
        const somaIndependencia = calcularSomaCategoria("Independência");

        // Calcular a soma das categorias para "Autoexpressão"
        const somaAutoexpressao = somaAssertividade + somaExpressaoEmocional + somaIndependencia;

        // Calcular as somas individuais para Relações Interpessoais
        const somaEmpatiaECompaixao = calcularSomaCategoria("Empatia e Compaixão");
        const somaRelacionamentos = calcularSomaCategoria("Relacionamento");
        const somaResponsabilidadeSocial = calcularSomaCategoria("Responsabilidade Social");

        // Calcular a soma das categorias para "Relações Interpessoais"
        const somaRelacoesInterpessoais = somaEmpatiaECompaixao + somaRelacionamentos + somaResponsabilidadeSocial;

        // Calcular as somas individuais para Tomada de Decisão
        const somaAlinhamentoComRealidade = calcularSomaCategoria("Alinhamento com a Realidade");
        const somaControleDeImpulsos = calcularSomaCategoria("Controle de Impulsos");
        const somaResolucaoDeProblemas = calcularSomaCategoria("Resolução de Problemas");

        // Calcular a soma das categorias para "Tomada de Decisão"
        const somaTomadaDeDecisao = somaAlinhamentoComRealidade + somaControleDeImpulsos + somaResolucaoDeProblemas;

        // Calcular as somas individuais para Gerenciamento de Emoções
        const somaFlexibilidade = calcularSomaCategoria("Flexibilidade");
        const somaOtimismo = calcularSomaCategoria("Otimismo");
        const somaToleranciaAoEstresse = calcularSomaCategoria("Tolerância ao Estresse");

        // Calcular a soma das categorias para "Gerenciamento de Emoções"
        const somaGerenciamentoDeEmocoes = somaFlexibilidade + somaOtimismo + somaToleranciaAoEstresse;

        // Exiba as pontuações das categorias
    let resultadoHTML = `
    <div class="categoria auto-percepcao">Auto Percepção: ${somaAutoPercepcao}</div>
    <div class="categoria autoexpressao">Autoexpressão: ${somaAutoexpressao}</div>
    <div class="categoria relacoes-interpessoais">Relações Interpessoais: ${somaRelacoesInterpessoais}</div>
    <div class="categoria tomada-de-decisao">Tomada de Decisão: ${somaTomadaDeDecisao}</div>
    <div class="categoria gerenciamento-de-emocoes">Gerenciamento de Emoções: ${somaGerenciamentoDeEmocoes}</div>
`;


resultadoParagrafo.innerHTML = resultadoHTML;
// Função para determinar o grau com base na pontuação
function determinarGrau(pontuacao) {
    if (pontuacao >= 0 && pontuacao <= 2) {
        return "muito baixo";
    } else if (pontuacao > 2 && pontuacao <= 4) {
        return "baixo";
    } else if (pontuacao > 4 && pontuacao <= 6) {
        return "médio";
    } else if (pontuacao > 6 && pontuacao <= 8) {
        return "alto";
    } else {
        return "muito alto";
    }
}

// Função para mostrar os resultados das dimensões
function mostrarResultadosDimensoes() {
    const dimensoes = [
        { nome: "Auto Percepção", pontuacao: somaAutoPercepcao },
        { nome: "Autoexpressão", pontuacao: somaAutoexpressao },
        { nome: "Relações Interpessoais", pontuacao: somaRelacoesInterpessoais },
        { nome: "Tomada de Decisão", pontuacao: somaTomadaDeDecisao },
        { nome: "Gerenciamento de Emoções", pontuacao: somaGerenciamentoDeEmocoes }
    ];

    dimensoes.forEach(function (dimensao) {
        const grau = determinarGrau(dimensao.pontuacao);
        resultadoParagrafo.innerHTML += `
            <h2>${dimensao.nome}</h2>
            <p>Seus resultados indicam um grau ${grau} na dimensão ${dimensao.nome}. Em uma escala de zero a 10, você estaria entre ${Math.floor(dimensao.pontuacao)} e ${Math.ceil(dimensao.pontuacao)}.</p>
        `;
    });
}

mostrarResultadosDimensoes(); // Chame a função para mostrar os resultados das dimensões
});
});
