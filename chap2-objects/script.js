//Represent your pet:
let pet = {
  name: "Kiwi",
  species: "cat",
  nicknames: ["kitty", "sweetie", "turd"],
  age: 8
}

console.log(pet);

//Accessing property values:
const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
      formed: 1960,
      disbanded: 1970
  },
  members: [
      {
          name: "George Harrison",
          birth: 1943,
          death: 2001
      },
      {
          name: "Paul McCartney",
          birth: 1942,
          death: null
      },
      {
          name: "John Lennon",
          birth: 1940,
          death: 1980
      },
      {
          name: "Ringo Starr",
          birth: 1940,
          death: null
      }
  ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`);

//Challenge: Political Campaign

let campaign = {
  district: "5th Congessional District",
  platform: {
    taxes: "more",
    jobs: "more",
    infrastructure: "tall buildings, but forget the roads",
    healthcare: "meh",
    crimeAndEnforcement: "approves of annual purge",
  },
  donationFormURL: "https://givesangeryourmoney.net",
  calendar: ["Thursday", "Friday", "Saturday"],
  volunteerInfo: {
    name: "Elizabeth Sanger",
    address: "123 I Don't Care Lane",
    email: "sanger@idontcare.net",
    phone: 6152223333,
    availablity: true,
    activities: {
      phone: true,
      polls: true,
      speaking: false
    }
  },
  biography: "How to Power Grab",
  images: {
    head: "https://c8.alamy.com/comp/FWKEXD/smiling-female-politician-greeting-media-and-audience-FWKEXD.jpg",
    family: "https://thumbs.dreamstime.com/z/politician-woman-speech-young-beautiful-elegant-giving-40004380.jpg",
    constituents: "https://thumbs.dreamstime.com/z/female-politician-speaking-sign-language-translator-stock-video-k-hd-resolution-74732336.jpg"
  },
  mission: "I vow to avenge the death of my father",
  voteURL: "https://vote.org"
}

console.log(campaign);