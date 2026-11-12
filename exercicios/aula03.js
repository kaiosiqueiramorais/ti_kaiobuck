<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Radar da Vida Escolar</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Radar da Vida Escolar</h1>
    <p>Aponte um problema da escola e apoie os que mais te atrapalham.</p>
  </header>

  <div class="cartao">
    <p>Bebedouro do 2º andar vazando</p>
    <button class="apoiar">Apoiar</button>
  </div>

  <script src="script.js" defer></script>
</body>
</html>
:root {
  --cor-primaria: #1F4E79;
  --cor-borda: #2E75B6;
  --cor-foco: #C00000;
  --espaco-padrao: 16px;
  --raio-borda: 8px;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: var(--espaco-padrao);
}
header {
  background-color: var(--cor-primaria);
  color: white;
  padding: var(--espaco-padrao);
  border-radius: var(--raio-borda);
  margin-bottom: var(--espaco-padrao);
}
.cartao {
  border: 2px solid var(--cor-borda);
  border-radius: var(--raio-borda);
  padding: var(--espaco-padrao);
  margin-bottom: var(--espaco-padrao);
}
.apoiar {
  background-color: var(--cor-primaria);
  color: white;
  border: none;
  padding: 10px var(--espaco-padrao);
  border-radius: var(--raio-borda);
  cursor: pointer;
}

.apoiar:focus {
  outline: 3px solid var(--cor-foco);
  outline-offset: 2px;
}
