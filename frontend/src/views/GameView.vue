<template>
    <div class="content">
        <GamePreview></GamePreview>
        
        <LeaderBoard></LeaderBoard>
    </div>

</template>

<script>
import GamePreview from '@/components/game/GamePreview.vue'
import LeaderBoard from '@/components/game/LeaderBoard.vue'

export default {
  components: {
    GamePreview,
    LeaderBoard
  }
}
</script>

<style>
    
</style>