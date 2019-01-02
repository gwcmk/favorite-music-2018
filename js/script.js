// lmao too lazy to alphabetically sort this
var songs = [
  "Virtual Self - Ghost Voices",
  "Migos - Stir Fry",
  "Diplo (feat. MO & Goldlink) - Get It Right [Remix]",
  "Calvin Harris, Dua Lipa - One Kiss",
  "Cardi B, Bad Bunny & J Balvin - I Like It",
  "Khalid, 6LACK & Ty Dolla $ign - OTW",
  "Goldlink (feat. Miguel) - Got Friends",
  "Drake - In My Feelings",
  "Meek Mill - 1am",
  "Channel Tres - Jet Black",
  "03 Greedo (feat. Lil Uzi Vert) - Never Bend (Remix)",
  "Rico Nasty - Countin’ Up",
  "Travis Scott (feat. Gunna) - Yosemite",
  "Travis Scott (feat. Drake) - Sicko Mode",
  "Ariana Grande - breathin",
  "Tyga (feat. Offset) - Taste",
  "Nao (feat. SiR) - Make It Out Alive",
  "YBN Nahmir & YBN Almighty Jay - Porsches in the Rain",
  "Troye Sivan - Bloom",
  "Young Thug (feat. Jaden Smith) - Sin",
  "Sheck Wes - Gmail",
  "Future & Juice WRLD (feat. Young Thug) - Red Bentley",
  "K/DA - POP/STARS",
  "Smino - L.M.F.",
  "KEY! & Kenny Beats - Demolition 1 + 2",
  "Meek Mill (feat. Future, Roddy Ricch, and Young Thug) - Splash Warning",
  "Meek Mill (feat. Drake) - Going Bad",
  "Meek Mill (feat. 21 Savage) - Pay You Back",
  "Rosalia - Malamente",
  "Joey Bada$$ - King Of The Jungle",
  "YoungBoy Never Broke Again (feat. Lil Uzi Vert) - What You Know",
  "Bad Bunny - Otra Noche en Miami",
  "Bad Bunny - Solo de Mí",
  "Bad Bunny (feat. Drake) - MIA",
  "J.I.D. - Working Out",
  "J.I.D. - 151 Rum",
  "A$AP Rocky (feat. Skepta) - Praise The Lord (Da Shine)",
  "Niña Dioz (feat. Lido Pimienta & Ceci Bastida) - Tambalea",
  "J. Balvin - Ambiente",
  "Nicky Jam & J Balvin (feat. Ozuna & Maluma) - X (Remix)",
  "SOB X RBE - Paramedic!",
  "SOB X RBE - Always",
  "SOB X RBE - Anti Social",
  "21 Savage - a lot",
  "21 Savage - out for the night",
  "21 Savage - 1.5",
  "IU - Bbibbi",
  "Young Thug (feat. Gunna & Lil Baby) - Chanel",
  "Metro Boomin (feat. Gunna) - Space Cadet",
  "Lil Baby (feat. Gunna & Lil Uzi Vert) - Life Goes On",
  "Dean (feat. Sulli & Rad Museum) - dayfly",
  "Zaytoven (feat. Lil Uzi Vert) - Strong",
  "Riton & Kah-Lo - Ginger",
  "Charli XCX - No Angel",
  "YG (feat. 2 Chainz, Big Sean & Nicki Minaj) - Big Bank",
  "Camila Cabello (feat. Swae Lee) - Real Friends (Remix)",
  "Pardison Fontaine (feat. Cardi B) - Backin’ It Up",
  "Little Simz - Offence",
  "Mick Jenkins - Gwendolynn’s Apprehension",
  "Joey Purp - Elastic",
  "ALLBLACK & Kenny Beats - John Madden 2",
  "Blueface - Dead Locs",
  "Black Noi$e - Wake Up",
  "Black Noi$e - Ninety6",
  "Leven Kali - Mine",
  "Heize - Sorry"
]
var sortedSongs = songs.sort();

(function () {
  var extras = document.querySelector('.extras');
  var songElement, songTitleElement;
  sortedSongs.forEach(function (title) {
    songElement = document.createElement('div');
    songTitleElement = document.createElement('small');
    songTitleElement.textContent = title;
    songElement.append(songTitleElement);
    extras.append(songElement);
  })
}());
