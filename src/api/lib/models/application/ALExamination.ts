import * as mongoose from 'mongoose';
import {IALExamination} from '../interface/ApplicationData.interface'
import {GRADE,STREAM} from '../../constants/index'

const Schema = mongoose.Schema;
export type IALExaminationDataModel = Document & IALExamination;

const schema = new Schema<IALExaminationDataModel>({
    ApplicantId:{
        type:'ObjectID',
        required: true,
    },
    year:{
        type:String,
        required: true,
    },
    index_no:{
        type:Number,
        required: true,
    },
    stream:{
        type:String,
        enum:[STREAM.Arts,STREAM.Biological,STREAM.Maths,STREAM.Technology],
        required: true,
    },
    sub1Name:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    sub1Grade:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    sub2Name:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    sub2Grade:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    sub3Name:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    sub3Grade:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
});

export default mongoose.model("AL_Examination_Data",schema);