<script setup>

</script>

<template>
    <div id="body">
        <div id="wrapper">
            <h1>Welcome to my website!</h1>

            <p>Hello, my name is Alex! I like programming and reading primarily.</p>
            
            <div id="projectList">
                <ul>
                    <li class="projectEntry">
                        <div class="projectDetail">
                            <h2>Morchlar</h2>
                            <p>A Gantt Chart application with GitHub integration.</p>
                            <a href="https://morchlar.com">Morchlar.com</a>
                        </div>
                        
                        <div class="projectImage">
                            <img src="/indexImages/morchlar.png"/>
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
        margin:auto;
        padding-top:2rem;
        margin-top: 1rem;
        background-color: bisque;
        text-align:center;
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