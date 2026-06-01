function rand(min,max){

    return Math.floor(Math.random()*(max-min+1))+min;

}

function analyzeDevice(){

    const device =

        document.getElementById("device").value;

    if(!device){

        alert("Nhập tên thiết bị trước!");

        return;

    }

    document.getElementById("loading").innerHTML =

    `

    <div class="scan">

        [✓] Đã nhận diện: ${device}<br>

        [✓] Đang quét CPU...<br>

        [✓] Đang phân tích màn hình...<br>

        [✓] Đang tối ưu AI...

    </div>

    `;

    setTimeout(()=>{

        document.getElementById("result").innerHTML =

        `

        <h2>📱 ${device}</h2>

        <div class="card">

        👁 Nhìn xung quanh: ${rand(170,200)}

        </div>

        <div class="card">

        🎯 Hồng tâm: ${rand(180,200)}

        </div>

        <div class="card">

        🔭 Ống ngắm X2: ${rand(160,195)}

        </div>

        <div class="card">

        🔭 Ống ngắm X4: ${rand(130,185)}

        </div>

        <div class="card">

        🎯 Súng ngắm: ${rand(60,120)}

        </div>

        <div class="card">

        📷 Camera tự do: ${rand(70,100)}%

        </div>

        <br>

        <div class="success">

        ✓ AI ENGINE GIA KHÁNH IOS V9.8

        <br>

        ✓ Tương thích: 99.8%

        </div>

        `;

    },3000);

}
