const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017",{
    dbName:"mongodb_practice"
}).then(()=>{
    console.log("DataBase Connected");
}).catch((err)=>{
    console.log(err);
})

const studentschema = new mongoose.Schema({
    name:String,
    isCompleted:Boolean,
    favNumber:Number
})

const Student = new mongoose.model("Student",studentschema);


const addNew = async ()=>{
    // const ss=new Student({
    //     name:"Abhisek",
    //     isCompleted:true,
    //     favNumber:5
    // })
    
    // await ss.save();

    // or use below line
    // const ss = await Student.create({
    //     name:"Bibek",
    //     isCompleted:true,
    //     favNumber:3
    // });

    // console.log(ss);
    // const a1 = await Student.find();
    // console.log(a1);

    // const a2 = await Student.find({favNumber:{$eq:6}});//eq means equal
    // console.log(a2);
    
    // const a3 = await Student.find({favNumber:{$gt:4}});//gt means greater than
    // console.log(a3);

    // const a4 = await Student.find({favNumber:{$gte:4}});//gte means greater than equal to
    // console.log(a4);
    
    const a5 = await Student.find({favNumber:{$in:[4,5]}});//it is like IN SQL
    console.log(a5);

    const a6 = await Student.find({favNumber:{$nin:[4,5]}});//it is like NOT IN SQL
    console.log(a6);
}

addNew();