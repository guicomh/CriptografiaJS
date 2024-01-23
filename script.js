function Cripto() {
    var textoOriginal = document.getElementById('texto').value;
    var chaveSelecionada = document.getElementById('opcao').value;
    var resultadoCriptografia = '';

    if (chaveSelecionada === 'q') {
        resultadoCriptografia = btoa(textoOriginal);
    } else if (chaveSelecionada === 'w') {
        resultadoCriptografia = criptografarComNumeros(textoOriginal);
    }

    document.getElementById('resultado').value = resultadoCriptografia;
}

function criptografarComNumeros(texto) {
    var resultado = '';
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);
        resultado += charCode + ' ';
    }
    return resultado.trim(); 
}
