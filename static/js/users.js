//CLOSE POPUP

function closemainPopup(event){
    document.querySelector(`.main-popup`).classList.add(`hide`);
    // document.querySelector(`.main-popup`).classList.add(`active`);
}

//ADD USERS
function addUser(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML ='';
    const childPopup = `<div class="add-user blur">
                            <div class="form">
                                <h2>Add an User</h2>
                                <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                                <hr>

                                <div class="addGrid">
                                    <div class="field">
                                        <p class="title">Name</p>
                                        <input type="text" name="" id="" required>
                                    </div>
                                    <div class="field">
                                        <p class="title">Contact Number</p>
                                        <input type="number" name="" id="" required>
                                    </div>
                                    <div class="field">
                                        <p class="title">Email<span>(*optional)</span></p>
                                        <input type="email" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="title">Designation<span>(*optional)</span></p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="title">Password<span>(optional)</span></p>
                                        <input type="text" name="" id="">
                                    </div>
                                </div>

                                <div class="action-btn flex">
                                    <button type="button" class="btn-success">Add</button>
                                    <button type="button" class="btn-warning" onclick="closemainPopup()">Cancel</button>
                                </div>
                            </div>
                        </div>`
        mainPopup.innerHTML = childPopup;
}

//REMOVE USERS
function editUser(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML ='';
    const childPopup = `<div class="add-employee-popup blur">
                    <div class="form">
                        <h2>Edit User</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addGrid">
                                    <div class="field">
                                        <p class="title">Name</p>
                                        <input type="text" name="" id="" required>
                                    </div>
                                    <div class="field">
                                        <p class="title">Contact Number</p>
                                        <input type="number" name="" id="" required>
                                    </div>
                                    <div class="field">
                                        <p class="title">Email<span>(*optional)</span></p>
                                        <input type="email" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="title">Designation<span>(*optional)</span></p>
                                        <input type="text" name="" id="">
                                    </div>
                                    <div class="field">
                                        <p class="title">Password<span>(optional)</span></p>
                                        <input type="text" name="" id="">
                                    </div>
                                </div>

                        <div class="action-btn flex">
                            <button type="button" class="btn-success">Update</button>
                            <button type="button" class="btn-warning" onclick="closemainPopup()">Cancel</button>
                        </div>
                    </div>
                </div>`
        mainPopup.innerHTML = childPopup;
}