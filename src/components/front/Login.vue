<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="submit($event)">
            <div class="d-flex">
                <input type="text" v-model="login" placeholder="votre login" class="form-control w-50 me-2">
                <input type="password" v-model="password" placeholder="votre password" class="form-control w-50 ms-2">
            </div>
            <div class="text-center mt-3">
                <input type="submit" class="btn btn-outline-dark">
            </div>
        </form>
        {{ JSON.stringify(userStore.user) }}
    </div>
</template>

<script>
    import {useUserStore} from "../../stores/userStore"
    export default {
        methods : {
            submit : function(){
                const profil = {login : this.login , password : this.password }
                this.userStore.authentification(profil); 
            }
        },
        data : () => {
            return {
                login : "",
                password : "",
                userStore : useUserStore()
            }
        }
    }
</script>