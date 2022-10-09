<template>
    <div class="content">
        <div class="game-content">
            <div class="widget-game">
                <img class="poster" src="https://www.speedrun.com/gameasset/j1npme6p/cover?v=9d1e2ca" /> 
                <div class="meta">
                    <div class="widget-title">MINECRAFT: JAVA EDITION (2011)</div>
                    
                    <div class="developer">Developer(s): Mojang</div>
                    
                    <div class="publisher">Publisher(s): Mojang</div>
                </div> 
                
            </div>
        </div>
        <h1>Leaderboard</h1>
    </div>
    

</template>

<style>
    .game-content{
        max-width: 1200px;
        margin: 10px auto;
    }
    .game-content .widget-game{
        display: flex;
        border-top: 3px solid #199C77;
        background-color: hsla(0,0%,100%,.075);
        padding: 1rem;
        color: #fff;
    }
    .widget-game .poster{
        width: 80px;
        margin-right: 1rem;
    }
    .game-content .widget-title{
        height: fit-content;
        margin-bottom: 10px;
    }

    .game-content .developer{
        margin-bottom: 10px;
    }

    .meta{
        display: flex;
        flex-direction: column;
        text-align: left;
    }
</style>