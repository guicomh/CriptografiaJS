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

function Descripto() {
    var textoCriptografado = document.getElementById('resultado').value;
    var chaveSelecionada = document.getElementById('opcao').value;
    var resultadoDescriptografia = '';

    if (chaveSelecionada === 'q') {
        resultadoDescriptografia = atob(textoCriptografado);
    } else if (chaveSelecionada === 'w') {
        resultadoDescriptografia = descriptografarComNumeros(textoCriptografado);
    }

    document.getElementById('resultado').value = resultadoDescriptografia;
}

function criptografarComNumeros(texto) {
    var resultado = '';
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);
        resultado += charCode + ' ';
    }
    return resultado.trim(); 
}

function descriptografarComNumeros(textoCriptografado) {
    var partes = textoCriptografado.split(' ');
    var resultado = '';
    for (var i = 0; i < partes.length; i++) {
        var charCode = parseInt(partes[i]);
        resultado += String.fromCharCode(charCode);
    }
    return resultado;
}
