const windowStage = document.querySelector("#windowStage"),
 numObjects = document.querySelector("#num_objects"),
 txtQuantity = document.querySelector("#txt_quantity"),
 btnAdd = document.querySelector("#btn_add"),
 btnRemove = document.querySelector("#btn_remove")

let windowWidth = windowStage.offsetWidth
let windowHeight = windowStage.offsetHeight

let Balls = []
let numberBalls = 0

class Ball{
    constructor(arrayBalls, windowStage){
        this.size = ~~(Math.random()*10) + 10

        this.positionX = ~~(Math.random()*(windowWidth-this.size))
        this.positionY = ~~(Math.random()*(windowHeight-this.size))

        this.velocityX = ~~(Math.random()*2) +.5
        this.velocityY = ~~(Math.random()*2) +.5

        this.directionX = (Math.random()*10) > 5 ? 1 : -1
        this.directionY = (Math.random()*10) > 5 ? 1 : -1

        this.colorR = ~~(Math.random()*255)
        this.colorG = ~~(Math.random()*255)
        this.colorB = ~~(Math.random()*255)

        this.windowStage = windowStage
        this.arrayBalls = arrayBalls

        this.id = Date.now()+"_"+~~(Math.random()*100000000000000) // random sorted
        
        this.control = setInterval(this.controlFunc,10)
        this.me = document.getElementById(this.id)
        numberBalls++
        numObjects.innerHTML = numberBalls

        this.draw()
    }
    isMy=()=>{
        return this.arrayBalls.indexOf(this)
    }
    removed=()=>{
        clearInterval(this.control)
        Balls = Balls.filter((b)=>{
            if(b.id!=this.id){
                return b
            }
        })
        this.me.remove()
        numberBalls--
        numObjects.innerHTML = numberBalls
    }
    draw = () => {
        const div = document.createElement('div');
        div.setAttribute("id", this.id);
        div.setAttribute("class", "ball");
        div.setAttribute("style",`left:${this.positionX}px;top:${this.positionY}px;width:${this.size}px;height:${this.size}px;background-color:rgb(${this.colorR},${this.colorG},${this.colorB})`);
        this.windowStage.appendChild(div);
        this.me = div; 
    }
    
    
    colision_borders=()=>{
        if(this.positionX+this.size >= windowWidth){
            this.directionX=-1
        } else if(this.positionX <= 0){
            this.directionX=1
        }

        if(this.positionY+this.size >= windowHeight){
            this.directionY=-1
        } else if(this.positionY <= 0){
            this.directionY=1
        }
    }
    controlFunc = () => {
        this.colision_borders();
        this.positionX += this.directionX * this.velocityX;
        this.positionY += this.directionY * this.velocityY;
        this.me.setAttribute("style",`left:${this.positionX}px;top:${this.positionY}px;width:${this.size}px;height:${this.size}px;background-color:rgb(${this.colorR},${this.colorG},${this.colorB})`);
        if ((this.positionX > windowWidth) || (this.positionY > windowHeight)) {
            this.removed();
        }
    }
    
}


window.addEventListener("resize", ()=>{
    windowWidth = windowStage.offsetWidth
    windowHeight = windowStage.offsetHeight
})

btnAdd.addEventListener("click", ()=>{
    const ballsQuantity = txtQuantity.value
    for(let i = 0; i < ballsQuantity; i++){
        Balls.push(new Ball(Balls, windowStage))
    }
    txtQuantity.value = ''
    
})

btnRemove.addEventListener("click", ()=>{
    Balls.map((b)=>{
        b.removed()

    })
})

