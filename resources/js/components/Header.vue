<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">Laravel</a>

            <div class="navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav d-flex">
                    <li v-for="(link, index) in linksHeader" class="nav-item" :key="index">
                        <router-link class="nav-link" :to="{name: link.routeName}">{{link.lable}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
            linksHeader:[
                {
                    lable:'Home',
                    routeName:'home'
                },
                {
                    lable:'Contact',
                    routeName:'contact'
                },
                {
                    lable:'Blog',
                    routeName:'blog'
                },
                {
                    lable:'About Us',
                    routeName:'about-us'
                }
            ]
        }
    }
}
</script>

<style>

</style>