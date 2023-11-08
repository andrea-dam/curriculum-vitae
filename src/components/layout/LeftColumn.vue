<template>
    <aside class="flex flex-col justify-between gap-6 bg-background p-4 shadow-inner">
        <!-- Immagine -->
        <img src="/assets/2020-02-18_21-16-38_271.webp" class="rounded-full shadow-lg" alt="" />

        <!-- Contatti -->
        <ColumnSection>
            <HeadingThree :icon="icons.linkIcon">Contatti</HeadingThree>

            <UnorderedList class="ms-0.5 gap-2">
                <li v-for="(link, index) in links" :key="index">
                    <a :href="link.url" class="text-md flex items-center gap-3 hover:underline" target="_blank">
                        <Icon :icon="link.icon" class="text-lg" />
                        {{ link.name }}
                    </a>
                </li>
            </UnorderedList>
        </ColumnSection>

        <!-- Skills -->
        <ColumnSection class="h-full">
            <HeadingThree :icon="icons.codeIcon">Competenze</HeadingThree>

            <UnorderedList class="divide-y divide-accent h-full">
                <ProgressBar v-for="(skill, index) in skills" :key="index" class="col-span-1" :name="skill.name" :icon="skill.icon" />
            </UnorderedList>
        </ColumnSection>

        <!-- Inglese -->
        <ColumnSection>
            <HeadingThree :icon="icons.chatConversationCircle">Lingue</HeadingThree>

            <span>Inglese: Livello B2</span>
        </ColumnSection>
    </aside>
</template>

<script setup>
import ProgressBar from "../ui/ProgressBar.vue";

import links from "../../data/links.json";
import skills from "../../data/skills.json";

import icons from "../../data/icons.js";
</script>
