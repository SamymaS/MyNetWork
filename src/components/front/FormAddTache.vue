<template>
    <div>
        <form @submit.prevent="todoStore.nouvelleTache2(this.nom)" class="d-flex" >
            <input type="text" v-model="nom" class="w-50 form-control" placeholder="nom de la nouvelle tâche">
            <input type="submit" class="btn btn-outline-success">
        </form>
    </div>
</template>

<script>
    import { useTodoStore } from "../../stores/todoStore"
    export default {
        data : () => {
            return {
                nom : "",
                todoStore : useTodoStore()
            }
        }
    }
</script>