var switchButton = document.querySelector(".switch_button");
var switchBtnRight = document.querySelectorAll(".switch_button-case.right");
var switchBtnLeft = document.querySelectorAll(".switch_button-case.left");

//설명보기
switchBtnLeft.forEach((btnLeft) => {
  // btnLeft(왼쪽 버튼)
  btnLeft.addEventListener("click", function () {
    // class: active-case(글씨 색상을 흰색에서 검은색으로)
    btnLeft.classList.add("active-case");

    // btnR(오른쪽 버튼) 찾아서 .active-case 지우기
    const btnR = btnLeft.parentNode;
    const btnRSearch = btnR.querySelector(".right");
    btnRSearch.classList.remove("active-case");

    // targetBtnL: switch-button(버튼 전체박스)
    const targetBtnL = btnLeft.parentNode;
    // active 왼쪽으로 이동
    const activeL = targetBtnL.querySelector(".active");
    activeL.style.left = "0";

    // code view 위로 올리기
    const targetT = btnLeft.parentNode.parentNode.parentNode;

    const codeT = targetT.querySelector(".code");
    gsap.to(codeT, {
      duration: 0.3,
      top: "-100%",
    });
  });
});
// 코드보기
switchBtnRight.forEach((btnRight) => {
  // btnRight(오른쪽 버튼)
  btnRight.addEventListener("click", function () {
    // class: active-case(글씨 색상을 흰색에서 검은색으로)
    btnRight.classList.add("active-case");

    // btnL(완쪽 버튼)찾아서 .active-case 지우기
    const btnL = btnRight.parentNode;
    const btnLSearch = btnL.querySelector(".left");
    btnLSearch.classList.remove("active-case");

    // targetBtn: switch-button(버튼 전체 박스)
    const targetBtnR = btnRight.parentNode;

    // active 오른쪽으로 이동
    const activeR = targetBtnR.querySelector(".active");
    activeR.style.left = "50%";

    // code view 나타내기
    const targetR = btnRight.parentNode.parentNode.parentNode;
    const codeB = targetR.querySelector(".code");
    gsap.to(codeB, {
      duration: 0.3,
      top: 0,
    });
  });
});
