<template>
    <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <div class="logo">
                            <img src="https://www.speedrun.com/images/logo-white.png" >
                        </div>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Games'}">Games</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'ListOfNews'}">News</router-link>
                            </li>
                            <li class="navbar-item">
                                <router-link class="nav-link" :to="{name: 'About'}">About</router-link>
                            </li>
                            <li class="navbar-item" v-if="!isAuth">
                                <router-link class="nav-link" :to="{name: 'Login'}">Log in</router-link>
                            </li>
                            <!-- <li class="navbar-item">
                                <a class="nav-link" :to="{name: 'SignUp'}">Sign up</a>
                            </li> !-->
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
</template> 

<script>
    export default {
        name: "Header",
        data() {
            return {
            isAuth: localStorage.getItem('user')
            }
        }
    }
</script>

<style>
    header {
    background-color: #199C77;
    color: #fff;
    }

    nav.navbar {
        background-color: #199C77;
        padding: 0;
        height: 50px;
    }

    nav .nav-link {
        color: #fff;
    }

    header .logo img{
        width: 200px;
    }

    header nav {
        margin-left: auto;
    }

</style>