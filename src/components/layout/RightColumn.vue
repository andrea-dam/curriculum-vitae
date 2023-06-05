<template>
    <main class="col-span-2 flex h-full flex-col justify-between border-l p-4">
        <!-- Header -->
        <TheHeader />

        <!-- Profilo -->
        <ColumnSection>
            <HeadingThree :icon="icons.user02">Profilo</HeadingThree>

            <p class="text-sm">
                Full Stack Web Developer con esperienza acquisita tramite il <em>coding bootcamp</em> Hackademy di <strong>Aulab</strong>.
                Attualmente sono impegnato in un percorso di stage presso <strong>Gruppo Buffetti S.p.A.</strong> Sono una persona curiosa e
                creativa, con ottime capacità di <em>problem-solving</em>. Mi piace mettermi alla prova con sfide ogni volta diverse e sono
                sempre alla ricerca di qualcosa di nuovo da imparare. La mia precedente attività da musicista e produttore mi ha consentito
                di acquisire <em>soft-skills</em> come il rispetto delle scadenze e il lavoro in team. Inoltre, la mia esperienza come
                insegnante di pianoforte mi ha fornito tutti gli strumenti per poter instaurare relazioni positive con gli altri e di
                potermi contraddistinguere come figura di supporto a cui rivolgersi in caso di necessità.
            </p>
        </ColumnSection>

        <!-- Formazione -->
        <ColumnSection>
            <HeadingThree :icon="icons.bookOpen">Formazione</HeadingThree>

            <UnorderedList class="gap-2 text-sm">
                <li>
                    <h4><strong>Dicembre 2022 - Aulab S.r.l.</strong></h4>
                    <span>Corso Full Stack Web Developer</span>
                </li>
                <li>
                    <h4><strong>Luglio 2018 - Conservatorio di Musica "Nino Rota"</strong></h4>
                    <span>Diploma di I Livello in Pianoforte Jazz</span>
                </li>
                <li>
                    <h4><strong>Luglio 2008 - Liceo Scientifico "Arcangelo Scacchi"</strong></h4>
                    <span>Maturità indirizzo PNI</span>
                </li>
            </UnorderedList>
        </ColumnSection>

        <ColumnSection>
            <HeadingThree :icon="icons.bulbIcon">Esperienza Formativa</HeadingThree>

            <p class="text-sm">
                Formazione tramite il coding bootcamp Hacademy come sviluppatore web full stack, con lo studio e la pratica di tutte le
                tecnologie ed i linguaggi necessari ad intraprendere una carriera in questo settore, come l’HTML, il CSS, Javascript, PHP e
                il framework Laravel, così come lo studio e l’applicazione delle metodologie Agili tramite lavoro su progetti in coppia e in
                team.
            </p>
        </ColumnSection>

        <ColumnSection>
            <HeadingThree :icon="icons.desktopIcon">Esperienze Professionali</HeadingThree>

            <div class="flex flex-col gap-2 text-sm">
                <div>
                    <h4>Aprile 2023 - Ottobre 2023, Gruppo Buffetti S.p.A. - Roma</h4>
                    <h5><strong>Web Developer Junior - Stage</strong></h5>
                </div>
                <div>
                    <p>Lavoro di aggiunta e modifica contenuti su applicativi Web ed eCommerce sviluppati con Magento.</p>
                    <p>Lavoro su contenuti gestiti da Clerk su piattaforma eCommerce di Cartiere Pigna S.p.A.</p>
                    <p>Partecipazione e contributo ai meeting di Project Management.</p>
                </div>
            </div>
        </ColumnSection>

        <!-- Privacy -->
        <p class="text-center text-xs">
            <em>
                Autorizzo il trattamento dei miei dati personali presenti nel CV ai sensi dell’art. 13 d. lgs. 30 giugno 2003 n. 196 -
                “Codice in materia di protezione dei dati personali” e dell’art. 13 GDPR 679/16 - “Regolamento europeo sulla protezione dei
                dati personali”
            </em>
        </p>
    </main>
</template>

<script setup>
import TheHeader from "../ui/TheHeader.vue";
import ColumnSection from "../ui/ColumnSection.vue";
import HeadingThree from "../ui/HeadingThree.vue";
import UnorderedList from "../ui/UnorderedList.vue";

import icons from "../../data/icons.js";
</script>
