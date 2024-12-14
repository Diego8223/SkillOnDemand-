<template>
    <div class="container">
      <h2 class="text-center">Crear Cuenta</h2>
      <form>
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre">
        </div>
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo">
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" placeholder="Ingresa tu contraseña">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register'
  };
  </script>
  