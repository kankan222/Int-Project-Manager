//CLOSE POPUP

function closemainPopup(event){
    document.querySelector(`.main-popup`).classList.add(`hide`);
    // document.querySelector(`.main-popup`).classList.add(`active`);
}

//ADD PURCHASE
function addPurchase(){
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
                                <p class="title v-selector">Select a Vendor</p>
                                <select name="cname" id="" class="v-selector">
                                    <option value="">Project 1A</option>
                                    <option value="">Project 2S</option>
                                </select>
                            </div>
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
                                <p class="title opacity-0">hu</p>
                                <button class="btn-dashed flex align-items j-center" type="button" onclick="addInventoryItem(this)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                        class="">
                                        <path fill=""
                                            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                        </path>
                                    </svg>
                                    <span class="text">Add Item</span>
                                </button>
                            </div>
                        </div>
                        <div class="newItem">
                            <div class="itemGrid">
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
                                <div class="field">
                                    <p class="opacity-0">p</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash-alt"><path fill="" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
                                </div>
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

//EDIT PURCHASE
function editPurchase(){
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
                                <p class="title v-selector">Select a Vendor</p>
                                <select name="cname" id="" class="v-selector">
                                    <option value="">Project 1A</option>
                                    <option value="">Project 2S</option>
                                </select>
                            </div>
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

//ADD ITEM TO INVENTORY
function addInventoryItem(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup =`<div class="itemPurchase blur">
                            <div class="form">
                                <h2>Add an Item</h2>
                                <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                                <hr>
                                <div class="newItem">
                                    <div class="itemGrid">
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
                                </div>
                                <button class="btn-dashed flex align-items j-center" type="button" onclick="addInventoryItem(this)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-circle"
                                        class="">
                                        <path fill=""
                                            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z">
                                        </path>
                                    </svg>
                                    <span class="text">Add Another Item</span>
                                </button>
                                <div class="action-btn flex">
                                    <button type="button" class="btn-success">Add</button>
                                    <button type="button" class="btn-warning" onclick="closemainPopup()">Cancel</button>
                                </div>
                            </div>
                        </div>`;
    mainPopup.innerHTML = childPopup;
}
function editInventoryItem(){
    const mainPopup = document.querySelector(`.main-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup =`<div class="itemPurchase blur">
                            <div class="form">
                                <h2>Edit an Item</h2>
                                <button type="button" class="btn-warning close" onclick="closemainPopup()">Close</button>
                                <hr>
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
                                    <button type="button" class="btn-success">Update</button>
                                    <button type="button" class="btn-warning" onclick="closemainPopup()">Cancel</button>
                                </div>
                            </div>
                        </div>`;
    mainPopup.innerHTML = childPopup;
}

