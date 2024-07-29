window.onload = function(){
    //  01. gnb 애니메이션

    const menuOpen = document.querySelector('.gnb .menuOpen');
    const menuBox = document.querySelector('.gnb .menuBox');

    menuOpen.addEventListener('click', () => {
        menuBox.classList.toggle('on');
    });


    // scrollTrigger 
    // GSAP 라이브러리의 스크롤트리거를 등록
    gsap .registerPlugin(ScrollTrigger);

    // 01. visual
    gsap.timeline({
        scrollTrigger: {
            trigger: '.visual',
            start: '100% 100%',
            // .visual의 100%  브라우저의 100%
            end: '100% 0%',
            scrub: 1,
            // scrub은 ScrollTrigger의 이벤트가 스크롤이 사용될때만 재생되도록 만들어주는 속성 (안적으면 트리거시점 나오면 스크롤안해도 계속 애니 진행됨)
            // scrub은 true 나 숫자로 값을 써줄수 있는데 true 같은 경우는 스크롤하면 애니 바로 멈추고 숫자는 그 시점을 따라잡는데 N초가 걸려서 애니가 더 부드러움
            // markers: true
        }
    })
    .to('.logoWrap #j', {x:-150, y:250, rotate:20, ease:'none', duration:5,}, 0)
    .to('.logoWrap #y', {x:-30, y:150, rotate:-10, ease:'none', duration:5,}, 0)
    .to('.logoWrap #o', {x:0, y:400, rotate:-10, ease:'none', duration:5,}, 0)
    .to('.logoWrap #u', {x:50, y:300, rotate:10, ease:'none', duration:5,}, 0)
    .to('.logoWrap #n', {x:100, y:100, rotate:-10, ease:'none', duration:5,}, 0)
    .to('.logoWrap #g', {x:50, y:450, rotate:20, ease:'none', duration:5,}, 0)

    // 02. 공통적 .mainTextBox .title i animation
    gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1,
                // markers: true
            }
        })
        .fromTo(selector, {overflow:'hidden', y:150}, {y:0, ease:'none', duration:5}, 0)
    });

    // 03. 공통적 .subText p animation
    gsap.utils.toArray('.subText p').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                // 시작하자마자 끝난다.
                scrub: 1,
                markers: true
            }
        })
        .fromTo(selector, {opacity:0, y:100}, {opacity:1, y:0, ease:'none', duration:5}, 0)
    });

    
}