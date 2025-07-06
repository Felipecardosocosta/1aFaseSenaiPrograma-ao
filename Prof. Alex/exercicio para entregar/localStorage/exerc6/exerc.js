let info =JSON.parse(localStorage.getItem("Temas"))
console.log(info);

info === true? document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")

function alternarTema() {
    document.documentElement.classList.toggle('dark');
    let verificando=document.documentElement.classList.contains('dark')
    localStorage.setItem("Temas",verificando)
}

