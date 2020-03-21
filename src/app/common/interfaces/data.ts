import { Artist, Track, Collection } from "./collection";

let defaultAuthor: string = "SongILike";
let artistPrefix = "AT_";
let trackPrefix = "TK_";
let collectionPrefix = "CL_";

function getDummyArtist(): Artist[] {
  let numberOfArtist = 10;
  let artists: Artist[] = [];
  for (let i = 0; i < numberOfArtist; i++) {
    let index = i + 1;
    artists[i] = <Artist>{
      id: `${artistPrefix}${index}`,
      name: `Artist ${index}`,
      coverImage: "default-img.jpg"
    };
  }
  return artists;
}

function getDummyTrack(allArtists: Artist[]): Track[] {
  let numberOfTrack = 100;
  let tracks: Track[] = [];
  let artist: Artist = <Artist>{
    id: "artist1",
    name: "Artist 1",
    coverImage: "default-img.jpg"
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
      id: `${trackPrefix}${index}`,
      artists: artists,
      name: `Track ${index}`,
      duration: Math.floor(Math.random() * 500 + 30),
      coverImage: "default-img.jpg"
    };
  }
  return tracks;
}

function getDummyCollection(allTracks: Track[]): Collection[] {
  let numberOfCollection = 100;
  let collections: Collection[] = [];
  for (let i = 0; i < numberOfCollection; i++) {
    let index = i + 1;
    collections[i] = <Collection>{
      id: `${collectionPrefix}${index}`,
      displayedName: `Collection ${index}`,
      author: defaultAuthor,
      tracks: allTracks || [],
      coverImage: "default-img.jpg"
    };
  }
  return collections;
}

let artists = getDummyArtist();
let tracks = getDummyTrack(artists);
let collections = getDummyCollection(tracks);
let userCollectionIds = [
  `${collectionPrefix}1`,
  `${collectionPrefix}2`,
  `${collectionPrefix}3`,
  `${collectionPrefix}4`,
  `${collectionPrefix}5`,
  `${collectionPrefix}6`,
  `${collectionPrefix}7`,
  `${collectionPrefix}8`,
  `${collectionPrefix}9`,
  `${collectionPrefix}10`,
  `${collectionPrefix}11`,
  `${collectionPrefix}12`
];
let userTrackIds = [
  `${trackPrefix}1`,
  `${trackPrefix}2`,
  `${trackPrefix}3`,
  `${trackPrefix}4`,
  `${trackPrefix}5`
];
let userArtistIds = [
  `${artistPrefix}1`,
  `${artistPrefix}2`,
  `${artistPrefix}3`
];
export let DATA = {
  library: {
    collections: collections,
    tracks: tracks,
    artists: artists
  },
  user: {
    collections: collections.filter(x => userCollectionIds.includes(x.id)),
    tracks: tracks.filter(x => userTrackIds.includes(x.id)),
    artists: artists.filter(x => userArtistIds.includes(x.id)),
    playing: {
      trackId: '',
      collectionId: ''
    }
  }
};
