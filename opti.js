function testTimeFunc(func, ...args)
{
    let start = performance.now();
    let r = func(...args);
    let end = performance.now();

    console.log('function : ' + func.name + ' took ' + (end-start) + ' ms' );
}

const artist = [
  { id: "1", name: "Coco", genre: "Pop", stage: "Main Stage" },
  { id: "2", name: "Franky Vincent le restaurant", genre: "Jazz", stage: "Jazz Lounge" },
  { id: "3", name: "Michel l'ingénieur informaticien", genre: "Electro", stage: "Electro Arena" },
  { id: "4", name: "Vincent Lagaff", genre: "Comedy", stage: "Comedy Club" },
  { id: "5", name: "Zizi Jeanmaire", genre: "Classical", stage: "Classical Hall" },
];

const stage = [
  { id: "1", name: "Main Stage", genres: ["Pop", "Rock"] },
  { id: "2", name: "Jazz Lounge", genres: ["Jazz", "Blues"] },
  { id: "3", name: "Electro Arena", genres: ["Electro", "Techno"] },
  { id: "4", name: "Comedy Club", genres: ["Comedy", "Stand-up"] },
  { id: "5", name: "Classical Hall", genres: ["Classical", "Opera"] },
];



// Grand ensemble de données
const largeArtistsList = Array.from({ length: 10000 }, (_, i) => ({
  id: String(i + 1),
  name: `Artist ${i + 1}`,
}));
// ----------

  
  function findArtistIndex(artists, name) {
    for (let i = 0; i < artists.length; i++) {
      if (artists[i].name === name) {
        return artists[i].id;
      }
    }
    return -1;
  }

  function findArtistIndexOpti(artists, name) {
    const artistMap = new Map();
    for (let i = 0; i < artists.length; i++) {
      artistMap.set(artists[i].name, artists[i].id);
    }

    return artistMap.get(name) || -1;
  }


  // ----------
  

  function assignStages(artists, stages) {
    for (let stage of stages) {
      for (let artist of artists) {
        if (stage.genres.includes(artist.genre)) {
          artist.stage = stage.id;
          break;
        }
      }
    }
  }

  function assignStagesOpti(artists, stages) {
    let genreToStage = new Map();

    for (let stage of stages) {
        for (let genre of stage.genres) {
            if (!genreToStage.has(genre)) {
                genreToStage.set(genre, stage.id);
            }
        }
    }

    for (let artist of artists) {
        artist.stage = genreToStage.get(artist.genre) || null;
    }
  }

  

console.log(findArtistIndexOpti(artist, "Zizi Jeanmaire"));
testTimeFunc(findArtistIndex, largeArtistsList, "Artist 500");
testTimeFunc(findArtistIndexOpti, largeArtistsList, "Artist 500");

console.log("----------");

console.log(assignStages(artist, stage));
testTimeFunc(assignStagesOpti, artist, stage);
testTimeFunc(assignStagesOpti, artist, stage);