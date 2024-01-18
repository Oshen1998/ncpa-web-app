import { Types } from 'mongoose';
import {IOLExamination} from '../../models/interface/ApplicationData.interface'
import userdata,{IOLExaminationDataModel} from '../../models/application/OLExamination'

export default class OLExaminationServis{
    public async AddData(user_params:IOLExamination): Promise<IOLExaminationDataModel>{
        const _session = new userdata(user_params);
        return await _session.save();
    }
    
    public async findByIndex(index_no: number): Promise<boolean> {
        return userdata.findOne({ index_no: index_no });
    }
}
