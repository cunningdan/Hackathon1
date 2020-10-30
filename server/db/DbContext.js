import mongoose from "mongoose";
import CharacterSchema from "../models/Character";
import ProfileSchema from "../models/Profile";
import CommentSchema from "../models/Comment";

class DbContext {
  Characters = mongoose.model("Character", CharacterSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Comments = mongoose.model("Comment", CommentSchema);
}

export const dbContext = new DbContext();
