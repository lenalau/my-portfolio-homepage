
let state = {
    myprojects: true,
    // the othr option is wordchain (the default)
    startMyProjects: () => {
        state.myprojects = true
        state.myskills = false
        state.myeducation = false
        state.mypersona = false


    },
    startMySkills: () => {
        state.myskills = true
        state.myprojects = false
        state.myeducation = false
        state.mypersona = false

    },
    startMyEducation: () => {

        state.myeducation = true
        state.myprojects = false
        state.myskills = false
        state.mypersona = false

    },
    startMyPersona: () => {
        state.mypersona = true
        state.myeducation = false
        state.myprojects = false
        state.myskills = false

    }
}

// let handleInput = (event) => {
//     if (event.keyCode === 13) {
//         if (state.myprojects) {
//             scrollProjects()
//         } else if
//             (state.myskills) {
//             showSkills()
//         } else if
//             (state.myeducation) {
//             showEducation()
//         }
//         else {
//             showMyLifeStations()
//         }

//     }
// }



// ------> DRAW AND CHECK WORDCHAIN <-------------------------------------------------


// starts updateWordPos
function startMyProjects() {
    document.getElementById("my-skills").style.display = "none"
    document.getElementById("my-education").style.display = "none"
    document.getElementById("my-projects").style.display = "block"
    document.getElementById("my-persona").style.display = "none"

}





// CHECK WORDCHAIN 

// this returns a string that is expected as the next input for checkWordchainINput






//------> DRAW AND CHECK IMAGEQUIZ <--------------------------------------------

// PictureBackground for Imagequiz
function startMySkills() {
    document.getElementById("my-skills").style.display = "block"
    document.getElementById("my-education").style.display = "none"
    document.getElementById("my-projects").style.display = "none"
    document.getElementById("my-persona").style.display = "none"

}

// CHECK IMAGEQUIZ






// ------> DRAW AND CHECK RANDOMQUIZ <--------------------------------------------




function startMyEducation() { // define a new state and act between
    state.myeducation = true

    document.getElementById("my-skills").style.display = "none"
    document.getElementById("my-education").style.display = "block"
    document.getElementById("my-projects").style.display = "none"
    document.getElementById("my-persona").style.display = "none"




}




window.onload = function () {


    document.getElementById("my-projects").style.display = "none"
    document.getElementById("nav-bar").style.display = "none"
    document.getElementById("my-skills").style.display = "none"
    document.getElementById("my-education").style.display = "none"

    document.getElementById("my-persona").style.display = "none"
    // document.getElementById("user-input").style.display = "none"
    // document.getElementById("game-board").style.display = "none"


    // let elems = document.querySelectorAll('*[wordfield]');
    // for (let index = 0; index < elems.length; index++) {
    //     elems[index].onclick = (e) => {
    //         document.getElementById("wordfield-icon").style.display = "block"
    //         document.getElementById("user-input").style.display = "block"
    //         document.getElementById("example").style.display = "block"
    //         document.getElementById("time-counter").style.display = "none"
    //         document.getElementsByClassName("input-inst")[0].innerHTML = "Hier die Wortkette eingeben:"

    //         fieldIndex = index - 1
    //         imgIndex = 0
    //         wordIndex = 0

    //         state.startNextWordchain()
    //     };
    // }
    let pro = document.querySelector('[mypro]');
    pro.onclick = function () {
        document.getElementById("my-projects").style.display = "block"
        document.getElementById("my-skills").style.display = "none"
        document.getElementById("my-persona").style.display = "none"
        document.getElementById("my-education").style.display = "none"
        state.startMyProjects()
    }

    let skills = document.getElementById('My-Ski');
    skills.onclick = function () {
        document.getElementById("my-skills").style.display = "block"
        document.getElementById("my-projects").style.display = "none"
        document.getElementById("my-persona").style.display = "none"
        document.getElementById("my-education").style.display = "none"
        state.startMySkills()
    }

    let edu = document.getElementById('My-Edu');
    edu.onclick = function () {
        document.getElementById("my-skills").style.display = "none"
        document.getElementById("my-education").style.display = "block"
        document.getElementById("my-projects").style.display = "none"
        document.getElementById("my-persona").style.display = "none"
        state.startMyEducation()
    }

    let pers = document.getElementById('My-Pers');
    pers.onclick = function () {
        document.getElementById("my-skills").style.display = "none"
        document.getElementById("my-education").style.display = "none"
        document.getElementById("my-projects").style.display = "none"
        document.getElementById("my-persona").style.display = "block"
        state.startMyPersona()
    };


    document.getElementById("start-button").onclick = function () {

        document.getElementsByClassName("home-intro")[0].remove()
        document.getElementById("my-projects").style.display = "none"
        document.getElementById("nav-bar").style.display = "block"
        document.getElementById("my-skills").style.display = "block"
        document.getElementById("my-education").style.display = "none"
        document.getElementById("my-persona").style.display = "none"


    };

    // document.onkeydown = handleInput
};



