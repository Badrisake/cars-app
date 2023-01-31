
const menuItems=[
    {
        id:1,
        item:"Car Items",
        oneliner:"cars",
        img:"car/images/car1.jpg",
        hotel:" kia cars company",
        desc:"thiss is the high end car it moves very speed"
    },
    {
        id:2,
        item:"Car Items",
        oneliner:"cars",
        img:"car/images/car2.jpg",
        hotel:" kia cars company",
        desc:"thiss is the high end car it moves very speed"
    },
    {
        id:3,
        item:"Car Items",
        oneliner:"cars",
        img:"images/car3.jpg",
        hotel:" kia cars company",
        desc:"thiss is the high end car it moves very speed"
    },
    {
        id:4,
        item:"Car Items",
        oneliner:"cars",
        img:"images/car4.jpg",
        hotel:" kia cars company",
        desc:"thiss is the high end car it moves very speed"
    },
    {
        id:5,
        item:"Car Items",
        oneliner:"cars",
        img:"images/car4.jpg",
        hotel:" kia cars company",
        desc:"thiss is the high end car it moves very speed"
    },
    {
        id:6,
        item:"Car Items",
        oneliner:"cars",
        img:"images/car5.jpg",
        hotel:" kia cars company",
        desc:"thiss is the high end car it moves very speed"
    },
    {
        id:7,
        item:"Car Items",
        oneliner:"cars",
        img:"images/car6.jpg",
        hotel:" kia cars company",
        desc:"thiss is the high end car it moves very speed"
    },
    {
        id:8,
        item:"Car Items",
        oneliner:"cars",
        img:"images/car7.jpg",
        hotel:" kia cars company",
        desc:"thiss is the high end car it moves very speed"
    }
]
const item=document.getElementById('item');
const oneliner=document.getElementById('oneliner');
const img=document.getElementById('img')
const hotel=document.getElementById('hotel');
const desc=document.getElementById('desc');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');

let currentMenu=0;
window.addEventListener('DOMContentLOaded',()=>{
    allMenu(currentMenu);
});



const allMenu=()=>{
    let menu=menuItems[currentMenu]
    item.textContent=menuItem;
    oneliner.textContent=menu.oneliner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc;

}
// random
random.addEventListener('click',()=>{
    currentMenu=Math.floor(Math.random()*menuItems.length)
    // console.log(currentMneu)
    allMenu(currentMenu);
})


//previous btn
prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1;
    }
    allMenu(currentMenu);

})
//next btn
next.addEventListener('click' ,()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=menuItems.Length-1;
    } 
    allMenu(currentMenu);
})

