document.addEventListener('DOMContentLoaded', function() {
  // Pega o botão e o input
  const copyText = document.getElementById('copyText');
  const copyButton = document.getElementById('copyButton');

  // Adiciona o evento de clique ao botão
  copyButton.addEventListener('click', function() {
    // Seleciona o texto do input
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto selecionado
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'sucesso' : 'falha';
      console.log('Cópia com ' + msg);
    } catch (err) {
      console.log('Erro ao copiar', err);
    }

    // Deseleciona o texto (opcional, dependendo do UX desejado)
    copyText.blur();
  });
});
