let points = 0;

let xp = 0;

let money = 1000;

let pollution = 50;

let happiness = 50;

let currentLevel = 0;


const levels = [

    {

        title: "El problema comienza",

        text:
        "Una gran cantidad de basura electrónica está apareciendo en la ciudad. ¿Qué haces primero?",

        choices: [

            {

                text:
                "Crear centros de recolección",

                points: 100,

                xp: 50,

                money: -300,

                pollution: -10,

                happiness: 10,

                feedback:
                "Excelente. Los centros permiten que los ciudadanos entreguen correctamente sus dispositivos."

            },

            {

                text:
                "Ignorar el problema",

                points: 0,

                xp: 0,

                money: 0,

                pollution: 15,

                happiness: -10,

                feedback:
                "La basura electrónica continúa acumulándose."

            },

            {

                text:
                "Quemar los dispositivos",

                points: -50,

                xp: 0,

                money: -100,

                pollution: 30,

                happiness: -20,

                feedback:
                "Mala decisión. Quemar residuos electrónicos puede liberar sustancias contaminantes."

            }

        ]

    },


    {

        title: "Las baterías",

        text:
        "Encuentras cientos de baterías usadas. ¿Qué haces con ellas?",

        choices: [

            {

                text:
                "Llevarlas a un punto especializado",

                points: 100,

                xp: 70,

                money: -150,

                pollution: -15,

                happiness: 10,

                feedback:
                "Correcto. Las baterías necesitan un manejo adecuado."

            },

            {

                text:
                "Tirarlas a la basura normal",

                points: -30,

                xp: 0,

                money: 0,

                pollution: 20,

                happiness: -10,

                feedback:
                "Las baterías pueden contener materiales que requieren un tratamiento especial."

            },

            {

                text:
                "Arrojarlas al río",

                points: -100,

                xp: 0,

                money: 0,

                pollution: 40,

                happiness: -30,

                feedback:
                "Esto puede contaminar el agua y afectar a los ecosistemas."

            }

        ]

    },


    {

        title: "El celular antiguo",

        text:
        "Un ciudadano quiere tirar su celular viejo. ¿Qué le recomiendas?",

        choices: [

            {

                text:
                "Repararlo o reciclarlo",

                points: 100,

                xp: 50,

                money: 0,

                pollution: -10,

                happiness: 10,

                feedback:
                "¡Muy bien! Reparar y reciclar ayuda a reducir los residuos."

            },

            {

                text:
                "Tirarlo a la calle",

                points: -50,

                xp: 0,

                money: 0,

                pollution: 20,

                happiness: -15,

                feedback:
                "Los dispositivos electrónicos no deben abandonarse en espacios públicos."

            }

        ]

    },


    {

        title: "La campaña",

        text:
        "La ciudad necesita aprender sobre basura electrónica. ¿Qué haces?",

        choices: [

            {

                text:
                "Crear una campaña educativa",

                points: 150,

                xp: 100,

                money: -200,

                pollution: -15,

                happiness: 20,

                feedback:
                "Excelente. La educación ayuda a cambiar los hábitos."

            },

            {

                text:
                "No hacer nada",

                points: 0,

                xp: 0,

                money: 0,

                pollution: 10,

                happiness: -10,

                feedback:
                "Sin educación, muchas personas continuarán desechando mal sus dispositivos."

            }

        ]

    },


    {

        title: "La gran decisión",

        text:
        "Una empresa ofrece comprar los residuos electrónicos para reciclarlos. ¿Aceptas?",

        choices: [

            {

                text:
                "Sí, pero verificando que recicle correctamente",

                points: 200,

                xp: 150,

                money: 400,

                pollution: -20,

                happiness: 15,

                feedback:
                "Excelente decisión. Es importante asegurarse de que los residuos reciban un tratamiento responsable."

            },

            {

                text:
                "Aceptar sin investigar",

                points: 50,

                xp: 20,

                money: 500,

                pollution: 5,

                happiness: 0,

                feedback:
                "Antes de entregar residuos, es importante verificar cómo serán gestionados."

            },

            {

                text:
                "Rechazar",

                points: 0,

                xp: 0,

                money: 0,

                pollution: 5,

                happiness: -5,

                feedback:
                "Perdiste una oportunidad de gestionar parte de los residuos."

            }

        ]

    }

];


function updateStats() {

    document.getElementById("points").textContent =
        points;

    document.getElementById("xp").textContent =
        xp;

    document.getElementById("money").textContent =
        money;

    document.getElementById("pollution").textContent =
        pollution;

    document.getElementById("happiness").textContent =
        happiness;

}


function loadLevel() {

    if (currentLevel >= levels.length) {

        finishGame();

        return;

    }


    let level = levels[currentLevel];


    document.getElementById("level").textContent =
        "Nivel " + (currentLevel + 1);


    document.getElementById("title").textContent =
        level.title;


    document.getElementById("storyText").textContent =
        level.text;


    let choices =
        document.getElementById("choices");


    choices.innerHTML = "";


    document.getElementById("feedback").style.display =
        "none";


    document.getElementById("nextButton").style.display =
        "none";


    level.choices.forEach((choice, index) => {

        let button =
            document.createElement("button");


        button.className = "choice";


        button.textContent =
            "👉 " + choice.text;


        button.onclick = function() {

            choose(index);

        };


        choices.appendChild(button);

    });

}


function choose(index) {

    let level = levels[currentLevel];

    let choice = level.choices[index];


    points += choice.points;

    xp += choice.xp;

    money += choice.money;

    pollution += choice.pollution;

    happiness += choice.happiness;


    pollution =
        Math.max(0, Math.min(100, pollution));


    happiness =
        Math.max(0, Math.min(100, happiness));


    updateStats();


    document.getElementById("feedback").innerHTML =

        "<strong>📢 Resultado:</strong><br><br>" +

        choice.feedback +

        "<br><br>" +

        "⭐ Puntos: " + choice.points +

        "<br>⚡ XP: " + choice.xp;


    document.getElementById("feedback").style.display =
        "block";


    document.getElementById("choices").innerHTML =
        "";


    document.getElementById("nextButton").style.display =
        "inline-block";

}


function nextLevel() {

    currentLevel++;

    loadLevel();

}


function finishGame() {

    let result = "";

    if (pollution <= 20 && happiness >= 70) {

        result =
        "🌎 ¡Eres un Guardián del Planeta!";

    }

    else if (pollution <= 40) {

        result =
        "♻️ ¡Buen trabajo, Reciclador Pro!";

    }

    else if (pollution <= 60) {

        result =
        "🌱 La ciudad puede mejorar.";

    }

    else {

        result =
        "⚠️ La contaminación ganó esta vez.";

    }


    document.getElementById("choices").innerHTML = "";


    document.getElementById("nextButton").style.display =
        "none";


    document.getElementById("storyText").innerHTML =

        `<div class="final">

            <h2>${result}</h2>

            <p>
            Has terminado tu misión.
            </p>

            <p>
            ⭐ Puntos finales: ${points}
            </p>

            <p>
            ⚡ XP: ${xp}
            </p>

            <p>
            🌫️ Contaminación: ${pollution}%
            </p>

            <p>
            😊 Felicidad: ${happiness}%
            </p>

            <button
                class="restart"
                onclick="location.reload()">

                🔄 Jugar nuevamente

            </button>

        </div>`;

}


updateStats();

loadLevel();