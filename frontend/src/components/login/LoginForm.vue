<template>
    
    <div class="widget-container">
            <div class="widget-header">
              <div class="widget-title">Log in to Speedrun</div>
            </div>
            <div class="widget-body">
                <form method="post" @submit="login">
                    <div class="mb-4">
                        <div class="label-input"><label>Email</label></div>
                        <div><input type="email" class="w-100" name="email" required v-model="email"></div>
                        <div class="errors">{{ errors.email }}</div>
                    </div>
                    <div class="mb-4">
                        <div class="label-input"><label>Password</label></div>
                        <div><input type="password" class="w-100" name="password" required v-model="password"></div>
                        <div class="errors">{{ errors.password }}</div>
                    </div>
                    <div>
                        <button type="submit" class="btn-gray">Log in</button>
                    </div>
                </form>
            </div>      
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginForm",
    data() {
      return {
        email: '',
        password: '',
        errors: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login(event) {
        this.validate()
        event.preventDefault()
      },
      validate() {
        for (let errorsKey in this.errors) {
          this.errors[errorsKey] = ''
        }
        if (this.email.trim().length === 0) {
          this.errors.email = 'Invalid Email.'
        }
        if (this.password.trim().length === 0) {
          this.errors.password = 'Invalid password.'
        }
      }
    }
  }
  </script>
  
  <style>
    .login-form {
      max-width: 400px;
      margin: 25px auto;
      background-color: #f2f2f2;
      padding: 25px;
    }

    .login-form .errors {
      color: red;
    }

    .login-form input {
      border: 1px solid #ddd;
    }

    .btn-gray {
        width: 100%;
        background-color: rgb(37, 47, 55);
        color: #fff;
        border: 2px solid #4d5255;
        border-radius: 4px;
        height: 40px;
    }

    .btn-gray:hover{
        background-color: rgb(107, 110, 112);
    }

    input{
        background-color: #1e262c;
        border-radius: 2px;
        color: #fff;
        font-size: 18px;
    }

    .widget-container{
        margin: auto;
        display: flex;
        flex-direction: column;
        background: rgb(37, 47, 55);
        border-radius: 2px;
        border-top: 3px solid #199C77;
        box-shadow: 0 5px 10px 2px rgba(29,41,44,.23);
        font-size: 1rem;
        height: 100%;
        
    }

    .widget-header{
        background-color: hsla(0,0%,100%,.075);
        padding: 14px 16px;
        text-align: left;
    }

    .widget-title {
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: .025em;
        line-height: normal;
        text-decoration: none;
        text-transform: uppercase;
    }

    .widget-body{
        padding: 1rem;
        color: #fff;
    }

    .label-input{
        text-align: left;
    }

  </style>