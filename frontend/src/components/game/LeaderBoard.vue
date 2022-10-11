<template>
    <div class="leaderboard">
        <div class="header">
            <h1>Leaderboard</h1>
            <div class="ma">
                <button type="submit" class="btn-green">Rules</button>
            </div>
            <div class="ma">
                <button type="submit" class="btn-green" @click="addRun">Run</button>
            </div>
        </div>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Time</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>1s</td>
                    <td>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                            </svg>
                        </a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>2s</td>
                    <td>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                            </svg>
                        </a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>3s</td>
                    <td> 
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                            </svg>
                        </a>
                        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
export default {
        name: "LeaderBoard",
        methods: {
            addRun(){
                let count = 0
                console.log("add run " + count++)
            }
        }
    }
</script>

<style>
    .leaderboard{ 
        margin-top: 30px;  
    }

    .leaderboard .table{
        color: #fff;
        background-color: #199c77ad;
    }

    td a{
        color: #fff;
    }

    td a:hover{
        color: #000;
    }

    .leaderboard .header{
        height: 40px;
        background-color: #199c77ad;
        color: #fff;
        display: flex;
    }

    .leaderboard hr{
        color: #fff;
        margin: 0;
        opacity: 1;
    }

    .leaderboard .ma{
        margin: auto;
    }

    .leaderboard .btn-green{
        color: #fff;
        background-color: #199c77ad;
        border: 2px solid #fff;
        border-radius: 5px;
    }
    .leaderboard .btn-green:hover{
        background-color: #3ce2b3f3;
    }
</style>