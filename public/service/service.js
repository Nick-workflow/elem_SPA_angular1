/**
 * Created by yangt on 2017/3/15.
 */
app.service('carService',[function () {
    this.carData = {

    };
    this.carSum = 0;
    this.carNum = 0;

    this.add = function (c) {

        if(this.carData[c.food_id]){
            this.carData[c.food_id].num++;
            this.carData[c.food_id].sum = this.carData[c.food_id].num * this.carData[c.food_id].price;
        }else {
            c.num = 1;
            c.sum = c.price;
            this.carData[c.food_id] = c;
        }

        this.carS();
    }

    this.sub = function (c){
        if(this.carData[c.food_id].num > 1){
            this.carData[c.food_id].num--;
            this.carData[c.food_id].sum = this.carData[c.food_id].num * this.carData[c.food_id].price;
        }else {
            delete this.carData[c.food_id];
        }

        this.carS();
    }

    this.removeAll = function () {
        this.carData = {
            // isEmpty:true
        };
        this.carSum = 0;

        return {
            carData: this.carData,
            carSum: this.carSum
        }
    }

    this.carS = function () {
        this.carSum = 0;
        this.carNum = 0;
        for(i in this.carData){
            this.carSum += this.carData[i].sum;
            this.carNum += this.carData[i].num;
            // console.log(i)
        }
        // console.log(this.carSum)
    }
}])