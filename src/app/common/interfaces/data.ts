import { Artist, Track, Collection } from './collection';

let defaultAuthor: string = "SongILike";

function getDummyArtist(): Artist[] {
  let numberOfArtist = 10;
  let artists: Artist[] = [];
  for (let i = 0; i < numberOfArtist; i++) {
    let index = i + 1;
    artists[i] = <Artist>{
      id: `AT_${index}`,
      name: `Artist ${index}`,
      coverImage: 'default-img.jpg'
    };
  }
  return artists;
}

function getDummyTrack(allArtists: Artist[]): Track[] {
  let numberOfTrack = 10;
  let tracks: Track[] = [];
  let artist: Artist = <Artist>{
    id: "artist1",
    name: "Artist 1",
    coverImage: 'default-img.jpg'
  };

  for (let i = 0; i < numberOfTrack; i++) {
    let artists = [];
    let index = i + 1;

    artists.push(allArtists[0] || artist);
    if (allArtists[1] && index % 2 == 0) {
      artists.push(allArtists[1]);
    }
    if (allArtists[2] && index % 3 == 0) {
      artists.push(allArtists[2]);
    }
    
    tracks[i] = <Track>{
      id: `TK_${index}`,
      artists: artists,
      name: `Track ${index}`,
      duration: Math.floor((Math.random() * 500) + 30),
      coverImage: 'default-img.jpg'
    };
  }
  return tracks;
}

function getDummyCollection(allTracks: Track[]): Collection[] {
  let numberOfCollection = 3;
  let collections: Collection[] = [];
  for (let i = 0; i < numberOfCollection; i++) {
    let index = i + 1;
    collections[i] = <Collection>{
      id: `CL_${index}`,
      displayedName: `Collection ${index}`,
      author: defaultAuthor,
      tracks: allTracks || [],
      coverImage: 'default-img.jpg'
    };
  }
  return collections;
}

let artists = getDummyArtist();
let tracks = getDummyTrack(artists);
let collections = getDummyCollection(tracks);

export let DATA = {
  userCollections: collections
};
