function FunFact2() {

    var facts = ['とても元気だ', '昔、エジプトで人気がある', '猫の喫茶店がたくさんある', '犬より小さいい', '主に泳ぐのが好きじゃない', '寝るのが大好きだ'];

    var myFact = facts[Math.round(Math.random() * (facts.length - 1))];

    document.getElementById('facts').innerHTML = '猫は' + myFact + '。';
}
