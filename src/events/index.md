---
layout: "layouts/events.njk"
pageClass: "events"
---

<div class="red">
{% markdown %}
## test2


### test RTE
{% endmarkdown %}
</div>
{% for event in collections.events %}

<article class="article-recent">
    <div class="article-recent-main">
        <h2 class="article-title">{{ event.data.title }}</h2>
        <p>{{ event.data.description }}</p>
        <p class="article-body">{{ event.templateContent | safe }}</p>
       <!-- <a href="#" class="article-read-more">continue reading</a> -->
    </div>
    <div class="article-recent-secondary">
        <img src="{{ event.data.featuredImage | url }}" alt="Glebe Interior" class="article-image">
        <p class="article-info">July 19, 2019  |  3 comments</p>
    </div>
</article>
{% endfor %}

<!-- 




Trinity’s ‘College Gallery’: The Swing of the Sixties
4th July – 27th September 2015
The Glebe Gallery is delighted to present a special selection of 20th century works from The Trinity College Dublin Art Collections. Originally conceived by Lismore Castle Arts with invited curator and Trinity alumnus Richard Wood, the exhibition features key Irish and international pieces by Josef Albers, Karel Appel, Carlos Cruz-Diez, Patrick Collins, Barrie Cooke, Micheal Farrell, Robert Indiana, Cecil King, Roy Lichtenstein, Nano Reid, Patrick Scott, William Scott, Peter Sedgley, and Victor Vasarely, accompanied by a portrait of George Dawson by Mick O’Dea.

Download the exhibition pamphlet


Hunter: An exhibition by Sarah Lewtas
28th May – 28th June 2015
Sarah Lewtas has lived and worked in Co Donegal for over thirty years and has previously contributed to a number of exhibitions here at the Glebe Gallery. This is her first solo exhibition in this gallery and includes work produced over a period of years and in a variety of media – from drawing to video and from books bound in crow’s wings to sewn and quilted installations.

For further information you can download the exhibition catalogue here.

To visit Sarah’s website click here.


An Exhibition of Ceramics by Con Lynch
7th September – 28th September 2014
Con Lynch is a Sligo-based ceramicist. The pots in this exhibition are all recent works. They are made from clays and glazes Con collected in the North West of Ireland. The show is intensely beautiful.

Many of the pots are Raku fired. The term Raku, in Japanese, means ‘enjoyment’, ‘satisfaction’, or ‘comfort’. The word refers to a type of ware and also to an entire process and belief. It originated in the sixteenth century during the construction of a palace in Kyoto called Jurakudai. Before the mid-twentieth century American potters, working in Japan, had become familiar with the process of Raku firing and, on returning home, began experimenting with the fast firing and cooling. From these experiments grew the practice of contempory Raku.


Patrick Scott: Image Space Light
14th July – 29th August 2014
Following the widely acclaimed exhibition at IMMA and VISUAL Centre for Contemporary Art, Carlow, The Regional Cultural Centre and Glebe House and Gallery, present Patrick Scott: IMAGE SPACE LIGHT as a single exhibition across the two venues to bring to public attention the breadth and distinction of his career as an artist, designer and architect.

Scott’s unique vision has consistently pursued formal rigour and experimentation through the calibration of line, image, space and light. He is renowned as the first Irish exponent of pure abstraction. At The Regional Cultural Centre the second part of Scott’s career is presented with a display of the artist’s tapestries, a medium in which he is matched by few in the history of 20th century design, and a selection of superlative Gold Paintings ranging in date from the 1960s to the present day. Also at the RCC are examples of Scott’s folding screens, the Tables for Meditation, and various suites of work on paper including the Gestural drawings and the Meditations prints.

The paintings exhibited at Glebe House range across the naïve style birds in schematic landscapes of the artist’s White Stag related work during the 1940s, the urban and domestic inspired ‘structural’ compositions of the 1950s, the soaked canvases of the bog and lakeland ‘process’ paintings and the explosive beauty of poured and dripped painting in the Device works of the early 1960s. There is also an early example of the contemplative Gold Paintings that combine in infinite permutations the textures of raw canvas, white tempera and gold leaf, arguably Scott’s signature expression. The Glebe Gallery also includes Scott’s design work during the 1950s and 60s and works related to ROSC ’67.


BE(LONGING): Selena Mowat at the Glebe Gallery
31st May – 1st July 2014
This was Donegal-based Scottish artist, Selena Mowat’s, first major show. Mowat was the winner of Sky’s Portrait Artist of the Year (Ireland) in 2013, and a graduate of Art and Design in the University of Dundee. This exhibition collected thirty portraits and twenty landscapes.

“The exhibition is called (Be)longing as it’s central theme is about the sense of belonging to a place and I painted the works in three different places.” – Mowat.


The Road Taken/ An Bóthar Taistealta: Derek Hill’s Donegal Legacy
7 July – 29 September 2013
Derek Hill lived in Donegal for 50 years and in that time he brought a host of iconic cultural figures to visit Donegal, contributing significantly to the local arts scene.

The Road Taken looks what happens when you choose the more interesting path, the challenges and rewards resulting from taking the more uncertain road. In Hill’s case it brought him to County Donegal, a place whose beauty and people he wanted to share with his friends.

This exhibition sought to explore Hill’s effect on the arts in Donegal and included works by internationally renowned artists like Henry Moore, Sidney Nolan, Jack Yeats, Victor Pasmore, Josef Beuys and Victor Vasarely, as well as the many Irish Artists he became close to. It also contained a wealth of never before seen archival material.

Derek Hill once inspired legendary British composer Benjamin Britten to compose a choral work in commemoration of Saint Colmcille. To celebrate the centenary of Britten’s birth, his Hymn to St. Columba was performed at the opening of the exhibition on Sunday the 7th of July at 4pm.

The Glebe Gallery/Office of Public Works presented this exhibition in association with Earagail Arts Festival. 


The Donegal Hills: Derek Hill’s Donegal Paintings
1 August – 3 October 2010
On the tenth anniversary of the death of Derek Hill the Office of Public Works exhibited a collection of his paintings. The Donegal Hills celebrated Derek’s life in Donegal with portraits and landscapes drawn from public and private collections throughout Ireland and the UK.

Some highlights from the exhibition are presented here. All images are copyrighted to the Office of Public Works, and all originals are in the Derek Hill Collection at Glebe House and Gallery.

You can download a a low-resolution PDF of the exhibition catalogue here.

<aside>
an aside
</aside>

-->