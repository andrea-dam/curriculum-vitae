<template>
    <div class="flex items-center justify-between font-serif text-2xl font-medium">
        <h3><slot /></h3>
        <Icon :icon="icon"></Icon>
    </div>
</template>

<script setup>
defineProps(["icon"]);
</script>
