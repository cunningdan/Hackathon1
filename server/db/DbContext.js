import mongoose from "mongoose";
import CharacterSchema from "../models/Character";
import ProfileSchema from "../models/Profile";
import CommentSchema from "../models/Comment";
import UserSchema from "../models/User";

class DbContext {
  Characters = mongoose.model("Character", CharacterSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Comments = mongoose.model("Comment", CommentSchema);
  Users = mongoose.model("User", UserSchema)
}

export const dbContext = new DbContext();
