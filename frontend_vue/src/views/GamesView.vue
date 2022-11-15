<template>
    <div class="widget-container">
        <div class="widget-header">
            <div class="widget-title">Games</div>
        </div>
        <div class="widget-body">
            <div class="game-list row">
                <div class="col-md-6 col-lg-3 mb-3">
                    <GameCard></GameCard>        
                </div>
                <div class="col-md-6 col-lg-3 mb-3">
                    <GameCard></GameCard>        
                </div>
                <div class="col-md-6 col-lg-3 mb-3">
                    <GameCard></GameCard>        
                </div>
                <div class="col-md-6 col-lg-3 mb-3">
                    <GameCard></GameCard>        
                </div>    
            </div>
        </div>    
    </div>
</template>

<script>
    import GameCard from '@/components/card/GameCard'

    export default {
        components: {
            GameCard
        }
    }
</script>