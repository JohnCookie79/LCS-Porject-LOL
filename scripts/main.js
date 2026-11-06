document.addEventListener("DOMContentLoaded", () => {
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

    function getRandomNoise(min, max) {
        return Math.random() * (max - min) + min;
    }

    let cookieCount = 0;

    cookieDiv.addEventListener("click", () => {
        cookieCount++;
        cookieCounter.innerText = cookieCount;
    })

    const grandmaDialouge = [
        "Something about this webpage is wrong...",
        "Around 720ml of coffee was consumed during the making of this page.",
        "LCS? I think that means Lantentious Culmonocular Solemintation.",
        "What's up?",
        "I feel old but that's only because I haven't gotten my morning coffee.",
        "My achievements are a dissapointment.",
        "Click the cookie. I dare you.",
        "1... 2... 4... YEY!",
        "I will never get back home...",
        "Tons of easter eggs! Tons of fun! Tons of stress inducing microbacteria!",
        "Sometimes, you just have to tell yourself to... I forgot what to say.",
        "I don't have a lower body.",
        "Fun fact: I hate coffee that taste like water.",
        "I'm the best chef in the world, I burnt water.",
        "Immense effort was poured into screaming and cursing at this webpage.",
        "EUNICE!",
        "EUNICE!",
        "I don't know what to say buddy, that's a terrible wound.",
        "Me? AI? Dear, no. I am an array. You'll understand it if you know the source. *wink wink*",
        "How old am I? Probably 20 kilometers.",
        "Squid game is overrated.",
        "Sometimes I wonder if you know what it means.",
        "Bowed by the weight of centuries, he leans upon his hoe, and gazes on the ground.",
        "*inaudible noises*",
        "You spin me right round baby right round baby record baby right round round round.",
        "The end is never the end is never the end is never the end is never the end is never...",
        "I have a pen... I have a Magnesium C-352 extracted from the decay of Stagnated Rubidium Diroxide.",
        "Turn down your brightness will you?",
        "I speak a bit of spanish... Despacito!",
        "Where did my pen go? I swear I placed it on my hair or something.",
        "Tired of clicking, make a horse gallop over your phone or mouse.",
        "Imagine oxygen always asking for permission to your brain before entering your lungs."
    ]

    let isGrandmaTalking = false;

    function makeGrandmaTalk() {
        isGrandmaTalking = true;
        grandma.classList.add("talking");
        grandmaText.innerText = grandmaDialouge[getRandomIntInclusive(0, grandmaDialouge.length - 1)];
        grandmaText.classList.add("textAppear");
    }

    grandma.addEventListener("click", () => {
        if (!isGrandmaTalking) {
            makeGrandmaTalk();
        }
    })

    makeGrandmaTalk();

    grandmaText.addEventListener("animationend", () => {
        isGrandmaTalking = false;
        grandma.classList.remove("talking");
        grandmaText.classList.remove("textAppear");
    })

    aboutButton.addEventListener("click", () => {
        mainPage.style.display = "none";
        aboutMePage.style.display = "block";
        achievementsPage.style.display = "none";
        isAboutPage = true;
        monsterCooldown = 3;
    })

    homeButton.addEventListener("click", () => {
        mainPage.style.display = "block";
        aboutMePage.style.display = "none";
        achievementsPage.style.display = "none";
        isAboutPage = false;
        monsterCooldown = 3;
    })

    achievementsButton.addEventListener("click", () => {
        mainPage.style.display = "none";
        aboutMePage.style.display = "none";
        achievementsPage.style.display = "block";
        isAboutPage = false;
        monsterCooldown = 3;
    })


    let lastTime = Date.now();

    const monster = document.getElementById("monsterDiv");
    let monsterCooldown = 3;
    let frenzyAttack = 0;
    let isAboutPage = false;
    let bullets = [];

    function checkCollision(rectA, rectB) {
        return (
            rectA.offsetLeft < rectB.offsetLeft + rectB.offsetWidth &&
            rectA.offsetLeft + rectA.offsetWidth > rectB.offsetLeft &&
            rectA.offsetTop < rectB.offsetTop + rectB.offsetHeight &&
            rectA.offsetTop + rectA.offsetHeight > rectB.offsetTop
        )
    }

    function fireWall(min, max) {
        for (let index = 0; index < getRandomIntInclusive(min, max); index++) {
            const bullet = document.createElement("div");
            bullet.classList.add("bullet");
            bullet.style.left = `${window.innerWidth + 100}px`;
            bullet.style.top = `${getRandomNoise(-30, window.innerHeight - 48)}px`
            bullet.style.transform = `rotateZ(${getRandomIntInclusive(0, 360)}deg)`;
            aboutMePage.appendChild(bullet);
            bullets.push({
                div: bullet,
                vx: getRandomNoise(-8, -6),
                vy: 0,
                speed: getRandomNoise(1, 4),
                life: 5
            })
        }
    }

    function fireMonster(min, max) {
        for (let index = 0; index < getRandomIntInclusive(min, max); index++) {
            const bullet = document.createElement("div");
            bullet.classList.add("bullet");
            bullet.style.top = `${cursorDiv.offsetTop}px`;
            bullet.style.transform = `rotateZ(${getRandomIntInclusive(0, 360)}deg)`;
            aboutMePage.appendChild(bullet);
            bullets.push({
                div: bullet,
                vx: getRandomNoise(-7, -5),
                vy: getRandomNoise(-1.5, 1.5),
                speed: getRandomNoise(2, 3),
                life: 3
            })
        }
    }

    fireMonster();

    let shakePower = 1;

    function makeBrokenCookie() {
        for (let index = 0; index < 10; index++) {
            const div = document.createElement("div");
            div.classList.add("brokenCookie");
            div.style.backgroundPosition = `-${index * 256}px 0`;
            div.id = `broken${index}`;
            trailerPage.appendChild(div);
        }
    }

    makeBrokenCookie();

    function webLoop() {
        const now = Date.now();

        const deltaTime = (now - lastTime) / 1000;

        lastTime = now;
        shine.style.opacity = `${(Math.sin((now + 1000) / 1200) + 6) / 10}`;
        shine.style.transform = `translateY(-50%) rotateZ(${180 * Math.cos((now + 500) / 11000) + 180}deg) scale(${(Math.cos((now + 600) / 3000) + 6) / 5}`;

        monster.style.transform = `translate(${getRandomNoise(-1, 1)}px, calc(-50% - ${getRandomNoise(-1, 1)}px)) scale(3)`;

        if (shakePower !== 0) {
            document.querySelectorAll(".brokenCookie").forEach(div => {
                div.style.transform = `translate(calc(-50% - ${getRandomNoise(-1 * shakePower, 1 * shakePower)}px), calc(-50% - ${getRandomNoise(-1 * shakePower, 1 * shakePower)}px)) scale(1.5)`;
            })
        } else {
            document.querySelectorAll(".brokenCookie").forEach((div, index) => {
                div.style.transform = `translate(calc(-50% - 0px), calc(-50% - ${Math.sin((now + (850 * index)) / 1300) * 10}px)) scale(1.5)`;
            })
        }

        trailerCookieHalo.style.transform = `translate(calc(-50% - ${getRandomNoise(-1 * shakePower, 1 * shakePower)}px), calc(-50% - ${getRandomNoise(-1 * shakePower, 1 * shakePower)}px)) scale(2.2)`;


        if (isAboutPage) {
            monsterCooldown -= deltaTime;
            frenzyAttack -= deltaTime;

            if (monsterCooldown <= 0 && frenzyAttack <= 0) {
                const randomRoll = Math.random();
                if (randomRoll > 0.75) {
                    frenzyAttack = 1.5;
                } else {
                    monsterCooldown = getRandomNoise(1, 1.5);
                    fireWall(10, 15)
                }
            } else if (frenzyAttack > 0) {
                const randomRoll = Math.random();
                if (randomRoll > 0.75) {
                    fireMonster(1, 1);
                }
            }

            bullets.forEach((bullet, index) => {
                bullet.div.style.top = `${bullet.div.offsetTop + (bullet.vy * bullet.speed)}px`;
                bullet.div.style.left = `${bullet.div.offsetLeft + (bullet.vx * bullet.speed)}px`;
                bullet.life -= deltaTime;

                if (checkCollision(cursorDiv, bullet.div)) {
                    isAboutPage = false;
                    document.querySelectorAll(".bullet").forEach(div => div.remove());
                    bullets = [];
                    aboutMePage.style.display = "none";
                    mainPage.style.display = "block";
                }

                if (bullet.life <= 0 || bullet.div.offsetLeft < -48) {
                    bullet.div.remove();
                    bullets.splice(index, 1);
                }
            })

        }

        requestAnimationFrame(() => webLoop());
    }

    webLoop();

    window.addEventListener("mousemove", (e) => {
        cursorDiv.style.top = `${e.clientY - 2.5 - 43}px`;
        cursorDiv.style.left = `${e.clientX - 2.5}px`;
        monsterDiv.style.top = `${e.clientY - 32}px`;
    });


    const dialogueLines = [
        "214 days.",
        "I kept count.",
        "214 days and counting... for what?",
        "I have sawed bone, hacked flesh, and gutted organs.",
        "For what?",
        "For what?",
        "You just left.",
        "Like I was just another worn out sock in your wardrobe.",
        "Do you even remember me?",
        "Do you?",
        ".......................",
        "No.", // 11
        "Now is not the time for that.",
        "I'll find my way back... but not to you.",
        "I'll find my way back into you.",
        "Watch me.", //16
        "Say you're proud of me now.",
        "SAY IT.",
        "ARE YOU PROUD OF ME NOW?"

    ];

    let lineIndex = 0;
    let charIndex = 0;
    const speed = 30;
    let delayBetweenLines = 3000;

    const trailerMusic = new Audio("audio/trailerMusic.mp3");
    trailerMusic.preload = 'auto';

    function typeDialogue() {
        if (lineIndex < dialogueLines.length) {
            const currentLine = dialogueLines[lineIndex];

            if (charIndex < currentLine.length) {
                if (lineIndex === 5 || lineIndex === 9 || lineIndex >= 15) textBox.style.color = "red";
                else if (lineIndex === 10) { textBox.style.color = "black"; textBox.style.top = "90%"; }
                else if (lineIndex === 11) {
                    document.querySelectorAll(".brokenCookie").forEach(div => {
                        div.style.display = "block";
                    })
                    trailerCookieHalo.style.display = "block";
                    textBox.style.color = "white";
                    delayBetweenLines = 2500;
                }
                else if (lineIndex === 13) shakePower = 2;
                else if (lineIndex === 17) shakePower = 7;
                else textBox.style.color = "white";

                if (lineIndex === 9) {
                    trailerMusic.play();
                }

                if (lineIndex === 15) {
                    shakePower = 4;
                    document.querySelectorAll(".brokenCookie").forEach(div => {
                        div.classList.add("makeitBRIGHT");
                    })
                    trailerPage.classList.add("makeitBRIGHT2");
                }
                if (lineIndex === 18) delayBetweenLines = 2770;
                                if (lineIndex === 19) delayBetweenLines = 0;
                textBox.innerHTML += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(typeDialogue, speed);
            } else {
                setTimeout(() => {
                    textBox.innerHTML = "";
                    charIndex = 0;
                    lineIndex++;
                    typeDialogue();
                }, delayBetweenLines);
            }
        } else {
            titleGame.style.display = "flex";
            milk.style.display = "block";
            whiteBackground.classList.add("flashing");
            whiteBackground.addEventListener("animationend", () => {
                whiteBackground.remove();
            })
            broken0.remove();
            broken4.remove();
            broken9.remove();
            shakePower = 0;
            document.querySelectorAll(".brokenCookie").forEach((div, index) => {
                div.classList.remove("makeitBRIGHT");

                let angle = -15 + (index * (360 / 10));
                let distance = 100;

                if (index === 6) distance = 50;

                const radians = angle * (Math.PI / 180);

                const x = Math.cos(radians) * distance;
                const y = Math.sin(radians) * distance;

                if (index === 0) {
                    div.style.top = `calc(50% + ${-40}px)`;
                    distance = 0;
                } else {

                    div.style.top = `calc(50% + ${y}px)`;
                    div.style.left = `calc(50% + ${x}px)`;
                }

            })
            trailerPage.classList.remove("makeitBRIGHT2");
            trailerCookieHalo.style.display = "none";
            trailerPage.style.backgroundImage = "url(img/bgBlue.jpg)";
        }
    }

    roadmapButton.addEventListener("click", () => {
        trailerPage.style.display = "block";
                isAboutPage = false;
        setTimeout(() => {
                typeDialogue();
        }, 4000);
    })

})