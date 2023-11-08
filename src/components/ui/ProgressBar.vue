<template>
    <li class="flex flex-1 select-none items-center justify-between">
        <h4 class="text-lg">{{ name }}</h4>
        <div class="flex w-9 justify-center">
            <Icon :icon="icon" class="text-3xl drop-shadow-sm" />
        </div>
    </li>
</template>

<script setup>
defineProps({ name: String, icon: String });
</script>
