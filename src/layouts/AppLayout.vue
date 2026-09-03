<template>
  <div>
    <h1>Painel</h1>

    <nav>
      <router-link to="/app/upload">
        Upload
      </router-link>

      <br>

      <router-link to="/app/relatorios">
        Relatórios
      </router-link>

      <br>

      <router-link to="/app/graficos">
        Gráficos
      </router-link>
    </nav>

    <hr>

    <router-view />
  </div>
</template>