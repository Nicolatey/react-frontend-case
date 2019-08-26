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
De API staat op de volgende locatie: `http://178.62.198.162/api/`.
Om de API te gebruiken dien je 'token'-header mee te sturen met als waarde `pj11daaQRz7zUIH56B9Z`.

De API beschikt over de volgende endpoints:

* `GET /posts`
* `GET /categories` 
* `POST /posts` (title, content, category_id)

## Handige tips
Als je op je computer PHP installeert kan je gemakelijk via je commandline een PHP-server starten. Ga in je commandline naar deze folder en voer dan het volgende commando uit om de PHP-server op te starten:
```
php -S localhost:8000
```
Vervolgens kan je naar `http://localhost:8000/src/index.php` om de website te bekijken. Er zijn ook andere manieren om een lokale PHP-server op te starten, dat is helemaal aan jou.




## Introduction
Thank you for the nice conversation. As promised, the front-end case. You can e-mail the finished case to me (Luuk@socialbrothers.nl)
Good luck!

## The case
You can see the picture (example.png or the InVision Link I’ve send you) which you have to recreate. We like to see websites that are repsonsive and look well on smaller devices.
We do like new techniques, but more important is that the website works in all modern browsers (IE11+)  Furthermore it is important to have a high
score in Lighthouse with the newest web techniques
(https://developers.google.com/web/tools/lighthouse/).
The intention is that you can make blogpost in the left corner, you can use our API where you can
save these messages. In the right corner you have to see the blogpost. When you click the button
‘meer laden’ it’s important to load more messages in the container.

## Where do we look at?
We have made a base project and you are free in everything you make but it is important that the
result is the same as our design. So take your freedom and surprise us. The next things are important.
- Accuracy of the example
- Attention for the performance of the website
- Structured code
- New techniques
- Good understanding of programming principles

## The API
You can find the API on this location: http://178.62.198.162/api/. You need to provide a ‘token’-header with the value of pj11daaQRz7zUIH56B9Z for authentication,
The API has the next endpoints:
* `GET /posts`
* `GET /categories` 
* `POST /posts` (title, content, category_id)

## Tips
When you install PHP on your computer you can easily start a PHP- Server with Commandline.
Go in to your Commandline to this folder and enter the next commando to start your PHP Server.
```
php -S localhost:8000
```
After that you can go to `http://localhost:8000/src/index.php`. To see your website. There are
other ways to start a local PHP-server, it is your own choice.