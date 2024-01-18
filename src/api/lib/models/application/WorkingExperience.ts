import * as mongoose from 'mongoose';
import{IWorkingExperience} from "../interface/ApplicationData.interface"

const Schema = mongoose.Schema;
export type IWorkingExperienceDataModel = Document & IWorkingExperience;

const schema = new Schema<IWorkingExperienceDataModel>({
    ApplicantId:{
        type:'ObjectID',
        required: true,
    },
    Employer:{
        type:String,
        required: true,
    },
    Designation:{
        type:String,
        required: true,
    },
    StartDate:{
        type:Date,
        required: true,
    },
    EndDate:{
        type:Date,
        required: true,
    },
});

export default mongoose.model("Working_Experience",schema);
