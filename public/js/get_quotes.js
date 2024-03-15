
const contentDiv = document.getElementById('get-quotes');
const fetchButton = document.getElementById('fetchButton');


const contentmain = document.getElementById('main-quotes');
const fetchmain = document.getElementById('fetch-main');

fetchmain.addEventListener('click',()=>{
  fetchDataMain();
})


fetchButton.addEventListener('click', () => {
  fetchData(); 
});

async function fetchData() {
 
  contentDiv.textContent = ''; // Clear previous content
    try{
        const quotes_data = await axios.get("https://api.api-ninjas.com/v1/quotes?category=happiness",
        {
           headers: {
               'X-Api-Key': "CfX7svWmO3KphDzZTXFIR2Y0h5BjM2yvytIE4ySq"
           }
       })
     
       contentDiv.textContent = '"'+quotes_data.data[0]['quote']+'"'+quotes_data.data[0]['author']; 
  
    }catch(err){
   
      contentDiv.textContent = 'Error loading Quotes';
    }
}
async function fetchDataMain() {
 
  contentmain.textContent = ''; // Clear previous content
    try{
        const quotes_main = await axios.get("https://api.api-ninjas.com/v1/quotes?category=success",
        {
           headers: {
               'X-Api-Key': "CfX7svWmO3KphDzZTXFIR2Y0h5BjM2yvytIE4ySq"
           }
       })

       contentmain.textContent = '"'+quotes_main.data[0]['quote']+'"'+quotes_main.data[0]['author']; 

    }catch(err){
     
      contentmain.textContent = 'Error loading Quotes';
    }
}