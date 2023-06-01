<template>
    <div class="mx-auto grid h-[297mm] w-[210mm] grid-cols-3 border-x">
        <!-- Colonna Sinistra -->
        <LeftColumn />

        <!-- Colonna Destra -->
        <RightColumn />
    </div>
</template>

<script setup>
import LeftColumn from "./components/layout/LeftColumn.vue";
import RightColumn from "./components/layout/RightColumn.vue";
</script>

<style scoped></style>
