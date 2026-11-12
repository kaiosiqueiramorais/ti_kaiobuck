<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Radar da Vida Escolar</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #FAFAFA;
      color: #222222;
      margin: 0;
      padding: 16px;
    }

    header {
      background-color: #1F4E79;
      color: #FFFFFF;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 16px;
    }

    header h1 {
      margin: 0 0 8px 0;
    }

    header p {
      margin: 0;
    }

    .cartao {
      background-color: #FFFFFF;
      border: 2px solid #2E75B6;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
    }

    .apoiar {
      background-color: #1F4E79;
      color: #FFFFFF;
      border: none;
      padding: 10px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }

    .apoiar.ativo {
      background-color: #2E7D32;
    }

    /* Correcao 2: foco visivel de proposito */
    .apoiar:focus {
      outline: 3px solid #C00000;
      outline-offset: 2px;
    }
  </style>
</head>
<body>
  <!-- Correcao 1: titulo que explica -->
  <header>
    <h1>Radar da Vida Escolar</h1>
    <p>Aponte um problema da escola e apoie os que mais te atrapalham.</p>
  </header>

  <div class="cartao">
    <p>Bebedouro do 2º andar vazando</p>
    <!-- Correcao 3: estado dito por escrito -->
    <button class="apoiar">Apoiar (0)</button>
  </div>

  <script>
    const botao = document.querySelector(".apoiar");
    let apoiado = false;
    let totalApoios = 0;

    botao.addEventListener("click", function () {
      apoiado = !apoiado;
      totalApoios = apoiado ? totalApoios + 1 : totalApoios - 1;

      botao.classList.toggle("ativo", apoiado);
      botao.textContent = apoiado
        ? `Apoiado (${totalApoios})`
        : `Apoiar (${totalApoios})`;
    });
  </script>
</body>
</html>
