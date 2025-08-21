// Seleciona todos os botões de navegação
const avanca = document.querySelectorAll('.btn-proximo');

// Adiciona o evento de clique para cada botão
avanca.forEach(button => {
    button.addEventListener('click', function() {
        // Identifica o passo atual
        const atual = document.querySelector('.ativo');
        
        // Verifica se há um passo ativo
        if (atual) {
            // Identifica o próximo passo com base no atributo data-proximo
            const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
            const proximoPasso = document.getElementById(proximoPassoId);
            
            // Se o próximo passo existir, remove a classe 'ativo' do passo atual
            // e adiciona a classe 'ativo' no próximo passo
            if (proximoPasso) {
                atual.classList.remove('ativo');
                proximoPasso.classList.add('ativo');
            } else {
                console.error('Próximo passo não encontrado: ', proximoPassoId);
            }
        } else {
            console.error('Passo atual não encontrado.');
        }
    });
});
