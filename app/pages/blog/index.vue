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
    <h2 id="blogCount">I have written {{ blogCount }} blogs.</h2>
    <div id="recentBlogs">
        <h2>Recent Blogs</h2>
        <ul>
            <li v-for="blog in recentBlogs">
                <NuxtLink :to="'blog/'+blog.slug">{{ blog.title }} -- {{ blog.dateCreated }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    #blogCount {
        position: absolute;
        top:0px;
        right:10px;
    }
</style>