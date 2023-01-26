// git branch kako bismo vidjeli ima li dodatnih grana
// git branch dev koristimo tek kad napravimo prvi commitgit branch dev
// git branch -a daje popis brancheva s udaljenog repozitorija
// git checkout koristimo za prebacivanje u drugu granu
// git pull koristimo kako bi povukao podatke s udaljenog na lokalni repozitorij??
// get fetch pokupi upstreamove --> git fetch is a primary command used to download contents from a remote repository.
// ne možemo mergati master i dev lokalne repozitorije, nego treba odbaciti promjene prvo --> git stash (na dev branchu) --> git merge master
// prije nego radimo neke promjene, trebamo provjeriti postoji li nešto na udaljenom repozitoriju --> prvo git pull OVO SE SVE ODNOSI AKO RADI NAS NEKOLIKO NA ISTOM PROJEKTU
// ako kreiramo novi branch na gitu s istim imenom, možemo ih spojiti s git fetch
// git push -u origin tom --> s ovim smo stavili najnoviji branch na udaljeni repozitorij
// moramo mergati na gitu sve iz niže grane na višu, kako bi se to sve spojilo
// kada radimo lokalno, možemo koristiti koliko god želimo lokalnih brancheva

// Povezivanje s udaljenim repozitorijem: 
// 1. U Gitu otvorimo new repository (Tomislavu preko gita i repozitorija šaljemo završni rad) --> SSH ključ
// 2. Push an existing repository from the command line --> kopiramo prvu liniju i šaljemo u gitbash; to omogućuje vezu između lokalnog i udaljenog repozitorija
// 3. Vezu provjeravamo s git remote -v 
// 4. Zatimo radimo push s lokalnog na udaljeni repozitorij --> git push --set-upstream origin master radimo samo prvi puta kada ih vežemo
// 5. Moramo kreairati readme file

console.log(window);
console.log("Ja sam Matko!")