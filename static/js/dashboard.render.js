//CLOSE POPUP

function closemainPopup(event){
    document.querySelector(`.main-popup`).classList.add(`hide`);
    // document.querySelector(`.main-popup`).classList.add(`active`);
}


//CREATE PROJECT
function addProject(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="add-project-popup blur">
    <div class="form">
        <h2>Add a Project</h2>
        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
        <hr>                     
        <div class="addGrid">
            <div class="field">
                <p class="title client-selector">Select a Client</p>
                <select name="cname" id="" class="client-selector">
                    <option value="">Manash Kakoti</option>
                    <option value="">Panchanan Deka</option>
                </select>
            </div>
            <div class="field add-field-btn">
                <p class="opacity-0">0</p>
                <button class="btn-primary j-center" type="button" onclick="addNewClient(this)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle" class="">
                        <path fill=""
                            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                        </path>
                    </svg>
                    <span class="text">Add a New Client</span>
                </button>
            </div>
        </div>

        <div class="newField hide">
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
            <p class="title">Alternate Number<span>(*optional)</span></p>
            <input type="number" name="" id="">
        </div>
        <div class="field">
            <p class="title">Email<span>(*optional)</span></p>
            <input type="email" name="" id="">
        </div>
        <div class="field">
            <p class="title">Address<span>(*optional)</span></p>
            <input type="text" name="" id="">
        </div>
        <div class="field">
            <p class="title">Other Details<span>(optional)</span></p>
            <input type="text" name="" id="">
        </div>
    </div>
</div>
    <hr>
        <div class="addGrid">
            <div class="field">
                <p class="title">Serial No.</p>
                <input type="text" name="" id="">
            </div>
            <div class="field">
                <p class="title"r">Project Name</p>
                <input type="text" name="" id="">
            </div>
            <div class="field">
                <p class="title">Work Type</p>
                <div class="flex f-wrap">
                    <div class="flex">
                        <input type="checkbox" name="" id="">
                        <p class="text">Interior</p>
                    </div>
                    <div class="flex">
                        <input type="checkbox" name="" id="">
                        <p class="text">Execution</p>
                    </div>
                </div>
            </div>
            <div class="field">
                <p class="title">Deadline</p>
                <input type="text" name="" id="">
            </div>
            <div class="field">
                <p class="title">Total Amount</p>
                <input type="text" name="" id="">
            </div>
            <div class="field">
                <p class="title">Advance Amount</p>
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
//ADD A NEW CLIENT INSIDE A PROJECT
function addNewClient(){
    document.querySelector(`.newField`).classList.remove(`hide`);
}


//EDIT PROJECT
function editProject(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML ='';
    const childPopup = `<div class="edit-project-popup blur">
                    <div class="form">
                        <h2>Edit a Project</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addGrid">
                            <div class="field">
                                <p class="title">Serial No.</p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field">
                                <p class="title">Project Name</p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field">
                                <p class="title">Deadline</p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field">
                                <p class="title">Total Amount</p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field">
                                <p class="title">Advance Amount</p>
                                <input type="text" name="" id="" disabled>
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

//ADD EMPLOYEE
function addEmployee(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML ='';
    const childPopup = `<div class="add-employee-popup blur">
                    <div class="form">
                        <h2>Add an Employee</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addFlex flex align-center">
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Manushree Gogoi</p>
                            </div>
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Manushree Gogoi</p>
                            </div>
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Manushree Gogoi</p>
                            </div>
                        </div>
                        <hr>
                        <div class="field flex addempl align-center">
                            <input type="text" placeholder="Add Project Employee">
                            <input type="text" placeholder="Designation">
                            <button class="btn-primary" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle" class="">
                                    <path fill=""
                                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                    </path>
                                </svg>
                                <span class="text">Add</span>
                            </button>
                        </div>

                        <div class="action-btn flex">
                            <button type="button" class="btn-success">Update</button>
                            <button type="button" class="btn-warning" onclick="closemainPopup()">Cancel</button>
                        </div>
                    </div>
                </div>`
        mainPopup.innerHTML = childPopup;
}

//REMOVE EMPLOYEE
function removeEmployee(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML ='';
    const childPopup = `<div class="add-employee-popup blur">
                    <div class="form">
                        <h2>Remove an Employee</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addFlex flex align-center">
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Manushree Gogoi</p>
                            </div>
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Manushree Gogoi</p>
                            </div>
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Manushree Gogoi</p>
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


//ADD SUB-TASK
function addSubTask(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML ='';
    const childPopup = `<div class="sub-tasks-popup blur">
                    <div class="form">
                        <h2>Add Sub-Tasks</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addFlex flex align-center">
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Plumbing</p>
                            </div>
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Electricity</p>
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


//REMOVE SUB TASK
function removeSubTask(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML ='';
    const childPopup = `<div class="sub-tasks-popup blur">
                    <div class="form">
                        <h2>Remove Sub-Tasks</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addFlex flex align-center">
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Plumbing</p>
                            </div>
                            <div class="field flex align-center">
                                <input type="checkbox" name="" id="">
                                <p class="text">Electricity</p>
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




function validateInput(){
    const field = document.querySelectorAll(`.field`);

    field.forEach(val =>{
        const input = val.querySelector(`input`);
        const errMsg = val.querySelector(`span.err`);

        if(input.hasAttribute(`required`) && input.value.trim() === ''){
            errMsg.classList.remove(`hide`);
            field.classList.add(`error`);
        }else{
            errMsg.classList.add(`hide`);
            field.classList.remove(`error`);
        }
    })
}


validateInput();