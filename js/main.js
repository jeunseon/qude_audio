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
                // markers: true
            }
        })
        .fromTo(selector, {opacity:0, y:100}, {opacity:1, y:0, ease:'none', duration:5}, 0)
    });

    // 04. con1 textAni 텍스트체인지 gsap 애니메이션. for반복문
    let textAniList = document.querySelectorAll('.con1 .textAni li');
    let textAni = gsap.timeline({repeat: -1}); // repeat 으로 무한 반복

    for(let i = 0; i < textAniList.length; i++){
        textAni.to(textAniList[i], 0.8, {opacity:1, repeat:1, delay:0, x:0, yoyo:true, ease:'power4.out'})
        // yoyo:true로 왔다 갔다 움직인다.
    }
    textAni.play();

    // 05. con4 listBox의 스크롤트리거 애니메이션
    gsap.utils.toArray('.con4 .listBox .box').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '0% 20%',
                end: '0% 0%',
                scrub: 1,
                markers: true
            }
        })
        .to(selector, {transform: 'rotateX(-10deg) scale(0.9)', transformOrigin: 'top', filter: 'brightness(0.3)'}, 0)
    });

    // 06. con3 listBox 카드 애니메이션
    gsap.utils.toArray('.con3 .listBox li').forEach((selector, t) => {
        ScrollTrigger.create({
        // ScrollTirgger.create() 를 이용해서 독립형으로 사용가능, 콜백함수로  무엇이든 콜백을 사용가능.
            trigger: selector,
            start: '30% 50%',
            onEnter: () => {
            //스크롤위치가 '시작'을 지나 앞으로 이동할 때(시작지점을 지나 스크롤을 아랫방향으로 내릴 때 진행되고 위쪽으로 올릴 땐 진행되지 않음
                gsap.set(selector, {
                    rotationX: '-65deg',
                    z: '-500px',
                    opacity: 0
                }),
                gsap.to(selector, {
                    rotationX: 0,
                    z: 0,
                    opacity: 1,
                    delay: t % 3 * .05 // % 나머지값
                })
            },
            // markers: true
        })
    });

    // 07. con5 listBox li hover 시 이미지 보이는 애니
    let listBox = document.querySelectorAll('.con5 .listBox li');
    let imgBox = document.querySelector('.con5 .imgBox');
    let img = document.querySelector('.con5 .imgBox img');

    for(let i = 0; i < listBox.length; i++){
        listBox[i].addEventListener('mouseover', () => {
            img.src = `images/img${i}.jpg`;
            gsap.set(imgBox, {scale: 0, opacity: 0, duration: .3}),
            gsap.to(imgBox, {scale: 1, opacity: 1, duration: .3})
        })
        listBox[i].addEventListener('mousemove', (e) => {
            let imgBoxX = e.pageX + 20;
            let imgBoxY = e.pageY - 20;
            imgBox.style.left = imgBoxX + 'px'
            imgBox.style.top = imgBoxY + 'px'
        })
        listBox[i].addEventListener('mouseout', () => {
            gsap.to(imgBox, {scale: 0, opacity: 0, duration: .3})
        })
    }
}