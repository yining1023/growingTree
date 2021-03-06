(function () {

    // Set properties

    TweenLite.defaultEase = Power2.easeOut

    TweenLite.set('.bp__flower--b', {
        transformOrigin: 'center',
        scale: .4
    })
    
    TweenLite.set('.text1', {
        transformOrigin: 'center',
        opacity: 0
    })
    
    TweenLite.set('.text2', {
        transformOrigin: 'center',
        opacity: 0
    })
    
    TweenLite.set('.text3', {
        transformOrigin: 'center',
        opacity: 0
    })
    
    TweenLite.set('.text4', {
        transformOrigin: 'center',
        opacity: 0
    })
    
    TweenLite.set('.text5', {
        transformOrigin: 'center',
        opacity: 0
    })
    
    TweenLite.set('.text6', {
        transformOrigin: 'center',
        opacity: 0
    })
    
    TweenLite.set('.text7', {
        transformOrigin: 'center',
        opacity: 0
    })
    
    TweenLite.set('.text8', {
        transformOrigin: 'center',
        opacity: 0
    })
    
    TweenLite.set('.bp__flower--03-a', {
        transformOrigin: 'center',
        scale: 1
    })
    TweenLite.set('.bp__flower--01-a', {
        transformOrigin: 'center',
        scale: 1.1
    })
    TweenLite.set('.bp__flower--07-a', {
        transformOrigin: 'center',
        scale: 1.3
    })
    TweenLite.set('.bp__flower--02-a', {
        transformOrigin: 'center',
        scale: 0.8
    })
    TweenLite.set('.bp__flower--02-a', { x: 115, y: 35 })
    TweenLite.set('.bp__flower--02-b', { x: 115, y: 35 })
    TweenLite.set('.bp__flower--03-a', { x: 170, y: 16 })
    TweenLite.set('.bp__flower--03-b', { x: 170, y: 16 })
    TweenLite.set('.bp__flower--04-a', { x: 71, y: 111 })
    TweenLite.set('.bp__flower--04-b', { x: 71, y: 111 })
    TweenLite.set('.bp__flower--05-a', { x: -90, y: 87 })
    TweenLite.set('.bp__flower--05-b', { x: -90, y: 87 })
    TweenLite.set('.bp__flower--06-a', { x: -143, y: 24 })
    TweenLite.set('.bp__flower--06-b', { x: -143, y: 24 })
    TweenLite.set('.bp__flower--07-a', { x: -60, y: -28 })
    TweenLite.set('.bp__flower--07-b', { x: -60, y: -28 })

    // Build stalk object

    let stalk = {};

    [].forEach.call(document.querySelectorAll('.bp__stalk'), el => {
        const lenght = el.getTotalLength()
        stalk[el.getAttribute('data-n')] = { el, lenght }
        el.style.strokeDasharray  = lenght
        el.style.strokeDashoffset = lenght
    })

    // Animate
    
    const flowerAAnimation = {
        morphSVG: "#bp__flower-shape",
        opacity: 1
    }
    const flowerBAnimation = {
        scale: 1,
        opacity: 1
    }
    const flowerB2Animation = {
        scale: .8,
        opacity: 1
    }
    const textAnimation = {
        scale: 1,
        opacity: 1
    }

    new TimelineMax({ repeat: -1, repeatDelay: 4 })
//first branch
    .to('.text1', 3, textAnimation)
    .to(stalk['01-a'].el, 8, { strokeDashoffset: 0 }, '-=0.2')
    
    
    
    .to('.bp__flower--06-a', 2, flowerAAnimation, '-=2.1')
    .to('.bp__flower--06-b', 2.2, flowerBAnimation, '-=2.1')
    
    .to('.text2', 3, textAnimation)
    
    .to(stalk['01-b'].el, 5, { strokeDashoffset: 0 }, '-=3')
    
    .to('.bp__flower--05-a', 2, flowerAAnimation, '-=2.1')
    .to('.bp__flower--05-b', 2.2, flowerB2Animation, '-=2.1')
    
    .to('.text3', 3, textAnimation)
    
    .to(stalk['01-c'].el, 7, { strokeDashoffset: 0 }, '-=3')
    
    .to('.bp__flower--01-a', 2, flowerAAnimation, '-=1.5')
    .to('.bp__flower--01-b', 2.2, flowerBAnimation, '-=1.9')
    
    .to('.text4', 3, textAnimation)
    
//third branch
    .to(stalk['03-a'].el, 7, { strokeDashoffset: 0 }, '-=4')
    
    .to('.bp__flower--02-a', 2, flowerAAnimation, '-=2.1')
    .to('.bp__flower--02-b', 2.2, flowerB2Animation, '-=2.1')
    
    .to('.text5', 3, textAnimation)
    
    .to(stalk['03-b'].el, 5, { strokeDashoffset: 0 }, '-=3')
    
    .to('.bp__flower--04-a', 2, flowerAAnimation, '-=2.1')
    .to('.bp__flower--04-b', 2.2, flowerBAnimation, '-=2.1')
    
    .to('.text6', 3, textAnimation)
    
//second branch
    .to(stalk['02-a'].el, 10, { strokeDashoffset: 0 }, '-=3.8')
  
    .to('.bp__flower--03-a', 2, flowerAAnimation, '-=2.1')
    .to('.bp__flower--03-b', 2.2, flowerB2Animation, '-=2.1')
    
    .to('.text7', 3, textAnimation)
    
    .to(stalk['02-b'].el, 5, { strokeDashoffset: 0 }, '-=3')

    .to('.bp__flower--07-a', 2, flowerAAnimation, '-=2.1')
    .to('.bp__flower--07-b', 2.2, flowerBAnimation, '-=2.1')
    
    .to('.text8', 3, textAnimation)

    .timeScale(2)

})()
