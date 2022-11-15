<template>
    <div class="login-form">
      <LoginForm></LoginForm>
    </div>
</template>
  
<script>
  import LoginForm from "@/components/login/LoginForm";
  export default {
    components: {LoginForm}
  }
</script>


<style>
    .login-form{
        max-width: 600px;
        background-color: #111618;
    }
</style>