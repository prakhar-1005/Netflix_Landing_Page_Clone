const tabItems= document.querySelectorAll(".tab-item");
const tabContentItems= document.querySelectorAll(".tab-content-item");

function removeBorder(){
    tabItems.forEach(item=> item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}



// Select tab content item
function selectItem(e){
    removeBorder();  // removes borders form ALL items before a border is added to the selectes one
    removeShow();  
    // Add the red border
    this.classList.add('tab-border');  // 'this' allows us to access the element clicked

    const tabContentItem= document.getElementById(`${this.id}-content`);
    tabContentItem.classList.add('show');
}

//listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));