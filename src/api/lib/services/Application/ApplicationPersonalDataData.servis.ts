import { Types } from 'mongoose';
import { IApplicationData } from '../../models/interface/ApplicationData.interface';
import userdata, { IApplicatinpersonalDataModel } from '../../models/application/personalData.schema';

export default class ApplicatinpersonalDataServis {
    public async AddData(user_params: IApplicationData): Promise<IApplicatinpersonalDataModel> {
        const _session = new userdata(user_params);
        return await _session.save();
    }

    public async findByNic(nic: string): Promise<IApplicatinpersonalDataModel> {
        return userdata.findOne({ nic: nic });
    }

    public async findById(id: Types.ObjectId): Promise<IApplicatinpersonalDataModel> {
        return userdata.findById(id);
    }

    public async recordExistsById(id: Types.ObjectId): Promise<boolean> {
        const existingRecord = await this.findById(id);
        return !existingRecord;
    }
}
