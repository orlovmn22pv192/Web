<template>
    <div class="widget-news">
        <div class="title">
            <h1>News</h1>
        </div>
        <hr>
        <div class="list-news row">
            <div class="col-md-4 mb-3">
                <NewsCard></NewsCard>
            </div>
            <div class="col-md-4 mb-3">
                <NewsCard></NewsCard>      
            </div>
            <div class="col-md-4 mb-3">
                <NewsCard></NewsCard>      
            </div>
            <div class="col-md-4 mb-3">
                <NewsCard></NewsCard>      
            </div>
            
        </div>
        
    </div>
    
</template>

<script>
    import NewsCard from '@/components/card/NewsCard.vue'

    export default {
        components: {
            NewsCard
        }
    }
</script>

<style>
    .widget-news{
        max-width: 1000px;
        color: #fff;
        margin: 0 auto;
    }
    .widget-news .title{
        text-align: left;
    }
    .widget-news a{
        text-decoration: none;
        color: #fff;
    }
</style>