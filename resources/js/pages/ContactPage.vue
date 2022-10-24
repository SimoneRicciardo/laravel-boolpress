<template>
    <div class="container">
        <h1>Contattaci!</h1>
        <form @submit.prevent="SendMail">
            <div class="form-group">
                <label for="name">Nome</label>
                <input v-model="name" type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="text" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="message">Messaggio</label>
                <textarea v-model="message" type="text" class="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Invia</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "ContactPage",
    Data(){
        return {
            name:'',
            email:'',
            message:''
        }
    },
    methods:{
        SendMail(){
            axios.post('/api/contacts', {
                'name':  this.name,
                'email':  this.email,
                'message':  this.message,
            })
            .then((response)=>(
                console.log(response)
            ))
        }
    }
}
</script>

<style>

</style>