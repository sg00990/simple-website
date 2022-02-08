function FunFact() {

    var facts = ['野菜と肉を食べる', '小さい動物だ', '南極大陸以外、どこかにいる', 'ラクーンより大きいだ', '異なる色がある', '一年から三年まで生きる'];

    var myFact = facts[Math.round(Math.random() * (facts.length - 1))];

    document.getElementById('facts').innerHTML = '狐は' + myFact + '。';
}
