# Social Brothers

## Inleiding

Bedankt voor het leuke gesprek van net!
Hierbij bijgeleverd de beloofde case, graag zien we de opdracht binnenkomen op mijn e-mailadres (luuk@socialbrothers.nl).

Succes!

## De opdracht

Bijgeleverd is een afbeelding (example.png of de InVision link die je zojuist hebt ontvangen in je inbox) die nagemaakt dient te worden. Het liefst zien we dit voorbeeld responsive zodat het ook op kleinere devices werkt. Daarnaast moet het ook werken in alle moderne browsers.

De bedoeling is dat er in het linkerblok een blogberichten aangemaakt kan worden, hiervoor is er door ons een API gemaakt waar deze berichten opgeslagen kunnen worden. In het rechterblok moeten alle blogberichten worden weergegeven, zodra je klinkt op "Meer laden" dienen er meer berichten geladen te worden in het blok.

## Waar kijken wij naar?

Je bent volledig vrij in hoe je dit project oplevert, zolang je het in React bouwt. Het belangrijkste voor ons is dat je de tools waarmee je werkt goed begrijpt en dat je deze in een gestructureerde, consistente manier gebruikt. Aangezien het een front-end applicatie is kijken we - vanzelfsprekend - ook naar het design en naar performance. Dit zijn voor ons echt de basics waar we op beoordelen, dus verras ons alsjeblieft met je skills!

- Nauwkeurigheid navolgen van het design
- Mate van aandacht voor performance
- Gestructureerde, herbruikbare code
- Nieuwe technieken

## De API

De API staat op de volgende locatie: `http://178.62.198.162/api/`.
Om de API te gebruiken dien je 'token'-header mee te sturen met als waarde `pj11daaQRz7zUIH56B9Z`. Let op: geen bearer token dus.

De API beschikt over de volgende endpoints:

- `GET /posts?page={pageNr}`
- `GET /categories`
- `POST /posts` (title: string, content: string, category_id: number)

## Introduction

Thank you for the nice conversation. As promised, the front-end case. You can e-mail the finished case to me (Luuk@socialbrothers.nl)
Good luck!

## The case

You can see the picture (example.png or the InVision Link I’ve send you) which you have to recreate. We like to see websites that are repsonsive and look well on smaller devices.
We do like new techniques, but more important is that the website works in all modern browsers (IE11+) Furthermore it is important to have a high
score in Lighthouse with the newest web techniques
(https://developers.google.com/web/tools/lighthouse/).
The intention is that you can make blogpost in the left corner, you can use our API where you can
save these messages. In the right corner you have to see the blogpost. When you click the button
‘meer laden’ it’s important to load more messages in the container.

## Where do we look at?

You are completely free in how you deliver this project as long as you do it in React. The primary aspect we will be looking at is if you know the tools you are using and if you use them in a structured, consistent way. Since it's a front-end appliance, we will - ofcourse - also be looking at the design and performance aspect. These are the basic critera, so please suprise us with you skills!

- Accuracy of the example
- Attention for the performance of the website
- Structured code
- New techniques
- Good understanding of programming principles

## The API

You can find the API on this location: http://178.62.198.162/api/. You need to provide a ‘token’-header with the value of pj11daaQRz7zUIH56B9Z for authentication. This means this is not a bearer token or anything.
The API has the next endpoints

- `GET /posts?page={pageNr}`
- `GET /categories`
- `POST /posts` (title: string, content: string, category_id: number)
