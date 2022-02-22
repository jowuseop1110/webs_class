
// // highlight
// const highlight = function(){
//             hljs.highlightAll();
//         }


//modal
const modal = function () {
    //버튼을 클릭하면 modal창을 보이게 해주세요(show 추가)
    document.querySelector(".source-btn").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("show");
        document.querySelector("#modal").classList.remove("hide");
    });

    // 닫기 버튼을 클릭하면 modal창이 사라지게 해주세요(show 삭제)
    document.querySelector(".modal-close").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("hide");
    })
}
// modal();


//tabmenu
const tabMenu = function () {
    const tabBtn = document.querySelectorAll(".view-tilte > ul > li");
    const tabCont = document.querySelectorAll(".view-cont > div");

    //각각의 버튼을 클릭하면 경고창을~~~
    tabBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            //모든 클래스 active 삭제
            tabBtn.forEach(el => {
                el.classList.remove("active");
            });
            //내가 클릭한 active 추가
            btn.classList.add("active");
            // 모든 컨텐츠 박스 안보이게~
            tabCont.forEach(el => {
                el.style.display = "none";
            });
            // 내가 클릭한 콘텐츠 박스를 보이게
            tabCont[index].style.display = "block";
        })
    })
}
// tabMenu();

   // 소스보기
   const source = function () {

    document.querySelector(".source_btn").addEventListener("click", () => {
        document.querySelector("#source").classList.add("show");
        document.querySelector("#source").classList.remove("hide");
    })
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector("#source").classList.add("hide");
    })
    }
    source();
    
    const tabMenubar = function () {
    const menuBar = document.querySelectorAll(".menu-bar > span");
    const menuCount = document.querySelectorAll(".main > div");
    
    menuBar.forEach((btn, index) => {
        btn.addEventListener("click", () => {
    
            menuBar.forEach(el => {
                el.classList.remove("active");
            });
            btn.classList.add("active");
    
            menuCount.forEach(el => {
                el.style.display = "none";
            });
            menuCount[index].style.display = "block";
        })
    })
    
    }
    tabMenubar();



