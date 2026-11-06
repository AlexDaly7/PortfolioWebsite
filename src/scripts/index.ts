import type { mainMenuItem } from '../types';

const menuItems: mainMenuItem[] = new Array();

const mainListItems = document.getElementsByClassName("mainListItem") as HTMLCollectionOf<HTMLElement>;
const mainListLink = document.getElementsByClassName("mainListLink") as HTMLCollectionOf<HTMLElement>;
const previews = document.getElementsByClassName("menuPreview") as HTMLCollectionOf<HTMLElement>;
// ["Sans", "Algerian", "Garamond", "Papyrus"]
const fonts = ["var(--font-Fraunces)", "var(--font-OpenSans)", "var(--font-Recursive)", "var(--font-Roboto)"]

// Read each letter from the menu items and add it back to the list item as its own element, allowing them to be moved.
for(var i=0;i<mainListLink.length;i++) {
    let item: mainMenuItem = {
        id: i,
        element: mainListItems[i],
        fontArr: new Array(),
        characters: new Array(),
        timeoutEnter: new Array(),
        timeoutLeave: new Array(),
        slug: mainListItems[i].getAttribute("href")?.toString(),
        preview: previews[i],
    }

    var characters = mainListLink[i].textContent.split("");
    mainListLink[i].textContent = "";
    for(var j=0;j<characters.length;j++) {
        const content = document.createTextNode(characters[j]);
        const element = document.createElement("span");
        element.classList.add("mainListChar");
        element.appendChild(content);
        element.style.transition="0.5s all";
        element.style.display="inline-block";
        element.ariaHidden = "true";
        // Make the letters jump when hovered
        element.addEventListener("mouseenter", () => {
            if(item.preview.classList.contains("revealed")) {
                element.dataset.bump = String(10);
            }
        });
        item.fontArr[j] = j;

        item.characters.push(element);
        mainListLink[i].append(element);
    }
    menuItems.push(item);
}

// Set listeners to call functions and create interactivity
for(let i=0;i<menuItems.length;i++) {
    let item = menuItems[i];

    // mouseenter Listener
    item.element.addEventListener("mouseenter", () => {
        clearTimeouts(item);

        item.fontInterval = setInterval(() => {
            changeFont(item);
        }, 50);
        
        for(let j=0;j<item.characters.length;j++) {
            if(item.timeoutEnter==undefined) return;

            item.timeoutEnter[j] = setTimeout(() => {
                activateChar(item.characters[j]);
                if(j==item.characters.length-1) {
                    item.preview.classList.add("revealed");
                }
            }, j*70);
        }
    });

    // mouseleave Listener
    item.element.addEventListener("mouseleave", () => {
        clearTimeouts(item);

        for(let j=item.characters.length-1;j>=0;j--) {
            if(item.timeoutLeave==undefined) return;

            item.timeoutLeave[j] = setTimeout(() => {
                resetChar(item.characters[j]);
                if(j==item.characters.length-1) {
                    item.preview.classList.remove("revealed");
                }
            }, (item.characters.length-j)*105);
        }
    });
}

// Construction gif rotation
const gif = document.getElementById("constructionGif");
let rotation = 0;
let forward = true;
if(gif) {
    setInterval(() => {
        console.log("Interval...");
        if(forward) rotation += 0.5
        else rotation -= 0.5;

        gif.style.transform = "rotate("+rotation+"deg)";

        if(rotation>5) forward = false;
        else if(rotation<-5) forward = true;
    }, 50);
}


function changeFont(item: mainMenuItem) {
    for(let i=0;i<item.characters.length;i++) {
        let char = item.characters[i];
        let bump = parseFloat(char.dataset.bump ?? "0");

        // Generate a random number with 1.7x the range of the fonts array. If it is over return the function
        // This gives the font a chance not to change every tick of this function.
        let random = Math.floor(Math.random()*(fonts.length*50));
        if(random<fonts.length&&bump<=1.5) {
            char.style.fontFamily=fonts[random].toString();
            bump += Math.random()*(fonts.length*0.5)+4;
        } else {
            bump = Math.max(0, bump - 0.8);
        }

        char.dataset.bump = String(bump);
        char.style.transform = "translateY(-"+(bump*10)+"px)";
        if(bump!=0) {
            char.style.textShadow = "rgba(0,0,0,0.2) 2px "+((bump*6.5)+2)+"px 3px";
        } else {
            char.style.textShadow = "";
        }
        
    }
}

function activateChar(char: HTMLElement) {
    char.style.translate="28vw";
    char.style.opacity="75%";
}

function resetChar(char: HTMLElement) {
    char.style.fontFamily = "var(--font-Fraunces)";
    char.style.translate = "0";
    char.style.opacity = "100%";
    char.style.transform = "translateY(0)";
    char.style.textShadow = "";
}

function clearTimeouts(item: mainMenuItem) {
    item.timeoutEnter?.forEach(id => clearTimeout(id));
    item.timeoutEnter = new Array();

    item.timeoutLeave?.forEach(id => clearTimeout(id));
    item.timeoutLeave = new Array();

    clearTimeout(item.timeoutVisible);
    
    clearInterval(item.fontInterval);
}
