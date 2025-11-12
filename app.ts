/*let namn = await read("Förnamn: ")
let efternamn = await read("Efternamn: ")
write(namn[0] + efternamn[0])*/
/*let namn = await read("Förnamn: ")
let efternamn = await read("Efternamn: ")
namn.slice(0,3)
efternamn.slice(0,3)
write("Ditt användarnamn är: " + namn.slice(0,3) + efternamn.slice(0,3))*/
/*let telefonnummer = await read("Ange ditt telefonnummer (inklusive riktnummer): ")
write("Telefonnummer utan bindestreck " + telefonnummer.replaceAll("-", " "))*/
/*let telefonnummer = await read("Telefonnummer med bindestreck: ")
write("Riktnummer: " +  telefonnummer.slice(0, telefonnummer.indexOf("-")))
write("Abonnentnummer: " + telefonnummer.slice(telefonnummer.indexOf("-") + 1))*/
/*let siffra = await read("Minuter: ")
write("Hela timmar: " + Math.floor(siffra /60))
write("Restminuter: " + siffra % 60)*/
/*let radie = await read("Ange radien på cirkeln: ")
write("Omkrets: " + (2 * Math.PI * radie))
write("Area: " + (Math.PI * radie * radie))*/
/*let siffra = +await read(" Ange ett tal: ")
let siffra2 = +await read(" Ange ett tal: ")
let siffra3 = +await read(" Ange ett tal: ")
write(Math.sqrt(siffra**2+siffra2**2+siffra3**2))*/
/*let primtal = [2, 3, 5, 7, 11, 13, 17, 19]
write(primtal[0])
write(primtal[7])
write(primtal.length)
primtal.push(23)
write(primtal.length)*/
/*let städer = ["Rom", "Paris", "Berlin", "Moskva"]
let länder = ["Italien", "Frankrike", "Tyskland", "Ryssland"]
write(städer[0] + " är huvudstad i " + länder[0])
for (let i = 1; i < städer.length; i++) {
  write(städer[i] + " är huvudstad i " + länder[i])
}*/
/*let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
let tal3 = +await read("Tal 3: ")
let tal4 = +await read("Tal 4: ")
let tal5 = +await read("Tal 5: ")
let array = [tal5, tal4, tal3, tal2, tal1]
for (let i = 0; i < array.length; i++) {
    write(array[i])
    }*/
let antal = +await read("Antal: ")
let lista = []
for (let i = 0; i < antal; i++) {
    let current = i+1
    let tal = +await read("Tal " + current + ": ")
    lista.push(tal)
}
for (let i = antal; i > 0; i--) {
    write(lista[i-1])
}