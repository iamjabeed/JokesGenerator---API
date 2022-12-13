// https://icanhazdadjoke.com/  API URL
const jokeBtn = document.getElementById("jokeBtn");
const jokeDiv = document.getElementById("joke");

// BY USING PROMISES 

// const getJokes = () => {
//   const head = {
//     Headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com/", head)
//     .then((res) => res.json() )
//     .then( (data) => {
//       jokeDiv.innerHTML = data.joke;
//     }).catch((error) =>{
//         console.log(error);
//       })
// };
// jokeBtn.addEventListener("click", getJokes);

// BY ASYNC METHOD
const getJokes = async () => {
    try{
        const head = {
            headers: {
              Accept: "application/json",
            },
          };
          const res = await fetch("https://icanhazdadjoke.com/", head)
          const data = await res.json()
          jokeDiv.innerHTML = data.joke
    }catch(errors){
        console.log(errors);
    }
  };
  jokeBtn.addEventListener("click", getJokes);
  getJokes();