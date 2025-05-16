function dropperDown() {
    document.getElementById("navDrop").classList.toggle("show");
}

// someone make the gradePickers one function please

function gradePicker1() {
    document.getElementById("Highline").classList.toggle("flex");
    document.getElementById("Morningside").classList.remove("flex");
    document.getElementById("Bryant_Sakura").classList.remove("flex");
}

function gradePicker2() {
    document.getElementById("Highline").classList.remove("flex");
    document.getElementById("Morningside").classList.toggle("flex");
    document.getElementById("Bryant_Sakura").classList.remove("flex");
}

function gradePicker3() {
    document.getElementById("Highline").classList.remove("flex");
    document.getElementById("Morningside").classList.remove("flex");
    document.getElementById("Bryant_Sakura").classList.toggle("flex");
}

function gradePicker4() {
    document.getElementById("Highline").classList.remove("flex");
    document.getElementById("Morningside").classList.remove("flex");
    document.getElementById("Bryant_Sakura").classList.remove("flex");
    document.getElementById("Inwood_Soundview").classList.toggle("flex");
}

function gradePicker5() {
    document.getElementById("Highline").classList.remove("flex");
    document.getElementById("Morningside").classList.remove("flex");
    document.getElementById("Bryant_Sakura").classList.remove("flex");
    document.getElementById("Inwood_Soundview").classList.remove("flex");
    document.getElementById("Upper_School").classList.toggle("flex");
}

function gradePicker6() {
    document.getElementById("Highline").classList.remove("flex");
    document.getElementById("Morningside").classList.remove("flex");
    document.getElementById("Bryant_Sakura").classList.remove("flex");
    document.getElementById("Inwood_Soundview").classList.remove("flex");
    document.getElementById("Upper_School").classList.remove("flex");
    document.getElementById("Staff").classList.toggle("flex");
}

