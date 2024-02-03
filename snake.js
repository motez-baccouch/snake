class Body{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    setX(x){
        this.x=x;
    }

    setY(y){
        this.y=y;
    }

}

class Snake{
    constructor(cols,rows){
        this.cols = cols;
        this.rows = rows;
        this.size = 1;
        this.head=new Body(floor(cols/2),floor(rows/2))
        this.snake=new Array();
        this.snake.push(this.head);
    }

    show(){
        
        for (let i = 0; i< this.size; i++) {
            rect((width/this.cols)*this.snake[i].getX(),(height/rows)*this.snake[i].getY(),height/this.cols, width/this.rows);
        }
    }
    
    move(direction){
        if(direction=="up"){
            let aux=this.snake;
            if(this.snake[0].getY()==0){
                this.snake[0].setY(this.rows-1);  
            }else{
                this.snake[0].setY(this.snake[0].getY() - 1);            }
            console.log(this.snake[0].getX()+" "+this.snake[0].getY())

            if(this.snake.length>1){
                for (let i = 1; i < this.snake.length; i++) {
                    this.snake[i]=aux[i-1];
                }
            }
        }
        if(direction=="down"){
            let aux=this.snake;
            if(this.snake[0].getY()==(this.rows-1)){
                this.snake[0].setY(0);   
            }else{
                this.snake[0].setY(this.snake[0].getY()+1);
            }
            console.log(this.snake[0].getX()+" "+this.snake[0].getY())

            if(this.snake.length>1){
                for (let i = 1; i < this.snake.length; i++) {
                    this.snake[i]=aux[i-1];
                }
            }
        }
        if(direction=="left"){
            let aux=this.snake;
            if(this.snake[0].getX()==0){
                this.snake[0].setX(this.cols-1);   
            }else{
                this.snake[0].setX(this.snake[0].getX()-1);
            }
            if(this.snake.length>1){
                for (let i = 1; i < this.snake.length; i++) {
                    this.snake[i]=aux[i-1];
                }
            }
        }
        if(direction=="right"){
            let aux=this.snake;
            if(this.snake[0].getX()==(this.cols-1)){
                this.snake[0].setX(0);   
            }else{
                this.snake[0].setX(this.snake[0].getX()+1);
            }
            
            if(this.snake.length>1){
                for (let i = 1; i < this.snake.length; i++) {
                    this. snake[i]=aux[i-1];
                }
            }
        } 
    }

    eat(fruit){
      if(fruit==1){
        this.size++;
      }
    }

    collision(){
     this.snake[0].setY(0);
    }


}