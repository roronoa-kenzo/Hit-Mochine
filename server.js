const http = require('http');

const hitParade = [
  { artiste: 'Charlu', titre: 'Je m\'appelle Charlu', vues: 0 },
  { artiste: 'Lili', titre: 'Chez O\'clock', vues: 0 },
  { artiste: 'Bob', titre: 'La chanson de Bob', vues: 0 }
];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Je m\'appelle Charlu, je m\'appelle Lili, vous êtes chez O\'clock.');
    hitParade[0].vues++;
  } else if (req.url === '/classement') {
    let classement = '';
    hitParade.forEach((chanson, index) => {
      classement += `${index + 1}. ${chanson.artiste} - ${chanson.titre}\n`;
    });
    res.write(classement);
  } else if (req.url === '/stats') {
    res.write(`La chanson a été vue ${hitParade[0].vues} fois.`);
  } else {
    res.statusCode = 404;
    res.write('404, page non trouvée');
  }
  res.end();
});

server.listen(3000);







