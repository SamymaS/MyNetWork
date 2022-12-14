import {defineStore} from "pinia"

export const useUserStore = defineStore("userStore" , {
    state : () => {
        return {
            user : {}
        }
    },
    actions : {
        authentification : function({login, password}){
            if(this.user.login === login && this.user.password === password){
                this.user.isLogged = true ; 
            }
        },
        get : async function(){
            await fetch()
        }
    }
})