document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice);
  const url = `https://api.nasa.gov/planetary/apod?api_key=vfd1wQ1ibJ61rZoYdF4U53FgdawH2VG1I0vlRSaF&date=${choice}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
    })
  .catch(err=> {
  console.log(`error ${err}`)
  });
}














