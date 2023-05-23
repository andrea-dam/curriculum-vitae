<template>
    <main class="col-span-2 flex h-full flex-col justify-between gap-5 p-4 border-l">
        <!-- Header -->
        <TheHeader />

        <!-- Profilo -->
        <ColumnSection>
            <HeadingThree>Profilo</HeadingThree>

            <p class="text-sm">
                Full Stack Web Developer con esperienza acquisita tramite il coding bootcamp Hackademy di Aulab. Attualmente sono impegnato
                in un percorso di stage presso Gruppo Buffetti S.p.A. Sono una persona curiosa e creativa, con ottime capacità di
                problem-solving. Mi piace mettermi alla prova con sfide ogni volta diverse e sono sempre alla ricerca di qualcosa di nuovo
                da imparare. La mia precedente attività da musicista e produttore mi ha consentito di acquisire soft-skills come il rispetto
                delle scadenze e il lavoro in team. Inoltre, la mia esperienza come insegnante di pianoforte mi ha fornito tutti gli
                strumenti per poter instaurare relazioni positive con gli altri e di potermi contraddistinguere come figura di supporto a
                cui rivolgersi in caso di necessità.
            </p>
        </ColumnSection>

        <!-- Formazione -->
        <ColumnSection>
            <HeadingThree>Formazione</HeadingThree>

            <ul class="flex flex-col gap-1 text-sm">
                <li class="">
                    <h4 class="font-semibold">Dicembre 2022 - Aulab S.r.l.</h4>
                    <div>Corso Full Stack Web Developer</div>
                </li>
                <li>
                    <div>Luglio 2018 - Conservatorio di Musica "Nino Rota"</div>
                    <div>Diploma di I Livello in Pianoforte Jazz</div>
                </li>
                <li>
                    <div>Luglio 2008 - Liceo Scientifico "Arcangelo Scacchi"</div>
                    <div>Maturità indirizzo PNI</div>
                </li>
            </ul>
        </ColumnSection>

        <ColumnSection>
            <HeadingThree>Esperienza Formativa presso Aulab S.r.l.</HeadingThree>

            <p class="text-sm">
                Formazione tramite il coding bootcamp Hacademy come sviluppatore web full stack, con lo studio e la pratica di tutte le
                tecnologie ed i linguaggi necessari ad intraprendere una carriera in questo settore, come l’HTML, il CSS, Javascript, PHP e
                il framework Laravel, così come lo studio e l’applicazione delle metodologie Agili tramite lavoro su progetti in coppia e in
                team.
            </p>
        </ColumnSection>

        <ColumnSection>
            <HeadingThree>Esperienze Professionali</HeadingThree>

            <ul class="flex flex-col gap-2 text-sm">
                <li>
                    <h4 class="font-bold">Aprile 2023 - Ottobre 2023, Gruppo Buffetti S.p.A. - Roma</h4>
                    <h5>Web Developer Junior - Stage</h5>
                    <h6>Lavoro di aggiunta e modifica contenuti su applicativi Web ed eCommerce.</h6>
                </li>
                <li>
                    <h4 class="font-bold">2013 - 2015, Groove Up - Bari, School of Rock - Monopoli</h4>
                    <h5>Insegnante di Pianoforte e Teoria Musicale</h5>
                    <h6>Attività come insegnante di pianoforte e teoria musicale.</h6>
                </li>
                <li>
                    <h4 class="font-bold">2012 - 2020</h4>
                    <h5>Musicista</h5>
                    <h6>
                        Attività come tastierista in diversi contesti musicali fra le quali spicca la collaborazione con gli Stip’ ca
                        Groove, band nota nel barese con i quali si arriva alla pubblicazione di un album nel 2017.
                    </h6>
                </li>
            </ul>
        </ColumnSection>

        <!-- Privacy -->
        <p class="text-center text-xs italic">
            Autorizzo il trattamento dei miei dati personali presenti nel CV ai sensi dell’art. 13 d. lgs. 30 giugno 2003 n. 196 - “Codice
            in materia di protezione dei dati personali” e dell’art. 13 GDPR 679/16 - “Regolamento europeo sulla protezione dei dati
            personali”
        </p>
    </main>
</template>

<script setup>
import TheHeader from "../ui/TheHeader.vue";
import ColumnSection from "../ui/ColumnSection.vue";
import HeadingThree from "../ui/HeadingThree.vue";
</script>
