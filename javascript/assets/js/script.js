// 결과보기
// 재목울 클릭했을 때 ~~~~실행해라!

// for문을 이용해서 1~12까지 출력!!!
for(let i=1; i<=23; i++){
    document.querySelector(".result"+i+"t h4").addEventListener("click", function(){
        document.querySelector(".result"+i).style.display = "block";
    });
}

// forEach()을 이용해서 1~12까지 출력
// document.querySelectorAll(".result h4").forEach(function (el) {
//     // console.log(el)
//     el.addEventListener("click", function(){
//         alert("클릭");
//     })
// });

// const num = [100, 200, 300, 400, 500];

// for(let i=0; i<5; i++){
//     console.log(num[i])
// }

// num.forEach(function(el){
//     console.log(el) //100 200 300 400 500
//     console.log(index) // 0 1 2 3 4

// });