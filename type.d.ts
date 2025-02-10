// types.d.ts (définition des types, pas besoin de compiler)
// interface Artist {
//     id: string;
//     name: string;
// }

interface Artist {
    id: string;
    name: string;
    genre: string;
    stage: string;
  }


interface Stage {
    id: string;
    name: string;
    genres: Array<string>;
  }