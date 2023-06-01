<template>
    <div class="flex items-center justify-between text-2xl">
        <h3><slot /></h3>
        <Icon :icon="icon"></Icon>
    </div>
</template>

<script setup>
defineProps(["icon"]);
</script>
