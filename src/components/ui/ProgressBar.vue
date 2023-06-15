<template>
    <li class="flex select-none flex-col gap-1">
        <div class="flex items-center justify-between">
            <h4 class="text-lg">{{ name }}</h4>
            <div class="flex w-9 justify-center">
                <Icon :icon="icon" class="text-2xl drop-shadow-sm dark:drop-shadow-none" />
            </div>
        </div>
        <div class="h-2 rounded-full bg-[#f8fcf9] shadow-inner">
            <div :style="progressBar(expertise)" class="h-full rounded-full bg-accent transition-colors duration-100" />
            <!-- bg-[#a6d0c7] -->
        </div>
    </li>
</template>

<script setup>
defineProps({ name: String, icon: String, expertise: Number });

const progressBar = expertise => {
    return `width: ${(expertise / 10) * 100}%`;
};
</script>
