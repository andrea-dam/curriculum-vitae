<template>
    <main class="container mx-auto grid h-[297mm] w-[210mm] grid-cols-12 border-r">
        <!-- Colonna Sinistra -->
        <aside class="col-span-4 flex flex-col gap-10 border-x p-5 text-sm leading-4">
            <!-- Immagine -->
            <img src="../assets/2020-02-18_21-16-38_271.webp" class="rounded-full shadow-lg" alt="" />

            <!-- Contatti -->
            <div class="flex flex-col">
                <a v-for="(link, index) in links" :key="index" :href="link.url" class="flex items-center gap-3 text-xl"
                    ><Icon :icon="link.icon" />{{ link.name }}</a
                >
            </div>

            <!-- Skills -->
            <ul class="flex h-full flex-col justify-between">
                <li v-for="(skill, index) in skills" :key="index" class="flex flex-col">
                    <div class="mb-2 flex items-end justify-between">
                        <div class="flex w-14 justify-center">
                            <Icon :icon="skill.icon" class="text-2xl drop-shadow-sm dark:drop-shadow-none" />
                        </div>
                        <p class="text-lg">{{ skill.name }}</p>
                    </div>
                    <div class="h-1.5 rounded-full bg-gray-200 shadow-inner">
                        <div :style="progressBar(skill.expertise)" class="h-full rounded-full bg-blue-600 transition-colors duration-300" />
                    </div>
                </li>
            </ul>
        </aside>

        <!-- Colonna Destra -->
        <div class="col-span-8 flex flex-col gap-5 p-6">
            <header class="flex justify-between">
                <div>
                    <h1 class="text-5xl">Andrea Damiani</h1>
                    <h2 class="text-3xl">Full Stack Web Developer</h2>
                </div>
                <img src="../assets/frame.png" class="w-24" alt="" />
            </header>

            <!-- Descrizione -->
            <p class="text-sm">
                Full Stack Web Developer con esperienza acquisita tramite il coding bootcamp Hackademy di Aulab. Attualmente sono impegnato
                in un percorso di stage presso Gruppo Buffetti S.p.A. Sono una persona curiosa e creativa, con ottime capacità di
                problem-solving. Mi piace mettermi alla prova con sfide ogni volta diverse e sono sempre alla ricerca di qualcosa di nuovo
                da imparare. La mia precedente attività da musicista e produttore mi ha consentito di acquisire soft-skills come il rispetto
                delle scadenze e il lavoro in team. Inoltre, la mia esperienza come insegnante di pianoforte mi ha fornito tutti gli
                strumenti per poter instaurare relazioni positive con gli altri e di potermi contraddistinguere come figura di supporto a
                cui rivolgersi in caso di necessità.
            </p>
        </div>
    </main>
</template>

<script setup>
import skills from "../src/data/skills.json";

const links = [
    {
        name: "Email",
        icon: "ph:envelope-simple",
        url: "mailto:andrea.dam90@gmail.com",
    },
    {
        name: "Linkedin",
        icon: "mdi:linkedin",
        url: "https://www.linkedin.com/in/andrea-damiani-web-developer/",
    },
    {
        name: "Gitlab",
        icon: "fa6-brands:gitlab",
        url: "https://gitlab.com/andrea-dam",
    },
];

const progressBar = expertise => {
    const percentage = (expertise / 10) * 100;
    return `width: ${percentage}%`;
};
</script>

<style scoped></style>
