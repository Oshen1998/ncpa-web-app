import * as mongoose from 'mongoose';
import {IOLExamination} from '../interface/ApplicationData.interface'
import {GRADE} from '../../constants/index'

const Schema = mongoose.Schema;
export type IOLExaminationDataModel = Document & IOLExamination;

const schema = new Schema<IOLExaminationDataModel>({
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
    Sinhala:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    English:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    Mathematics:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    Science:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    Religion:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    History:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    Basket1:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    Basket2:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
    Basket3:{
        type:String,
        enum:[GRADE.A,GRADE.B,GRADE.C,GRADE.F,GRADE.S],
        required: true,
    },
});

export default mongoose.model("OL_Examination_Data",schema);