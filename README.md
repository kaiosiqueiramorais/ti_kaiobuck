# ti_kaiobuck
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Radar da Vida Escolar</title>
<style>
  body {
    background-color: #e2dddd;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  header {
    background-color: #104206;
    padding: 20px;
    text-align: center;
  }
  header h1 { 
    color: #ffffff; 
    margin: 0;
  }
  main { 
    padding: 20px; 
    max-width: 800px;
    margin: 0 auto;
  }
  .cartao {
    background-color: #f1efef;
    padding: 15px;
    border-left: 5px solid #104206;
    margin-bottom: 15px;
    border-radius: 10px;
  }
  .cartao h2 {
    color: #104206;
    margin-top: 0;
  }
  .contagem {
    font-weight: bold;
    color: #104206;
    font-size: 20px;
  }
  .apoiar {
    background-color: #104206;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 544px;
    cursor: pointer;
  }
  .apoiar:hover { 
    background-color: #0d2b21; 
  }
  .remover {
    background-color: #868685;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 100px;
    cursor: pointer;
    margin-left: 10px;
  }
  .remover:hover { 
    background-color: #e75e3c; 
  }
</style>
</head>
<body>

<header>
  <h1>Radar da Vida Escolar</h1>
</header>

<main>
  <div class="cartao">
    <h2>Bebedouro do corredor</h2>
    <p>O bebedouro vaza desde março e forma poça no piso.</p>
    <p>Apoios: <span class="contagem">0</span></p>
    <button class="apoiar">Apoiar</button>
    <button class="remover">Remover apoio</button>
  </div>

  <div class="cartao">
    <h2>Fila da cantina</h2>
    <p>A fila toma quase todo o intervalo dos alunos.</p>
    <p>Apoios: <span class="contagem">0</span></p>
    <button class="apoiar">Apoiar</button>
    <button class="remover">Remover apoio</button>
  </div>

  <div class="cartao">
    <h2>Iluminação da quadra</h2>
    <p>Metade das lâmpadas está queimada há dois meses.</p>
    <p>Apoios: <span class="contagem">0</span></p>
    <button class="apoiar">Apoiar</button>
    <button class="remover">Remover apoio</button>
  </div>
</main>

<script>
  
  document.querySelectorAll('.apoiar').forEach(function(botao) {
    botao.addEventListener('click', function() {
      let cartao = botao.parentElement;
      let display = cartao.querySelector('.contagem');
      let valor = Number(display.textContent);
      display.textContent = valor + 1;
    });
  });

 
  document.querySelectorAll('.remover').forEach(function(botao) {
    botao.addEventListener('click', function() {
      let cartao = botao.parentElement;
      let display = cartao.querySelector('.contagem');
      let valor = Number(display.textContent);

      if (valor > 0) {
        display.textContent = valor - 1;
      }
    });
  });
</script>

</body>
</html>