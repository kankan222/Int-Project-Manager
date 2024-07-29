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
                                        <p class="text">UPI</p>
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
                                        <p class="text">UPI</p>
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
                                        <p class="text">UPI</p>
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
                                        <p class="text">UPI</p>
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

//HIDE SECTION
function hideSectionPopup(event){
    document.querySelector(`.section-popup`).classList.add('hide');
}
//OPEN INVENTORY 
function openInventory(){
    const mainPopup = document.querySelector(`.section-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="inventory-popup">
                    <div class="flex align-start j-between">
                        <h2>Inventory</h2>
                        <button type="button" class="btn-warning close" onclick="hideSectionPopup()">Close</button>
                    </div> 
                    <button class="btn-dashed flex align-items j-center" type="button" onclick="addInventoryItem(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                            class="">
                            <path fill=""
                                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                            </path>
                        </svg>
                        <span class="text">Add Item</span>
                    </button>
                    <div class="addItem-popup hide">
                        <div class="form">
                            <div class="addGrid">
                                <div class="field">
                                    <p class="title">Item</p>
                                    <input type="text" name="" id="">
                                </div>
                                <div class="field">
                                    <p class="title">Quantity</p>
                                    <input type="text" name="" id="">
                                </div>
                                <div class="field">
                                    <p class="title">Rate</p>
                                    <input type="number" name="" id="">
                                </div>
                                <div class="field">
                                    <p class="title">Amount</p>
                                    <input type="number" name="" id="">
                                </div>
                            </div>
                            <div class="action-btn flex">
                                <button type="button" class="btn-success">Add</button>
                                <button type="button" class="btn-warning" onclick="closeItemPopup()">Cancel</button>
                            </div>
                        </div>
                    </div>
                    <div class="inventory-table">
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" name="checkbox" class="select-all"></th>
                                    <th class="">No.</th>
                                    <th class="">Item</th>
                                    <th class="">Quantity</th>
                                    <th class="">Rate</th>
                                    <th class="">Amount</th>
                                    <th class="">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" name="" id="" onchange="toggleHighlight(this)"
                                        class="row-checkbox"></td>
                                    <td class="text">1</td>
                                    <td class="text">Cement</td>
                                    <td class="text">10</td>
                                    <td class="text">100</td>
                                    <td class="text">&#8377; <span>1,000</span></td>
                                    <td class="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    onclick="edit()">
                                                    <path fill=""
                                                        d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z">
                                                    </path>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path fill=""
                                                        d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z">
                                                    </path>
                                                </svg>
                                            </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="6">Total</th>
                                    <th colspan="1">&#8377; <span>1,000</span></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    
                </div>`
                mainPopup.innerHTML = childPopup;
}
//ADD inventory Items
function addInventoryItem(event){
    document.querySelector(`.addItem-popup`).classList.remove(`hide`);
    document.querySelector(`.inventory-table`).classList.add(`hide`);
}

//Close ITEM POPUP
function closeItemPopup(event){
    document.querySelector(`.addItem-popup`).classList.add(`hide`);
    document.querySelector(`.inventory-table`).classList.remove(`hide`);
}