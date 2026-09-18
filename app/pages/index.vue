<script setup>

</script>

<template>
    <div id="body">
        <div id="wrapper">
            <div id="intro">
                <h1>Alex Daly</h1>

                <p>Hello, my name is Alex! I like to make things!</p>
            </div>
            <div id="navbar">
                <h2>Navigation</h2>
                <ul id="navlist">
                    <li><NuxtLink to="blog">About</NuxtLink></li>
                    <li><NuxtLink to="blog">Blog</NuxtLink></li>
                    <li><NuxtLink to="blog">Contact</NuxtLink></li>
                </ul>
            </div>
            <div id="projectList">
                <ul>
                    <li class="projectEntry">
                        <div class="projectDetail">
                            <h2>Morchlar</h2>
                            <p>A Gantt Chart application with GitHub integration.</p>
                            <a href="https://morchlar.com">Morchlar.com</a>
                        </div>
                        
                        <div class="projectImage">
                            <img src="/images/morchlar.png"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #wrapper {
        width:70vw;
        margin-left:1.5rem;
        padding-top:2rem;
        margin-top: 1.5rem;
        background-color: bisque;
    }

    #intro {
        height:100vh;
        margin-left:8rem;
    }

    #intro > h1 {
        text-decoration:underline;
        font-family:"Junicode", sans-serif;
        font-size:5rem;
        font-variant:small-caps;
    }

    #intro > p {
        font-family:"Aileron", sans-serif;
        font-size:1.1rem;
    }
    
    #navbar {
        width:11rem;
        position:absolute;
        top:10rem;
        left:65rem;
    }

    #navbar > h2 {
        background-color:wheat;
        border:goldenrod 2px double;
        border-bottom:0;
        font-size:1.6rem;
        font-variant:small-caps;
        text-align:center;
        margin:0;
        transition:all 1s;
    }

    #navbar > h2:hover {
        font-size:1.65rem;
    }

    #navlist {
        background-color:wheat;
        border:goldenrod 2px double;
        list-style:none;
        margin:0;
        padding:0;
    }

    #navlist > li {
        text-align:center;
        margin:auto;
    }

    #navlist > li > a {
        text-align:center;
        text-decoration: none;
        color:black;
        transition:all 2s;
        font-size:1.3rem;
        margin:0.2rem;
    }

    #navlist > li > a:hover {
        color:white;
        text-shadow:1px 1px black;
        font-size:1.35rem;
    }

    #projectList > ul {
        list-style: none;
    }

    .projectEntry {
        background-color:blanchedalmond;
        border: 5px double burlywood;
        border-radius:1rem;
        padding:0.5rem;
        width:50rem;
        margin:auto;
        display:flex;
    }

    .projectDetail {
        margin:0 2rem;
        margin-top: 2rem;
    }

    .projectImage > img {
        width:25rem;
        height:auto;
    }

</style>