# Social Brothers
## Inleiding
Bedankt voor het leuke gesprek van net! 
Hierbij bijgeleverd de beloofde case, graag zien we de opdracht binnenkomen op mijn e-mailadres (luuk@socialbrothers.nl).

Succes!

## De opdracht
Bijgeleverd is een afbeelding (example.png of de InVision link die je zojuist hebt ontvangen in je inbox) die nagemaakt dient te worden. Het liefst zien we dit voorbeeld responsive zodat het ook op kleinere devices werkt. Daarnaast moet het ook werken in alle moderne browsers. Verder moet het voldoen aan de laatste webtechnieken zodat je een zo hoog mogelijk score krijgt in Lighthouse (https://developers.google.com/web/tools/lighthouse/).

De bedoeling is dat er in het linkerblok een blogberichten aangemaakt kan worden, hiervoor is er door ons een API gemaakt waar deze berichten opgeslagen kunnen worden. In het rechterblok moeten alle blogberichten worden weergegeven, zodra je klinkt op "Meer laden" dienen er meer berichten geladen te worden in het blok.

## Waar kijken wij naar?
We hebben een basisproject voor je neergezet, maar je bent volledig vrij in alles wat je doet zolang het eindresultaat maar overeen komt met het design. Neem dus de vrijheid om verbeteringen toe te passen waar mogelijk en verras ons ;). Weet wel dat wij houden van:

* Nauwkeurigheid navolgen van het design
* Mate van aandacht voor performance
* Gestructureerde, herbruikbare code
* Nieuwe technieken

## De API
De API staat op de volgende locatie: ...
Om de API te gebruiken dien je 'token'-header mee te sturen met als waarde 'pj11daaQRz7zUIH56B9Z';

De API beschikt over de volgende endpoints:
* GET /posts 
* GET /categories 
* POST /posts (title, content, category_id)

## Handige tips
Als je op je computer PHP installeert kan je gemakelijk via je commandline een PHP-server starten. Ga in je commandline naar deze folder en voer dan het volgende commando uit om de PHP-server op te starten:
```
php -S localhost:8000
```
Vervolgens kan je naar `http://localhost:8000/src/index.php` om de website te bekijken.