import mongoose, { model } from 'mongoose';
import bcrypt from "bcryptjs";
import JWT from 'jsonwebtoken';
const {Schema} = mongoose;

const UserSchema = new Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
});

UserSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})
UserSchema.methods = {
    //compare password
    comparePassword: async function(enteredPassword){
        return await bcrypt.compare(enteredPassword, this.password)
    },
    //generate JWT Token
    getJWTtoken: function(){
       return JWT.sign({_id: this._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRY
        })
    },
}
const UserModel = model('User', UserSchema);

export default UserModel;