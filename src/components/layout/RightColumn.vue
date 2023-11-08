<template>
    <main class="flex flex-col justify-between p-4">
        <!-- Header -->
        <TheHeader />

        <!-- Profilo -->
        <ColumnSection>
            <HeadingThree :icon="icons.user02">Profilo</HeadingThree>

            <p class="text-justify">
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

            <UnorderedList class="gap-2">
                <li>
                    <h4>Dicembre 2022 - Aulab S.r.l. - Bari</h4>
                    <span><strong class="font-semibold">Corso Full Stack Web Developer</strong></span>
                </li>
                <li>
                    <h4>Luglio 2018 - Conservatorio di Musica "Nino Rota" - Monopoli</h4>
                    <span><strong class="font-semibold">Diploma di I Livello in Pianoforte Jazz</strong></span>
                </li>
                <li>
                    <h4>Luglio 2008 - Liceo Scientifico "Arcangelo Scacchi" - Bari</h4>
                    <span><strong class="font-semibold">Maturità indirizzo PNI</strong></span>
                </li>
            </UnorderedList>
        </ColumnSection>

        <!-- Esperienza Formativa -->
        <ColumnSection>
            <HeadingThree :icon="icons.bulbIcon">Esperienza Formativa</HeadingThree>

            <p class="text-justify">
                Formazione tramite il coding bootcamp Hacademy come sviluppatore web full stack, con lo studio e la pratica di tutte le
                tecnologie ed i linguaggi necessari ad intraprendere una carriera in questo settore, come l’HTML, il CSS, Javascript, PHP e
                il framework Laravel, così come lo studio e l’applicazione delle metodologie Agili tramite lavoro su progetti in coppia e in
                team.
            </p>
        </ColumnSection>

        <!-- Esperienze Professionali -->
        <ColumnSection>
            <HeadingThree :icon="icons.desktopIcon">Esperienze Professionali</HeadingThree>

            <div class="flex flex-col gap-3">
                <div>
                    <h4>Ottobre 2023 - Presente, Gruppo Buffetti S.p.A. - Roma</h4>
                    <h5><strong>Sviluppatore Web Junior</strong></h5>
                </div>
                <UnorderedList class="list-disc gap-1 pl-5 text-justify">
                    <li>Refactoring Frontend Web del software di recupero crediti "Credit Management System".</li>
                    <li>
                        Lavoro di aggiunta e modifica contenuti su applicativi Web sviluppati con Magento, Wordpress e Joomla (<a
                            href="https://buffetti.it"
                            target="_blank"
                            class="underline"
                            >buffetti.it</a
                        >, <a href="https://shop.buffetti.it" target="_blank" class="underline">shop.buffetti.it</a>) .
                    </li>
                    <li>
                        Lavoro su contenuti gestiti da Clerk su piattaforma eCommerce di Cartiere Pigna S.p.A. (<a
                            href="https://shop.pigna.it"
                            target="_blank"
                            class="underline"
                            >shop.pigna.it</a
                        >).
                    </li>
                    <li>Partecipazione e contributo ai meeting di Project Management.</li>
                </UnorderedList>

                <div>
                    <h4>Aprile 2023 - Settembre 2023, Gruppo Buffetti S.p.A. - Roma</h4>
                    <h5><strong>Sviluppatore Web Junior - Stage</strong></h5>
                </div>
            </div>
        </ColumnSection>

        <!-- Privacy -->
        <footer class="mt-5 text-center text-xs">
            <em>
                Autorizzo il trattamento dei miei dati personali presenti nel CV ai sensi dell’art. 13 d. lgs. 30 giugno 2003 n. 196 -
                “Codice in materia di protezione dei dati personali” e dell’art. 13 GDPR 679/16 - “Regolamento europeo sulla protezione dei
                dati personali”
            </em>
        </footer>
    </main>
</template>

<script setup>
import TheHeader from "../ui/TheHeader.vue";

import icons from "../../data/icons.js";
</script>
