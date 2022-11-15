<template>
    <div class="rounded game">
        <a href="/game">
            <img class="rounded poster" src="https://www.speedrun.com/gameasset/j1npme6p/cover?v=9d1e2ca" />
            <div class="title">Minecraft</div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "GameCard"
    }
</script>

<style>
    .game{
        background-color: #111618;
        max-width: 300px;
        margin: 0 auto;
        text-align: center;
    }
    .game a{
        text-decoration: none;
        color: #fff;
    }
    .game .title{
        margin-top: 1rem;
        padding-bottom: 1rem;
    }
    .game img{
        width: 70%;
        margin-top: 30px;
    }
</style>