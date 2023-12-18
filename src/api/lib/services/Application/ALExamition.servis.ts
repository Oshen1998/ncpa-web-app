import { Types } from 'mongoose';
import {IALExamination} from '../../models/interface/ApplicationData.interface'
import userdata,{IALExaminationDataModel} from '../../models/application/ALExamination'

export default class OLExaminationServis{
    public async AddData(user_params:IALExamination): Promise<IALExaminationDataModel>{
        const _session = new userdata(user_params);
        return await _session.save();
    }
    
    public async findByIndex(index_no: number): Promise<boolean> {
        return userdata.findOne({ index_no: index_no });
    }
}
