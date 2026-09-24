<script setup>
    const { data: recentBlogs } = await useAsyncData('recent-blogs', () => {
        return queryCollection('blog')
            .order('dateCreated', 'DESC')
            .all()
    });
    const { data: blogCount } = await useAsyncData('blog-count', () => {
        return queryCollection('blog').count();
    });

</script>

<template>
    <NuxtLink to="/">Home</NuxtLink>
    <h3 id="blogCount">I have written {{ blogCount }} blogs.</h3>
    <div id="recentBlogs">
        <h2>Recent Blogs</h2>
        <ul>
            <li v-for="blog in recentBlogs">
                <NuxtLink :to="'blog/'+blog.slug">{{ blog.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    #blogCount {
        position: absolute;
        top:0px;
        right:20px;
    }

    #recentBlogs {
        width:10rem;

    }

    #recentBlogs > h2 {
        background-color:wheat;
        border:goldenrod 2px double;
        border-bottom:0;
        font-variant:small-caps;
        text-align:center;
        margin:0;
        transition:all 1s;
    }

    #recentBlogs > ul {
        background-color:wheat;
        border:goldenrod 2px double;
        margin:0;
        list-style:none;
        transition:all 1s;
        text-align:center;
        padding:0;
    }

    #recentBlogs > ul > li > a{
        color: black;
        transition: 0.2s all;
    }

    #recentBlogs > ul > li > a:hover {
        color: white;
        -webkit-text-stroke: 1px black;
        color: transparent; /* optional: makes it hollow/outlined-only */
    }

</style>