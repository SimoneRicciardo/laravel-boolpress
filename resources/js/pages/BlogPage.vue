<template>
    <div class="contain">
        <div>
            <MyPost class="card m-4" v-for="(post, index) in posts" :key="index" :post="post"></MyPost>
        </div>
        <nav>
            <ul class="pagination">
                <li class="page-item" :class="(currentPage==1?'disabled':'')" ><a class="page-link" href="#" @click.prevent="getPosts(currentPage - 1)">Previous</a></li>
                <li class="page-item" :class="(currentPage==lastPage)?'disabled':''"><a class="page-link" href="#" @click.prevent="getPosts(currentPage + 1)">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>

import MyPost from '../components/MyPost.vue'

export default {
    name:"BlogPage",
    components: {
        MyPost
    },
    data(){
        return{
            posts:[],
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
            getPosts(page) {
                axios.get('/api/posts', {
                    params: {
                        page: page
                    }
                })
                .then((response) => {
                    this.posts = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                });
            }
        },
        mounted() {
            this.getPosts(1);
        }
}
</script>

<style>

</style>