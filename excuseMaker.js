function createExcuse() {
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "The mailman",
    "The rabbit",
    "The storm",
    "the governor",
    "the mayor",
    "the policeman"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "destroyed",
    "stole",
    "dismanteled",
    "erased",
    "sold",
    "took away",
    "auctioned",
    "donated to charity",
    "lost",
    "burnt",
    "dropped in the toilet",
    "dropped out of the car window",
    "got scammed"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "my credit card",
    "my wheels",
    "my phone",
    "my favorite glass"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "on my morning meditation",
    "while I was running my daily miles",
    "when I was chasing my dog",
    "while I was getting a new car",
    "when I was putting bandages",
    "while I was shopping"
  ];
  let index1 = Math.floor(Math.random() * who.length);
  let index2 = Math.floor(Math.random() * action.length);
  let index3 = Math.floor(Math.random() * what.length);
  let index4 = Math.floor(Math.random() * when.length);
  let excuse = who[index1] + action[index2] + what[index3] + when[index4];
  document.getElementById("excuse").innerHTML = "<p>" + excuse + "</p>";
}
onload(createExcuse());
