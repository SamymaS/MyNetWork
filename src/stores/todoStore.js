import { defineStore } from "pinia"


export const useTodoStore = defineStore("todoStore", {
    state: () => {
        return {
            taches: [],
            titre: "Page d'accueil"
        }
    },
    getters: {
        encours: function () {
            // this. fait référence au state 
            // pas besoin de faire this.state => directement this 
            return this.taches.filter(item => !item.status)
        }
    }, // récupérer le state en réalisant réalisant une modification AVANT l'affichage en composant
    actions: {
        getTaches: async function () {
            const reponse = await fetch("http://localhost:3400/taches")
            const data = await reponse.json()
            this.taches = data;
        },
        nouvelleTache: function () {
            const tache = { id: Date.now(), nom: "nouvelle tâche", status: false }
            this.taches.push(tache);
        },
        suppr: async function (id) {
            // requête ajax pour supprimer la tache dans la bdd 
            await fetch("http://localhost:3400/taches/" + id, { method: "DELETE" })
            this.getTaches()
        },
        nouvelleTache2: async function (nom) {
            const tache = { id: Date.now(), nom, status: false }
            const options = {
                method: "POST",
                body: JSON.stringify(tache),
                headers: {
                    "content-type": "application/json"
                }
            }
            try {
                await fetch("http://localhost:3400/taches", options);
                this.taches.push(tache);

            } catch (ex) {
                console.log(new Error(ex))
            }
        }
    } // setters capacité à modifier le state 
})