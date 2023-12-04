import * as mongoose from 'mongoose';
import{IMasterDegree} from "../interface/ApplicationData.interface"

const Schema = mongoose.Schema;
export type IMasterDegreeDataModel = Document & IMasterDegree;

const schema = new Schema<IMasterDegreeDataModel>({
    ApplicantId:{
        type:'ObjectID',
        required: true,
    },
    degree:{
        type:String,
        required: true,
    },
    university:{
        type:String,
        required: true,
    },
    AwardDate:{
        type:Date,
        required: true,
    },
    EffectiveDate:{
        type:Date,
        required: true,
    },
});

export default mongoose.model("Master_Degrees",schema);
