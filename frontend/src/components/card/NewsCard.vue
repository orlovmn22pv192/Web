<template>
    <div class="news">
        <a href="/news_page">
            <img  src="https://connect.elo.io/blob/B8CfBcCUanqXKr-VhVKbh6bqKV-YBtxq5t9ShX9ZhnbXi1pshXcrhNHqhNhGkEWqiZ?q=70&w=400" />
            <div class="description">
                <div class="date">Sep. 30</div>
                <p class="title">
                    Leaderboard Update Beta: Performance, User-Experience, &amp; More!
                </p>
                <p class="summary">
                    Some updates about leaderboard improvements currently in beta, as well as plans for the future.
                </p>
            </div>
        </a>
        
    </div>
</template>

<script>
    export default {
        name: "NewsCard"
    }
</script>

<style>
    .news{
        max-width: 300px;
        margin: 0 auto;
        background-color: rgb(37 47 55);
    }
    .news img{
        height: 200px;
        width: 100%;
    }
    .description{
        text-align: left;
        padding: 10px;
    }
    .date{
        font-size: 12px;
        margin-bottom: 10px;
    }
    .summary{
        font-size: 13px;
    }
    .title{
        font-weight: 600;
    }
</style>