<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Radar de Evasao</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="sidebar">
    <div class="marca">
      <strong>Radar de Evasao</strong><br>
      NRE Cascavel
    </div>

    <ul class="menu">
      <li><a class="ativo" href="index.html"><strong>Mapa de risco</strong></a></li>
      <li><a href="painel.html">Painel geral</a></li>
      <li><a href="escolas.html">Escolas</a></li>
      <li><a href="alunos.html">Alunos</a></li>
      <li><a href="relatorios.html">Relatorios</a></li>
      <li><a href="config.html">Configuracoes</a></li>
    </ul>
  </nav>
</body>
</html>
:root {

  --bg-primary: #2D2A6E;
  --bg-accent: #6FA82A;
  --text-accent: #5C8F22;
  --risco-alto: #D92D20;
  --risco-medio: #F79009;
  --risco-baixo: #12B76A;
  --canvas: #F8FAFC;
  --surface: #FFFFFF;
  --muted: #F1F5F9;
  --text-primary: #0F172A;
  --text-secondary: #64748B;
  --espaco: 16px;
  --raio: 10px;
}
body {
  margin: 0;
  background-color: var(--canvas);
  color: var(--text-primary);
  font-family: Inter, Arial, sans-serif;
}
.sidebar {
  width: 248px;
  min-height: 100vh;
  background-color: var(--surface);
  padding: var(--espaco);
}
.marca {
  margin-bottom: 24px;
}
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu a {
  display: block;
  padding: 10px 12px;
  border-radius: var(--raio);
  color: var(--text-secondary);
  text-decoration: none;
}
.menu a.ativo {
  background-color: var(--muted);
  color: var(--bg-primary);
}
.menu a:focus {
  outline: 3px solid var(--bg-primary);
  outline-offset: 2px;
}
