<template>
    <div v-if="isPending">
        <Spinner></Spinner>
    </div>
    <div v-if="companies === null || companies.length" class="grid sm:grid-cols-2 gap-12 mt-16">
        <div v-for="company in companies" :key="company"
             class="bg-red-400 text-white py-12">
            <p class="flex items-center justify-center">Company: {{ company.name }}</p>
            <p class="flex items-center justify-center">Category: {{ company.category.name }}</p>
        </div>
    </div>
    <div v-if="!companies && !error">
        <p class="bg-red-400 flex items-center justify-center mt-20 py-12 text-center text-white">No companies
            found...</p>
    </div>
    <div v-if="error">
        <p class="bg-red-400 flex items-center justify-center mt-20 py-12 text-center text-white">{{ error }}</p>
    </div>
</template>


<script>
import {useStore} from 'vuex';
import {computed, ref} from "vue";
import {onMounted} from 'vue'
import Spinner from "./loaders/Spinner";
// test

export default {
    components: {Spinner},
    //
    //
    //
    //
    setup() {
        const store = useStore();
        const isPending = ref(false)
        const error = ref(false)

        // companies
        const companies = computed(() => {
            return store.getters['companies/getCompanies']
        });

        onMounted(async () => {
            try {
                // is pending
                isPending.value = true
                await store.dispatch('companies/loadCompanies')
                // is pending
                isPending.value = false
            } catch (err) {
                // is pending
                isPending.value = false
                // error
                error.value = err
            }
        })

        return {
            companies, isPending, error
        }
    }
    //
    //
}
</script>
