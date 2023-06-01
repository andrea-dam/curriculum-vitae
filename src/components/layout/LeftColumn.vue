<template>
    <aside class="col-span-1 flex flex-col justify-between gap-5 p-5 text-sm leading-4">
        <!-- Immagine -->
        <img src="../../../assets/2020-02-18_21-16-38_271.webp" class="rounded-full shadow-lg" alt="" />

        <!-- Contatti -->
        <ColumnSection>
            <HeadingThree :icon="icons.linkIcon">Contatti</HeadingThree>

            <UnorderedList class="gap-2">
                <li v-for="(link, index) in links" :key="index">
                    <a :href="link.url" class="text-md flex items-center gap-3"
                        ><Icon :icon="link.icon" class="text-lg" />{{ link.name }}</a
                    >
                </li>
            </UnorderedList>
        </ColumnSection>

        <!-- Skills -->
        <ColumnSection class="h-full">
            <HeadingThree :icon="icons.codeIcon">Competenze</HeadingThree>

            <UnorderedList class="h-full justify-between">
                <ProgressBar
                    v-for="(skill, index) in skills"
                    :key="index"
                    :name="skill.name"
                    :icon="skill.icon"
                    :expertise="skill.expertise" />
            </UnorderedList>
        </ColumnSection>

        <!-- Inglese -->
        <ColumnSection>
            <HeadingThree :icon="icons.chatConversationCircle">Lingue</HeadingThree>

            <span>Inglese: B2</span>
        </ColumnSection>
    </aside>
</template>

<script setup>
import ColumnSection from "../ui/ColumnSection.vue";
import HeadingThree from "../ui/HeadingThree.vue";
import ProgressBar from "../ui/ProgressBar.vue";
import UnorderedList from "../ui/UnorderedList.vue";

import links from "../../data/links.json";
import skills from "../../data/skills.json";

import icons from "../../data/icons.js";
</script>
