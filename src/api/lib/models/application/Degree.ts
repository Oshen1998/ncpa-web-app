import * as mongoose from 'mongoose';
import{IDegree} from "../interface/ApplicationData.interface"
import{GRADEOFDEGREE} from '../../constants/index'

const Schema = mongoose.Schema;
export type IDegreeDataModel = Document & IDegree;

const schema = new Schema<IDegreeDataModel>({
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
    grade:{
        type:String,
        enum:[GRADEOFDEGREE.First_Class_Honours,GRADEOFDEGREE.Lower_Second_Class_Honours,GRADEOFDEGREE.Third_Class_Honours,GRADEOFDEGREE.Upper_Second_Class_Honours],
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

export default mongoose.model("Degrees",schema);
