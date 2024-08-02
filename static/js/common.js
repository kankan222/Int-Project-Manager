// Highlight Checkbox 
function toggleHighlight(checkbox) {
    const row = checkbox.closest('tr');
    if (checkbox.checked) {
        row.classList.add('highlight');
    } else {
        row.classList.remove('highlight');
    }
}

//Change color of radio button
function toggleColor(event) {
    document.querySelectorAll('.checkbox').forEach(div => {
        div.classList.remove('checked');
    });

    const radio = event.target;
    const parentDiv = radio.closest('.checkbox');
    if (radio.checked) {
        parentDiv.classList.add('checked');
    }
}
document.querySelectorAll('.checkbox input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', toggleColor);
});

// Select all checkboxes 
document.querySelectorAll('.select-all').forEach(div => {
    div.addEventListener('change', function (event) {
        const isChecked = event.target.checked;
        const checkboxes = document.querySelectorAll('.row-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
            toggleHighlight(checkbox);
        });
    });
})

// Open SUb Menu
const navItems = document.querySelectorAll('nav > ul > li');
navItems.forEach((item) => {
    // item.classList.remove("active")
    const subMenu = item.querySelector('.sub-menu');
    const p = item.querySelectorAll('.sub-menu p');
    const arrow = item.querySelector(`.arrow`);

    item.addEventListener("click", (event) => {
        event.preventDefault();
        item.classList.add("active");
        if (subMenu !== null) {
            arrow.classList.add("active");
            subMenu.classList.add("active");
            p[0].classList.add("active");
        } else {
            // arrow.classList.remove("active");
            // subMenu.classList.remove("active");
        }
    })
});

const p = document.querySelectorAll(`.sub-menu p`);
function parag(){p.forEach((para)=>{
    para.classList.remove("active");
    para.addEventListener("click", ()=>{
        para.classList.add("active")    
    })
})};
parag();
// OPEN PROJECT DETAILS
function openProjectDetails(pageId) {
    const page = document.querySelectorAll(`.right > div`);

    page.forEach(side => {
        if (side.id === pageId) {
            side.classList.remove('hide');
        } else {
            side.classList.add('hide');
        }
    })

}

// OPEN Notification
function openNotification() {
    const mainPopup = document.querySelector(`.section-popup`);
    mainPopup.classList.toggle('hide');
    mainPopup.innerHTML = '';
    const childPopup = `<div class="notification-popup">
                    <div class="form">
                        <h2 class="uppercase">notifications</h2>
                        <button type="button" class="btn-warning close" onclick="hideNotificationPopup()">Close</button>
                        <hr>
                        <div class="notification-column">
                            <div class="notification-alert flex">
                                <p>Project of Mr Arun Kumar is Completed. Please collect payment from him</p>
                                <div class="action-btn flex">
                                    <button type="button" class="btn-warning">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    mainPopup.innerHTML = childPopup;
}

function hideNotificationPopup(event) {
    document.querySelector(`.section-popup`).classList.add('hide');
}

//ALERTS
function successAlert() {
    document.querySelector(`.success-alert .success-alert`).classList.toggle('active');
    document.querySelector(`.alertText`).textContent = `Project is inserted successfully`;
}
function warningAlert() {
    document.querySelector(`.warning-alert`).classList.toggle('active');
    document.querySelector(`.warning-alert .alertText`).textContent = `You have an error. Please check again`;
}

function confirmAlert(){
    document.querySelector(`.confirm-alert`).classList.toggle('active');
    document.querySelector(`.confirm-alert .alertText`).textContent = `Are you sure you want to delete the project?`;
}

function errorAlert(){
    document.querySelector(`.error-alert`).classList.toggle('active');
    document.querySelector(`.error-alert .alertText`).innerHTML = `You have an error`;
}


function closeAlert(event){
    document.querySelector(`.confirm-alert`).classList.remove("active");
}



