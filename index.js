const input_sub = document.getElementById("input-subject");
const input_desc = document.getElementById("input-desc");
const btn_add = document.getElementById("btn-add");
const mother_div_cards = document.getElementById("mother-div-cards");
// colors
const color = ['263238' , 'DD2C00' , '3E2723' , '827717' , '33691E' , '1B5E20' , 'f80036' , '004D40' , '311B92' , '1A237E' , 'C51162' , 'D50000' , '4A148C' , '212121', '880E4F' , 'B71C1C' , '2E7D32' , 'D84315' , '000000'] ; 


btn_add.addEventListener("click", () => {
  add_cards();
});

function add_cards() {
  const input_sub_value = input_sub.value;
  const input_desc_value = input_desc.value;
    


  if (
    input_sub_value == false ||
    input_sub_value == "" ||
    input_sub_value == undefined
  ) {
    alert("enter a value for your subject");
  } else if (
    input_desc_value == false ||
    input_desc_value == "" ||
    input_desc_value == undefined
  ) {
    alert("enter a value for your description");
  } else {
    const random_color1 = color[Math.floor(Math.random() * color.length)]; 
    const random_color2 = color[Math.floor(Math.random() * color.length)]; 

    let data_element = `
        <div class="col col-3 border border-3  rounded-4 " style="background-image: linear-gradient(to right, #${random_color1}, #${random_color2}">
            <p class="fs-5 m-0 mt-2 fw-bold text-center text-white"> ${input_sub_value} </p>
            <hr class="m-0 text-white">
            <p class="fs-6 mt-1 text-center text-white  "> ${input_desc_value} </p>
        </div>
       `;

    mother_div_cards.insertAdjacentHTML("beforeend", data_element);

    save_in_storage(input_sub_value, input_desc_value);
    input_sub.value = "";
    input_desc.value = "";
  }
}

function save_in_storage(subject, description) {
  localStorage.setItem(subject, description);
    let all_data = Object.entries(localStorage)
    console.log(all_data[0])
}
function get_data_storage(){
    let all_data = Object.entries(localStorage)
   // console.log(all_data)
    return all_data ; 
}

let data_storage = get_data_storage() 


data_storage.forEach(element => {
    const random_color3 = color[Math.floor(Math.random() * color.length)]; 
    const random_color4 = color[Math.floor(Math.random() * color.length)]; 

    let data_element = `
<div class="col col-3 border border-3   rounded-4" style="background-image: linear-gradient(to right, #${random_color3}, #${random_color4}); ;">
    <p class="fs-5 m-0 mt-2  fw-bold text-center text-white "> ${element[0]} </p>
    <hr class="m-0 text-bg-danger">
    <p class="fs-6 mt-1 text-center text-white "> ${element[1]} </p>
</div>
`;

mother_div_cards.insertAdjacentHTML("beforeend", data_element);

});




