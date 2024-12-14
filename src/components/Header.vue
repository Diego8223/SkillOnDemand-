<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img src="@/assets/logo.png" alt="SkillOnDemand Logo" height="30">
        SkillOnDemand
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Registrarse</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tasks" class="nav-link">Ver Tareas</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  