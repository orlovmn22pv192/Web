<template>
    <div class="news-page">
        <div class="date">September 30, 2022</div>
        <h1 class="title">Leaderboard Update Beta: Performance, User-Experience, &amp; More!</h1>
        <p class="summary">Some updates about leaderboard improvements currently in beta, as well as plans for the future.</p>
        <div class="poster">
            <img src="https://connect.elo.io/blob/B8CfBcCUanqXKr-VhVKbh6bqKV-YBtxq5t9ShX9ZhnbXi1pshXcrhNHqhNhGkEWqiZ?q=70&w=400" />
        </div>
        <p class="main">
            Hey everyone! We just recently pushed the first 
            leaderboard page update into beta. The leaderboard update is still in 
            its early stages, so we are first putting it into beta first. When we feel 
            confident with the level of polish on these new changes, we will release them to everyone! 
        </p>
        <h3>BACKEND IMPROVEMENTS & PAGINATION</h3>
        <p class="main">
            This update is primarily focused on backend improvements to vastly 
            increase speed for leaderboards large and small. We have also included 
            an overhaul of the table component, focused on creating a better experience 
            for leaderboards with lots of variables and lots of runs, across all devices. 
            This includes the addition of pagination to leaderboards. No more worries about 
            loading leaderboards with more than 1000 runs!
        </p>
        <h3>OTHER IMPROVEMENTS</h3>
            <ul>
                <li>
                    The "Submit Run" button for level leaderboards now correctly redirects to the proper page.
                </li>
                <li>
                    Fixed variable's value ordering.
                </li>
                <li>
                    Other minor miscellaneous bug fixes.
                </li>
            </ul>
        <p class="main">
            The entire Speedrun.com team is excited to hear your feedback surrounding this
            update so we can use it to help shape future changes in this area. 
            This update takes into account the battle that is function versus form, 
            and we're striving to find the best balance between the two so we can have a page 
            that both looks great and is still easily navigated when it’s densely populated.
        </p>
        <p class="main">
            As for what's ahead, we still have lots of feedback from our UI/UX interviews 
            we did earlier this year that we're excited to bring to life moving forward. 
            This will include UI improvements to the game info area to emphasize important 
            information like community site/discord links. We also have planned improvements 
            to the category/variable navigation area, as well as improving the tooling to create 
            categories/variables from the moderator side of things. This will include but is not 
            limited to allowing moderators to choose if sub-categories get displayed in the dropdown 
            format or the classic “pill” format. Of course, we are always working towards better 
            performance across the site - so you can expect some speed increases too.
        </p>
    </div>
</template>

<script>
    export default {
    name: "NewsPage"
    }
</script>

<style>
    .news-page{
        max-width: 1000px;
        background: rgb(37, 47, 55);
        margin: 0 auto;
        padding: 1rem;
        text-align: left;
        color: #fff;
    }
    .news-page .date{
        text-transform: uppercase;
    }
    .news-page .title{
        font-weight: 500;
    }
    .news-page .poster{
        width: 100%;
        text-align: center;
    }
    .news-page img{
        max-width: 80%;
    }
    .news-page .main{
        padding-top: 15px;
    }
    .news-page h3{
        text-transform: uppercase;
        font-weight: 500;
    }
</style>