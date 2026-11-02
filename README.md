# LUMIÈRE — Cucina Contemporanea

Sito portfolio in italiano per un ristorante **immaginario**, React 19, TypeScript, Vite 7, Tailwind CSS 4 e Lucide. Nessun backend, cookie applicativo, tracker o servizio incorporato. Animazioni CSS con supporto reduced motion.

## Sviluppo

Richiede Node.js 22.12+ (verificato con 24.19) e npm.

```sh
cd /workspace/codextry
npm ci
npm run dev -- --port 5173
```

`npm run typecheck` verifica TypeScript, `npm run build` crea `dist`, `npm run preview` serve la build. Non è configurato un linter.

`npm test` esegue otto verifiche browser: menu, tastiera, lightbox, email, policy e layout a 320, 375, 430, 768, 1024, 1366 e 1920 px. Nel cloud usa Chromium da `/usr/bin/chromium`. Su altri sistemi installare Chromium con Playwright e rimuovere `executablePath` dalla configurazione. I test non inviano email.

## File principali e personalizzazione

- `src/data/restaurant.ts`: identità, contatti, orari, URL social e indicazioni, 20 piatti e prezzi, recensioni dimostrative e percorsi immagini.
- `src/App.tsx`: sezioni e testi narrativi, navigazione, menu e galleria.
- `src/components/Booking.tsx`: validazione e generazione email, nessuna memorizzazione dei dati.
- `src/components/Dialog.tsx`: dialoghi nativi con focus, Escape e ritorno al controllo iniziale.
- `src/styles.css`: palette, layout, tipografia, responsive e movimento ridotto.
- `public/images`: asset locali, senza richieste esterne.

Il nome e il messaggio hero sono centralizzati nella configurazione. Per un rebranding completo aggiornare anche il logo testuale, i testi narrativi in App, titolo e metadati in index.html, favicon e testi email.

## Fotografie locali

Sono incluse sei fotografie d’ispirazione Unsplash, scaricate come WebP in `public/images`: tavola gourmet, cucina professionale, sala, pasta al pesto, tiramisù e verdure. Il sito non effettua richieste a Unsplash: tutte le immagini sono servite dallo stesso hosting. Hero 1920 px, sala 1600 px, altre immagini 1000–1100 px; circa 2 MB complessivi. Hero prioritaria e immagini successive lazy-loaded. L’SVG `placeholder.svg` rimane solo come riserva in caso di errore.

Le immagini rappresentano ispirazioni per un ristorante immaginario, non una sede o uno staff di LUMIÈRE. Prima di un lancio per un’attività reale sostituirle con fotografie rappresentative del locale e delle preparazioni effettive. Fonti, identificativi e riferimento alla licenza sono in `public/images/CREDITS.md`. I percorsi restano centralizzati in `src/data/restaurant.ts`.

## Prenotazioni e recapiti

L’utente compila il form, prepara la mail e apre esplicitamente il programma di posta. Non si simula una prenotazione riuscita: serve sempre la conferma del ristorante. `prenotazioni@lumiere.example` è un indirizzo riservato dimostrativo **non operativo**. Configurarlo prima dell’utilizzo. Telefono, indicazioni e social sono opzionali: finché assenti non generano collegamenti inventati. Il numero di ospiti è limitato a otto; modificare secondo le politiche reali del locale. Orari e disponibilità vanno confermati manualmente; il sito non gestisce inventario tavoli o giorni di chiusura.

## Pubblicazione

Vercel: importare il repository, preset Vite, build `npm run build`, output `dist`. Netlify: build `npm run build`, directory `dist`. La singola pagina con ancore non richiede rewrite. Pubblicazione e invio su GitHub non sono stati effettuati.

Prima del lancio reale: sostituire tutti i dati dimostrativi, verificare i diritti delle fotografie definitive, confermare prezzi e allergeni, rimuovere o sostituire le testimonianze di fantasia, completare privacy e cookie policy con i dati del titolare e dell’hosting, verificare il canale email. Aggiornare metadati e URL OG assoluti al dominio definitivo. `robots.txt` impedisce intenzionalmente l’indicizzazione della demo: cambiarlo e aggiungere una sitemap solo al dominio definitivo. Non sono inseriti dati strutturati Restaurant per un’attività inesistente. Verificare nuovamente performance e accessibilità con gli asset finali; nessun punteggio Lighthouse dichiarato.

## Ambiente cloud

Usare questo checkout esistente; ogni task è già isolato, non creare worktree salvo richiesta esplicita. `npm ci` ripristina le dipendenze dal lockfile. I processi non sopravvivono alla pubblicazione dello snapshot: riavviare Vite all’inizio di una nuova sessione. La configurazione riutilizzabile è salvata nella bozza ambiente; la pubblicazione avviene dalle impostazioni.
