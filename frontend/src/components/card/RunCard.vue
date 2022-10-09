<template>
    <div class="run">
        <img src="https://www.speedrun.com/gameasset/k6qg0xdg/cover?v=422f9b8" class="img-fluid rounded" alt="...">
        <div class="description">
            <h5 class="run-title">Dark Souls III</h5>
            <p>Category: All bosses</p>
            <p>Time: 1s</p>
        </div>
        <button type="button" class="btn btn-success">More</button>
    </div>

</template>

<script>
    export default {
    name: "RunCard"
    }
</script>

<style>
    .run{
        border-radius: 5px;
        width: max-content;
        text-align: center;
        width: auto;
        padding-bottom: 10px;
        background-color: #111618;
    }

    .run .btn{
        background-color: #199C77;
    }

    .run img{
        width: 80%;
        margin-top: 2rem;
        
    }

    .run .description{
        text-align: center;
        padding-top: 10px;
    }
</style>