import {IWorkingExperience} from '../../models/interface/ApplicationData.interface'
import userdata,{IWorkingExperienceDataModel} from '../../models/application/WorkingExperience'

export default class WorkingExperienceServis{
    public async AddData(user_params:IWorkingExperience): Promise<IWorkingExperienceDataModel>{
        const _session = new userdata(user_params);
        return await _session.save();
    }
}
