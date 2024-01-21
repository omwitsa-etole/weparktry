let EL = document.getElementById("pageRoot");
const body = EL;

const layouts = ["Parallel","Angled","Single Level Lots","Multi-Level Lots"];
const rates = ["hourly","flat"]


const startFunction =(e)=>{
	EL = document.getElementById("pageRoot");
	
}
window.addEventListener("load",startFunction);

function addParking(){
	let el = document.createElement("div");
	el.classList.add("normal")
	el.setAttribute("style","width: 620px;")
	let types = ""
	
	let rateType = ""
	for(const layout of layouts.keys()){
		console.log(layouts[layout])
		types +=`<option value=${layouts[layout]}>${layouts[layout]}</option>`; 
	} 
	for(const rate of rates){
		rateType += `<option value=${rate}>${rate}</option>`
	}
	el.innerHTML = `
<div class="page-content" style="width: 600px;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-9" style="width: 100%;height: 100%;position:relative;">
        <div class="card-new" style="width: 100%;">
          <div class="form-step form-step1">
            <div class="form-step-head card-innr">
              <div class="step-head">
                <div class="step-number">01</div>
                <div class="step-head-text">
                  <h4>Parking Details</h4>
                  
                </div>
              </div>
            </div>
           
            <div class="form-step-fields card-innr">
              <div class="note note-plane note-light-alt note-md pdb-1x">
                
                
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                      Name <span class="text-danger">*</span>
                    </label>
                    <input class="input-bordered" type="text" id="name" />
                  </div>
                 
                </div>
              
               
              
                <div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                      Address <span class="text-danger">*</span>
                    </label>
                    <input class="input-bordered" type="text" id="address" />
                  </div>
                 
                </div>
               
                <div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                     Slots <span class="text-danger">*</span>
                    </label>
                    <input class="input-bordered" type="number" id="slots"/>
                  </div>
                
                </div>
               
                
				
				<div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                      Type <span class="text-danger">*</span>
                    </label>
                    <select>
						${types}
					</select>
                  </div>
                  
                </div>
				
				<div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                      Rate <span class="text-danger">*</span>
                    </label>
                    <input class="input-bordered date-picker" type="number" id="rate-value" />
                  </div>
                  
                </div>
				
				<div class="col-md-6">
                  <div class="input-item input-with-label">
                    <label class="input-item-label">
                      Rate type <span class="text-danger">*</span>
                    </label>
                    <select id="rate-type">${rateType}</select>
                  </div>
                  
                </div>
              
              </div>
              <div class="btn-card">
              <button class="btn-submit" onclick="newParking()">Submit</button>
			  <button class="btn-submit cancel" onclick="closeTab()">Cancel</button>
			  </div>
            
          </div>
        </div>
       
      </div>
    </div>
  </div>
  
</div>
	
	`;
	body.innerHTML = "";
	
	body.appendChild(el);
	body.setAttribute("style","display:block;")
	
}

function newParking(){
	
	let el = document.createElement("div");
	el.classList.add("normal");
	el.innerHTML = `

<div class="card"> 
  <button type="button" class="dismiss" onclick="addParking()">×</button> 
  <div class="header"> 
    <div class="image">
      
	  </div> 
      <div class="content">
         <span class="title">Parking space added</span> 
         <p class="message">Your parking space has been added, continue to add slots in preview</p> 
         </div> 
         <div class="actions">
            <button type="button" class="history" onclick="previewParking()">Preview</button> 
            <button type="button" class="track" onclick="addParking()">Back</button> 
</div> 
</div> 
</div>

	`;
	openTab();
	body.appendChild(el);
}

function previewParking(){
	let el = document.createElement("div");
	el.classList.add("normal");
	el.innerHTML = `Preview parking spots`;
	openTab();
	body.appendChild(el);
}

function closeTab(){
	body.removeAttribute("style");
}
function openTab(){
	body.setAttribute("style","display:block");
}

function parkingMap(){
	const body = document.getElementById("page-content");
	body.innerHTML = `
	<div style="position:relative;width: 100%;">
	<h4>ParkingMap</h4>
	<a class="settings-map" id="settings-map">
		<i class="fa-solid fa-bars"></i>
	</a>
	<hr/>
	</div>
	<div class="map-container">
		<div class="parkingmap map-row">
		
			<div class="parking-header">
				<h4>Parking Space Map</h4>
				<a class="refresh-map">
					<i class="fa-solid fa-rotate"></i>
				</a>
			</div>
			<div class="parking-body">
				<canvas id="parking-canvas"></canvas>
			</div>
		</div>
		<div class="map-settings map-row" id="map-settings">
			<div class="parking-header">
				<h4>Settings</h4>
				
			</div>
			<div class="settings-body">
				<ul class="setting-options">
					<li value="path" onclick="newContext(this.value)">Add Path </li>
					<li value="slot" onclick="newContext(this.value)">Add Slot </li>
				</ul>
			</div>
		</div>
	</div>
	`;
	$("#settings-map").click(()=>{
		const el = document.getElementById("map-settings");
		if(el.classList.contains("showing")){
			el.classList.remove("showing");
		}else{
			el.classList.add("showing");
		}
	})
}


function newContext(route){
	const canvas = document.getElementById("parking-canvas");
	let width = 140;let height = 140;
	let x = 0;let y=0;
	const ctx = canvas.getContext("2d"); //drawing object
	 //object color
	switch(route){
		case "path":
			ctx.fillStyle = "#23232b";
			x = 15;
			break;
		case "slot":
			ctx.fillStyle = "#FF7474";
			y = 200;
			break;
		default:
			break;
	}
	//ctx.fillRect(x, y, width, height);
	ctx.beginPath();
	//ctx.moveTo(20, 20);
	ctx.lineTo(20, 100);
	ctx.lineTo(70, 100);
	ctx.moveTo(70, 70);
	ctx.lineTo(20, 100);
	ctx.lineTo(70, 100);
	ctx.stroke();
}