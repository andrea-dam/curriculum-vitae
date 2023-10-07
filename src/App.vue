<template>
    <div class="mx-auto grid h-[297mm] w-[210mm] select-none grid-cols-3 text-sm text-text shadow-2xl">
        <!-- Colonna Sinistra -->
        <LeftColumn />

        <!-- Colonna Destra -->
        <RightColumn class="col-span-2" />
    </div>
</template>

<script setup>
import LeftColumn from "./components/layout/LeftColumn.vue";
import RightColumn from "./components/layout/RightColumn.vue";
</script>

<style scoped></style>
