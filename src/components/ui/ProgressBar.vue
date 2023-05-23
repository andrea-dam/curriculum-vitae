<template>
    <li class="flex flex-col">
        <div class="mb-2 flex items-end justify-between">
            <Icon :icon="icon" class="text-2xl drop-shadow-sm dark:drop-shadow-none h-[24px]" />
            <h4 class="text-lg">{{ name }}</h4>
        </div>
        <div class="h-1.5 rounded-full bg-gray-200 shadow-inner">
            <div :style="progressBar(expertise)" class="h-full rounded-full bg-[#a6d0c7] transition-colors duration-300" />
        </div>
    </li>
</template>

<script setup>
defineProps(["name", "icon", "expertise"]);

const progressBar = expertise => {
    const percentage = (expertise / 10) * 100;
    return `width: ${percentage}%`;
};
</script>
