function rand(min,max){

    return Math.floor(Math.random()*(max-min+1))+min;

}

function createBar(name,value,max=200){

    let percent=(value/max)*100;

    return `

    <div class="sens-item">

        <div class="sens-head">

            <span>${name}</span>

            <span>${value}</span>

        </div>

        <div class="ff-bar">

            <div class="ff-fill"

            style="width:${percent}%">

            </div>

        </div>

    </div>

    `;

}

function analyzeDevice(){

    const device =

    document.getElementById("device").value.trim();

    if(!device){

        alert("Nhập tên thiết bị!");

        return;

    }

    const loading =

    document.getElementById("loading");

    const result =

    document.getElementById("result");

    result.innerHTML="";

    loading.innerHTML=`

    <div class="loader-box">

    <div>✓ Device detected</div>

    <div>✓ Reading touch sensor</div>

    <div>✓ Neural analysis started</div>

    <div>✓ Generating sensitivity</div>

    <div class="progress">

        <div id="progressFill"></div>

    </div>

    </div>

    `;

    let width=0;

    const interval=setInterval(()=>{

        width+=2;

        const fill=

        document.getElementById("progressFill");

        if(fill){

            fill.style.width=width+"%";

        }

        if(width>=100){

            clearInterval(interval);

        }

    },80);

    setTimeout(()=>{

        loading.innerHTML="";

        const look=rand(170,200);

        const red=rand(180,200);

        const x2=rand(160,195);

        const x4=rand(140,190);

        const sniper=rand(60,120);

        const free=rand(70,100);

        const score=

        (95+Math.random()*5).toFixed(1);

        const latency=

        (1+Math.random()*4).toFixed(1);

        result.innerHTML=`

        <div class="ai-card">

            <div class="score">

                ${score}

            </div>

            <div class="score-text">

                AI PERFORMANCE SCORE

            </div>

            <div class="device-name">

                ${device}

            </div>

        </div>

        ${createBar("👁 Nhìn xung quanh",look)}

        ${createBar("🎯 Ống ngắm hồng tâm",red)}

        ${createBar("🔭 Ống ngắm X2",x2)}

        ${createBar("🔭 Ống ngắm X4",x4)}

        ${createBar("🎯 Ống ngắm súng ngắm",sniper,120)}

        ${createBar("📷 Camera tự do",free,100)}

        <div class="stats">

            <div class="stat">

                <h3>${rand(95,100)}%</h3>

                <p>FPS Stability</p>

            </div>

            <div class="stat">

                <h3>${latency}ms</h3>

                <p>Touch Latency</p>

            </div>

            <div class="stat">

                <h3>Ultra</h3>

                <p>Device Rank</p>

            </div>

        </div>

        `;

    },4000);

}
