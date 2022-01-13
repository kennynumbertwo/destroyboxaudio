const credits = [
  {
    artist: 'The Red Pears', 
    title: 'You Thought We Left...',
    type: 'album', 
    credited: 'Producer / Mixer', 
    art: 'https://drive.google.com/uc?export=view&id=1jR4hwah-XJr_UTNqQD5mlNYTOxxHZw8-', 
    link:'https://open.spotify.com/album/3njVnwW9KBX7kIZDJdA1dS?si=bdk68dH8RraJ4jRaa0uXpg'
  },
  {
    artist: 'The Red Pears', 
    title: 'House of Mirrors',
    type: 'song', 
    credited: 'Producer / Mixer', 
    art: 'https://drive.google.com/uc?export=view&id=1WgB6WdISqJn1dpdnxO4GM7s62jO7kR0z', 
    link:'https://open.spotify.com/album/39upnCEJaU8sbLYHLP8psE?si=O32nw-sPQK6ZGXjbUkCeJg'
  },
  {
    artist: 'The Red Pears', 
    title: 'Not In The Cards',
    type: 'song', 
    credited: 'Producer / Mixer', 
    art: 'https://drive.google.com/uc?export=view&id=1GM_NsteDFqoA63sQ8rHpimGFTOMiVCKX', 
    link:'https://open.spotify.com/track/68xkV0MCg8M8dwH4d4Zl31?si=a684eac057c441a2'
  },
  {
    artist: 'The Red Pears', 
    title: 'Twisted Colours',
    type: 'song', 
    credited: 'Producer / Mixer', 
    art: 'https://drive.google.com/uc?export=view&id=1C21kMrAISK0AHcXf3C_X_ZCzA6YMLb8x', 
    link:'https://open.spotify.com/track/74elvKsYrI2xvZRy5AC9bx?si=58f07c52bcfc4475'
  },
  {
    artist: 'AO Gerber', 
    title: 'Stangers',
    type: 'song', 
    credited: 'Co-Engineer', 
    art: 'https://drive.google.com/uc?export=view&id=10XXPfOXM5Dy5f2AXSb2vLuTekXhqskMK', 
    link:'https://open.spotify.com/track/6wPoILrqBUubxNQZbWfB61?si=KgNLix8zSuySXSOxkhiPLg'
  },
  {
    artist: 'The Red Pears', 
    title: 'Alicia',
    type: 'album',  
    credited: 'Producer / Engineer / Mixer', 
    art: 'https://drive.google.com/uc?export=view&id=1Ge-CJJjgWCscPpuL65kOg5ZTU1PocNiJ', 
    link:'https://open.spotify.com/album/2oTUGXRsQrhLkkgDfVKesr?si=GwXbu2qmTLe15sBgaWrhyw'
  },
  {
    artist: 'AO Gerber', 
    title: 'Another Place To Need',
    type: 'album', 
    credited: 'Co-Engineer', 
    art: 'https://drive.google.com/uc?export=view&id=1mWesgBLoO7aBF3ley-6yPGgKmigtHYEV', 
    link:'https://open.spotify.com/album/6v7Bk957OyJvyx4cDvMWdP?si=-BwvCS8eT0qf5qyXATB8zg'
  },
  {
    artist: 'Danny J. Campos', 
    title: 'Sunbather',
    type: 'song', 
    credited: 'Producer / Engineer / Mixer', 
    art: 'https://drive.google.com/uc?export=view&id=103LNasEhqVgpJxFnpAzoetBE9NJVCMTZ', 
    link:'https://open.spotify.com/track/0yfkUqBp8AMkNHIGeCK7J6?si=e370656fd32a46f2'
  },

  {
    artist: 'The Red Pears', 
    title: 'Dreams',
    type: 'song', 
    credited: 'Producer / Engineer / Mixer', 
    art: 'https://drive.google.com/uc?export=view&id=1DhbM9UOeY-KGejDp8VW7j1Or0QVbP7po', 
    link:'https://open.spotify.com/album/5eIdEm4FjnQljB0ZdZ5HN2?si=jEEQN8KCQfqr3-NwAYfUuw'
  },
  {
    artist: 'The Red Pears', 
    title: 'Somehow',
    type: 'song', 
    credited: 'Producer / Engineer / Mixer', 
    art: 'https://drive.google.com/uc?export=view&id=1Mqn9yecuUn0Vw4-u6vxMr-JTX6hEvJey', 
    link:'https://open.spotify.com/album/7AQCTvJrC0rTeDVOsSDIKX?si=rvOQia_yRc6ZDVgrAhHUsQ'
  },
  {
    artist: 'DMTV', 
    title: 'EP.1',
    type: 'album', 
    credited: 'Producer / Co-Engineer', 
    art: 'https://drive.google.com/uc?export=view&id=1HBLr67TW7-Dnh5oxHopPjAo1DYeyqqsT', 
    link:'https://open.spotify.com/album/1IsLnKzfXnvjWRCBR7lRes?si=4O3dW2TiSzuLNMgGTRxTlg'
  },
  {
    artist: 'Cuffed Up', 
    title: 'Mother / Father + Small Town Kid',
    type: 'album', 
    credited: 'Co-Engineer', 
    art: 'https://drive.google.com/uc?export=view&id=1r2eIYC2GnjrNADVK8DE2qMbC65EXznC4', 
    link:'https://open.spotify.com/album/6hXA5V65MupMVP6UYdPuQZ?si=tLnvBCm7Ta25LPCR-PdklQ'
  },
  {
    artist: 'Cuffed Up', 
    title: 'Cuffed Up',
    type: 'album', 
    credited: 'Co-Engineer', 
    art: 'https://drive.google.com/uc?export=view&id=1-3Yl6i2Se0fWinNq9pSXpkXAZkAvOOrj', 
    link:'https://open.spotify.com/album/6zrhobrqazbckJBMYeKLti?si=x818ryuQSFmmnLpKkpLRJw'
  },
  {
    artist: 'Opinions', 
    title: 'Mass Extinction Sale / A Wake',
    type: 'album', 
    credited: 'Producer / Co-Engineer', 
    art: 'https://drive.google.com/uc?export=view&id=1PU81bjJ0reZXo6vADxj9TxD2_kuKmjqE', 
    link:'https://open.spotify.com/album/1OiXgSUDwONf9ViBtTHrPr?si=RvTu4P8zSyqAtCif1DlLcg'
  },
  {
    artist: 'Opinions', 
    title: 'Opinions',
    type: 'album', 
    credited: 'Producer / Engineer / Mixer', 
    art: 'https://drive.google.com/uc?export=view&id=1OY9-OMKBMv3OsszKS_m2GJRZFSEMM8jx', 
    link:'https://open.spotify.com/album/1phS5vsracbgoZejcDIEcL?si=ZfgnznCkT5S5tZP5sfuBSw'
  },
  {
    artist: 'Minnow', 
    title: 'Exploded View Of Home',
    type: 'album', 
    credited: 'Producer / Engineer / Mixer', 
    art: 'https://drive.google.com/uc?export=view&id=1z2ZmjvcFkh4ncVvNqkbBQM1zP6MAstOh', 
    link:'https://open.spotify.com/album/4RNW1tj86X4KseYe9xRgjR?si=nz_jnwCvSPmgwRV4A7dxpg'
  },
  {
    artist: 'Minnow', 
    title: 'Vacation Forever',
    type: 'song', 
    credited: 'Producer / Co-Engineer', 
    art: 'https://drive.google.com/uc?export=view&id=1uGB5aJ9qN3ioR9vAbxmrZFAfHmhkiDgu', 
    link:'https://open.spotify.com/track/0KdRneA3I8I1PxqD2HoWbw?si=MC7GxFtISueaQNO6B2CBmw'
  },
  {
    artist: 'Unconditional Arms', 
    title: 'Westbrae Sunrise',
    type: 'song', 
    credited: 'Co-Engineer', 
    art: 'https://drive.google.com/uc?export=view&id=1W3w5M9rQALZmWLKvmIIt8bSZiLQfRNJw', 
    link:'https://open.spotify.com/track/7lYi9jtzKAqOz0krUAxChF?si=t-u_tHL2TsG7KnkH8gzwBg'
  },
]

export default credits;