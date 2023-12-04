import * as mongoose from 'mongoose';
import{IProfessional} from "../interface/ApplicationData.interface"
import{DEGREETYPES} from '../../constants/index'

const Schema = mongoose.Schema;
export type IProfessionalDataModel = Document & IProfessional;

const schema = new Schema<IProfessionalDataModel>({
    ApplicantId:{
        type:'ObjectID',
        required: true,
    },
    dtype:{
        type:String,
        enum:[DEGREETYPES.Advance_Diploma,DEGREETYPES.Certificate,DEGREETYPES.Diploma,DEGREETYPES.NVQ_Level],
        required: true,
    },
    Field:{
        type:String,
        required: true,
    },
    Institution:{
        type:String,
        required: true,
    },
    AwardDate:{
        type:Date,
        required: true,
    },
    Duration:{
        type:Date,
        required: true,
    },
});

export default mongoose.model("Professional_Data",schema);
