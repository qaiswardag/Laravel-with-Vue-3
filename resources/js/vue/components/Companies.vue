<template>
    <div class="grid sm:grid-cols-2 gap-12 mt-16">
        <div v-if="companies === null || companies.length">
            <div v-for="company in companies" :key="company" class="border border-red-200 text-center py-12">
                <p>{{ company.name }}</p>
            </div>
        </div>
    </div>
    <div>
        <p class="border border-red-200 text-center py-12">No companies found...</p>
    </div>
</template>


<script>
import {useStore} from 'vuex';
import {computed} from "vue";

export default {
    setup() {
        const store = useStore();

        // companies
        const companies = computed(() => {
            return store.getters['companies/getCompanies']
        });

        return {
            companies
        }
    }
}
</script>
