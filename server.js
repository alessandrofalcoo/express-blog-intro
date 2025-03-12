/* Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
 */

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('assets'))

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);

});


app.get('/', (req, res) => {
    res.send('Server del mio blog')
})


const posts = [
    {
        title: 'ciambellone',
        content: 'ciambella con una tazzina di caffè',
        img: '/images/ciambellone.jpeg',
        tags: ['zucchero', 'tazzina', 'piattino bianco']
    },
    {
        title: 'cracker barbabietola',
        content: 'crackers alla barbabietola e una mozzarella',
        img: '/images/cracker_barbabietola.jpeg',
        tags: ['tovaglietta viole', 'ripiano di legno con presa']
    },
    {
        title: 'pane fritto dolce',
        content: 'fette di pane fritto dolce messe su un vassoio di ceramica',
        img: '/images/pane_fritto_dolce.jpeg',
        tags: ['pane fritto dolce', 'vassoio di ceramica', 'tovaglietta gialla']
    },
    {
        title: 'pasta barbabietola',
        content: 'pasta al gusto barbabietola con piatto in ceramica nero e del condimento',
        img: '/images/pasta_barbabietola.jpeg',
        tags: ['pasta', 'barbabietola', 'piatto nero']
    },
    {
        title: 'torta paesana',
        content: 'torta con guarnizione gialla appoggiata su un ripiano di legno',
        img: '/images/torta_paesana.jpeg',
        tags: ['torta', 'ripiano di legno', 'guarnizione gialla']
    }
]

app.get('/bacheca', (req, res) => {
    res.json(posts)
})