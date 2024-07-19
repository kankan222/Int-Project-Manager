//CLOSE POPUP

function closemainPopup(event){
    document.querySelector(`.main-popup`).classList.add(`hide`);
    // document.querySelector(`.main-popup`).classList.add(`active`);
}


//ADD VENDORS
function addVendorsSuppliers(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="add-vendors-suppliers blur">
                    <div class="form">
                        <h2>Add a Vendor</h2>
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

                        <div class="action-btn flex">
                            <button type="button" class="btn-success">Add</button>
                            <button type="button" class="btn-warning" onclick="closemainPopup()">Cancel</button>
                        </div>
                    </div>
                </div>`
    mainPopup.innerHTML = childPopup;
}
//EDIT VENDORS 
function editVendorsSuppliers(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="edit-Vendors-Suppliers blur">
                    <div class="form">
                        <h2>Edit Vendor Details</h2>
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

                        <div class="action-btn flex">
                            <button type="button" class="btn-success">Update</button>
                            <button type="button" class="btn-warning" onclick="closemainPopup()">Cancel</button>
                        </div>
                    </div>
                </div>`
    mainPopup.innerHTML = childPopup;
}



//ADD COLLECTION/PAYMENTS
function addVendorPurchase(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="add-collection blur">
                    <div class="form">
                        <h2>Add a Purchase</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addGrid">
                            <div class="field">
                                <p class="title">Date</p>
                                <input type="date" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Amount</p>
                                <input type="number" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Mode</p>
                                <div class="flex f-wrap">
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cash</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Online</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cheque</p>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <p class="title">Remarks<span>(*optional)</span></p>
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

//EDIT COLLECTION/PAYMENTS
function editVendorPurchase(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="add-collection blur">
                    <div class="form">
                        <h2>Edit Purchase</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addGrid">
                            <div class="field">
                                <p class="title">Date</p>
                                <input type="date" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Amount</p>
                                <input type="number" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Mode</p>
                                <div class="flex f-wrap">
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cash</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Online</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cheque</p>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <p class="title">Remarks<span>(*optional)</span></p>
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


//ADD Vendor EXPENSES/ PROJECT 
function addVendorPayments(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="add-collection blur">
                    <div class="form">
                        <h2>Add Vendor Payment</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addGrid">
                            <div class="field">
                                <p class="title">Date</p>
                                <input type="date" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Amount</p>
                                <input type="number" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Mode</p>
                                <div class="flex f-wrap">
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cash</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Online</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cheque</p>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <p class="title">Remarks<span>(*optional)</span></p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field">
                                <p class="title project-selector">Select a Project<span>(*optional)</span></p>
                                <select name="cname" id="" class="Vendor-selector">
                                    <option value="">Project 1A</option>
                                    <option value="">Project 2S</option>
                                </select>
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

//EDIT Vendor EXPENSES/ PROJECT 
function editVendorPayments(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="add-collection blur">
                    <div class="form">
                        <h2>Edit Vendor Payment</h2>
                        <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                        <hr>

                        <div class="addGrid">
                            <div class="field">
                                <p class="title">Date</p>
                                <input type="date" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Amount</p>
                                <input type="number" name="" id="" required>
                            </div>
                            <div class="field">
                                <p class="title">Mode</p>
                                <div class="flex f-wrap">
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cash</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Online</p>
                                    </div>
                                    <div class="flex">
                                        <input type="radio" name="mode" id="">
                                        <p class="text">Cheque</p>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <p class="title">Remarks<span>(*optional)</span></p>
                                <input type="text" name="" id="">
                            </div>
                            <div class="field">
                                <p class="title project-selector">Select a Project<span>(*optional)</span></p>
                                <select name="cname" id="" class="vendor-selector">
                                    <option value="">Project 1A</option>
                                    <option value="">Project 2S</option>
                                </select>
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
