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
document.querySelectorAll('.select-all').forEach(div =>{
    div.addEventListener('change', function(event) {
        const isChecked = event.target.checked;
        const checkboxes = document.querySelectorAll('.row-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
            toggleHighlight(checkbox);
        });
    });
})

// Open SUb Menu
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-list > li');

    navItems.forEach(item => {
        const link = item.querySelector('a');
        const subMenu = item.querySelector('.sub-menu');

        link.addEventListener('click', (event) => {
            event.preventDefault();
            const parentLi = link.closest('li');
            
            // Toggle the active class on the clicked item
            if (parentLi.classList.contains('active')) {
                parentLi.classList.remove('active');
                if (subMenu) subMenu.classList.remove('active');
            } else {
                // Remove the active class from all other items
                navItems.forEach(otherItem => {
                    if (otherItem !== parentLi) {
                        otherItem.classList.remove('active');
                        const otherSubMenu = otherItem.querySelector('.sub-menu');
                        if (otherSubMenu) otherSubMenu.classList.remove('active');
                    }
                });

                parentLi.classList.add('active');
                if (subMenu) subMenu.classList.add('active');
            }
        });

        if (subMenu) {
            const subMenuItems = subMenu.querySelectorAll('li > a');
            subMenuItems.forEach(subLink => {
                subLink.addEventListener('click', (event) => {
                    event.stopPropagation();
                    event.preventDefault();

                    subMenuItems.forEach(otherSubLink => {
                        if (otherSubLink !== subLink) {
                            otherSubLink.parentElement.classList.remove('active');
                        }
                    });
                    subLink.parentElement.classList.add('active');
                });
            });
        }
    });
});

// OPEN PROJECT DETAILS
function openProjectDetails(pageId){
    const page = document.querySelectorAll(`.right > div`);

    page.forEach(side =>{
        if (side.id === pageId) {
            side.classList.remove('hide');
        }else{
            side.classList.add('hide');
        }
    })

}

// OPEN Notification
function openNotification(){
    const mainPopup = document.querySelector(`.section-popup`);
    mainPopup.classList.toggle('hide');
    mainPopup.innerHTML = '';
    const childPopup=`<div class="notification-popup">
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

function hideNotificationPopup(event){
    document.querySelector(`.section-popup`).classList.add('hide');
}



function successAlert(){
    document.querySelector(`.success-alert`).classList.toggle('active');
    document.querySelector(`.alertText`).textContent = `Project is inserted successfully`;

}
function warningAlert(){
    document.querySelector(`.warning-alert`).classList.toggle('active');
}