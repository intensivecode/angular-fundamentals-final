# Uppgift: Feed

I denna uppgift ska du implementera ett antal komponenter för att rendera en simpel "feed".

Implementera komponenterna som är listade nedan

- `Feed komponenten`

  Ska rendera en _CardList_ komponent och skicka in items listan som input.

- `CardList komponenten`

  Ska ta emot en items lista som input och rendera motsvarande _Card_ komponent.

- `Card komponenten`

  Använd följande markup för _Card_ komponenten

  ```html
  <div class="card card-medium">
    <p class="card-title">{{ title.toUpperCase() }}</p>
    <div><img class="card-image" [src]="image" alt="" /></div>
  </div>
  ```

  Denna komponent renderar _title_ med versaler.

- EXTRAUPPGIFT:

  Just nu renderas en _Card_ med en default-bredd på 350px (se CSS klassen _card-medium_ i `card.component.css`).

  Gör _Card_ komponenten mer flexibel genom att skicka in och ta emot ytterligare en (optional) input, _size_, med en av följande string-värden: **small**, **medium** och **large**.

  Komponenten bör **inte** innehålla logik för att avgöra själva pixelvärdet för bredden. Dessa värden är satta i CSS-filen. Komponenten ska kombinera _size_ input med CSS-klasserna som finns i `card.component.css` på ett generiskt sätt.

  Om _size_ inte skickas in till komponenten ska default-värdet vara **medium**.
