<template>
    <div class="widget-container">
        <div class="widget-header">
            <div class="widget-title">LATEST RUNS</div>
        </div>
        <div class="widget-body">
          <div class="runs-list row">
              <div class="col-md-6 col-lg-3 mb-3">
                  <RunCard></RunCard>
              </div>
              <div class="col-md-6 col-lg-3 mb-3">
                  <RunCard></RunCard>
              </div>
              <div class="col-md-6 col-lg-3 mb-3">
                  <RunCard></RunCard>
              </div>
              <div class="col-md-6 col-lg-3 mb-3">
                  <RunCard></RunCard>
              </div>
          </div>
        </div>    
    </div>      
</template>

<script>
// @ is an alias to /src
import RunCard from '@/components/card/RunCard.vue'

export default {
  components: {
    RunCard
  }
}
</script>

<style>
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
        font-family: Industry,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
    }

    .widget-body{
        padding: 1rem;
        color: #fff;
    }

</style>