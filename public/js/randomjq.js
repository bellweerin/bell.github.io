$(document).ready(function () {
    var i = 0;
    var nameList = [];
    var giftList = [];
    var randomGift = [];

    $("#addbtn").on("click", function () {
        let name = document.getElementById("nameInput").value;
        let gift = document.getElementById("giftInput").value;
        console.log(name);
        console.log(gift);
        document.getElementById("nameInput").value = '';
        document.getElementById("giftInput").value = '';
        if (name != '') {
            nameList[i] = name;
            giftList[i] = gift;
            i++;

            var tbody = document.getElementById("tbody");
            var tr = document.createElement("tr");

            var tdName = document.createElement("td");
            var name1 = document.createTextNode(name);
            tdName.appendChild(name1);

            var tdGift = document.createElement("td");
            var gift1 = document.createTextNode(gift);
            tdGift.appendChild(gift1);

            tr.appendChild(tdName);
            tr.appendChild(tdGift);

            tbody.appendChild(tr);
        }
        console.log(i);
        console.log(nameList);
        console.log(giftList);

    });

    $("#ranbtn").on("click", function () {
        do {
            let r = giftList[Math.floor(Math.random() * giftList.length)];
            randomGift.push(r);
            randomGift = randomGift.filter((item, index) => {
                return randomGift.indexOf(item) === index
            });
        } while (randomGift.length < giftList.length);

        for(let i=0;i<randomGift.length;++i){
            console.log(nameList[i]);
            console.log(randomGift[i]);
            var tbody = document.getElementById("tbody2");
            var tr = document.createElement("tr");

            var tdName = document.createElement("td");
            var name2 = document.createTextNode(nameList[i]);
            tdName.appendChild(name2);

            var tdGift = document.createElement("td");
            var gift2 = document.createTextNode(randomGift[i]);
            tdGift.appendChild(gift2);

            tr.appendChild(tdName);
            tr.appendChild(tdGift);

            tbody.appendChild(tr);

        }
        while(randomGift.length>0){
            randomGift.pop();
        }

        console.log(randomGift);



    });

});