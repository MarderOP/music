import  Express  from "express";
type Path = [number, number, number, number, number, number];

interface Music {
  Chords: { Name: string; Path: Path }[];
  Song: { Play: string | Path; Interval: number }[];
}

function isMusic(obj: any): obj is Music {
  return (
    obj &&
    Array.isArray(obj.Chords) &&
    obj.Chords.every(
      (chord: { Name: any; Path: any[] }) =>
        typeof chord.Name === "string" &&
        Array.isArray(chord.Path) &&
        chord.Path.length === 6 &&
        chord.Path.every((val) => typeof val === "number")
    ) &&
    Array.isArray(obj.Song) &&
    obj.Song.every(
      (song: { Play: any; Interval: any }) =>
        (typeof song.Play === "string" ||
          (Array.isArray(song.Play) && song.Play.length === 6)) &&
        typeof song.Interval === "number"
    )
  );
}
async function play(object: any) {
  if (isMusic(object)) {
    for (const song of object.Song) {
      let chordPath: number[] | undefined;
      if (!Array.isArray(song.Play)) {
        for (const chord of object.Chords) {
          if (chord.Name === song.Play) {
            chordPath = chord.Path;
            break;
          }
        }
        if (chordPath) {
          console.log(`Currently playing ${song.Play} (${chordPath})`);
        } else {
          console.log(`Chord for ${song.Play} not found`);
        }
      } else {
        console.log(`Now playing custom combination (${song.Play})`);
      }
      await sleep(song.Interval);
    }
  } else {
    console.log("Your object's structure is not correct!");
  }
}

// Define the sleep function
function sleep(timer: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timer);
  });
}
const app = Express();
const port = 3000;
app.use(Express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
