<template>
    <div class="flex items-center gap-2.5 font-serif text-2xl font-medium text-[#3d4969]">
        <div class="flex w-6 justify-center">
            <Icon :icon="icon"></Icon>
        </div>
        <h3><slot /></h3>
    </div>
</template>

<script setup>
defineProps(["icon"]);
</script>
