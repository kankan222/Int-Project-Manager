function hideSectionPopup(event){
    document.querySelector(`.section-popup`).classList.add('hide');
}

//EDIT WORK TYPE
function editWorkType(event){
    const mainPopup = document.querySelector(`.section-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="settings-popup">
                            <div class="flex align-start j-between">
                                <h2>Edit <span class="edit-span">Work Type</span></h2>
                                <button type="button" class="btn-warning close" onclick="hideSectionPopup()">Close</button>
                            </div> 
                            <div class="form">
                                <div class="field">
                                    <input type="text" name="" id="" placeholder="Type here">
                                </div>
                                <div class="action-btn flex">
                                    <button type="button" class="btn-success">Update</button>
                                    <button type="button" class="btn-warning" onclick="closeItemPopup()">Cancel</button>
                                </div>
                            </div>                    
                        </div>`
    mainPopup.innerHTML = childPopup;
}

//EDIT PAYMENT TYPE
function editPaymentType(event){
    const mainPopup = document.querySelector(`.section-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="settings-popup">
                            <div class="flex align-start j-between">
                                <h2>Edit <span class="edit-span">Payment Type</span></h2>
                                <button type="button" class="btn-warning close" onclick="hideSectionPopup()">Close</button>
                            </div> 
                            <div class="form">
                                <div class="field">
                                    <input type="text" name="" id="" placeholder="Type here">
                                </div>
                                <div class="action-btn flex">
                                    <button type="button" class="btn-success">Update</button>
                                    <button type="button" class="btn-warning" onclick="closeItemPopup()">Cancel</button>
                                </div>
                            </div>                    
                        </div>`
    mainPopup.innerHTML = childPopup;
}
//EDIT SUB TASK 
function subTaskEdit(event){
    const mainPopup = document.querySelector(`.section-popup`);
    mainPopup.classList.remove(`hide`);
    mainPopup.innerHTML='';
    const childPopup = `<div class="settings-popup">
                            <div class="flex align-start j-between">
                                <h2>Edit <span class="edit-span">Sub Task</span></h2>
                                <button type="button" class="btn-warning close" onclick="hideSectionPopup()">Close</button>
                            </div> 
                            <div class="form">
                                <div class="field">
                                    <input type="text" name="" id="" placeholder="Type here">
                                </div>
                                <div class="action-btn flex">
                                    <button type="button" class="btn-success">Update</button>
                                    <button type="button" class="btn-warning" onclick="closeItemPopup()">Cancel</button>
                                </div>
                            </div>                    
                        </div>`
    mainPopup.innerHTML = childPopup;
}