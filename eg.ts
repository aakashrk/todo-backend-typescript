import { type } from "os";

enum ContentType {
    Movie = 8,
    Show = 7,
    Episode = 1,
    Season = 9,
    Music = 2,
    Trailer = 3,
    Video = 6,
    Unknown = 0
  }

//   console.log(ContentType)
let y:keyof ContentType;
console.log(y);

